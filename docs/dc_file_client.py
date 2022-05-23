import requests, os, json, asyncio
from tqdm import tqdm
from httpx import AsyncClient

#   Ported from dc-toolkit (only need a small subset of the funcitonality, the dependencies for this script are a lot 
# fewer than for the whole dc-toolkit project)

def create_url(host, workspace, file_limit=2000):
    '''
    Create required URLs

    :param str host: host instance
    :param str workspace: your workspace name
    '''
    files_url = "https://{}/api/v1/workspaces/{}/files?limit={}".format(host, workspace, file_limit)
    index_url = files_url.split("?")[0]
    base_url= (index_url).split("/")[:-1]
    base_url = "/".join(base_url)

    return files_url, index_url, base_url

def auth(token):
    '''
    Authorization by API token.

    :param str token: API token generated in DC UI, ideally stored in .env
    '''
    headers = {
        'Authorization': 'Bearer {}'.format(token)
    }
    return headers

def delete_files(token, index_url, file_ids, batch_size=20):
    '''
    Delete existing files in index.

    param str token: API token generated in DC UI
    param str index_url: workspace url
    param list file_ids: list of file ids
    param int batch_size: batch size for concurrent async requests
    '''
    headers = auth(token=token)

    print("Deleting:", len(file_ids), "files...")
    loop = asyncio.new_event_loop()
    tasks = []
    for file_id in file_ids:
        if len(tasks) == batch_size:
            loop.run_until_complete(asyncio.wait(tasks))
            tasks = []

        print(index_url+'/'+file_id)

        tasks.append(loop.create_task(delete_file(index_url+"/"+file_id, headers)))

    loop.run_until_complete(asyncio.wait(tasks))
    loop.close()


async def delete_file(file_url, headers):
    '''
    Deletes a single file.

    param str file_url: file url
    param dict headers: the headers to be sent with the request
    '''
    async with AsyncClient() as client:
        try:
            response = await client.delete(file_url, headers=headers)
            response.raise_for_status()

        except Exception as exception:
            print(exception)


def upload_passages(index_url, path, token, data_format, batch_size=10, debug=False):
    '''
    Index files in workspace.

    param str index_url: url to specific index
    param str path: path to the data to be indexed
    param str data_format: which format is the data in (so far only jsonl or whole directory implemented)
    param bool debug: if debug only a fraction of the data gets indexed
    '''

    headers = auth(token)

    if data_format == 'jsonl':
        passages = []
        with open(path, "r") as f:
            for line in f:
                passages.append(json.loads(line.strip()))

        print('Indexing from jsonl.')
        print("About to index", len(passages), "passages in DC.")

        loop = asyncio.new_event_loop()
        tasks = []
        for passage in tqdm(passages):
            if len(tasks) == batch_size:
                loop.run_until_complete(asyncio.wait(tasks))
                tasks = []
            tasks.append(loop.create_task(upload_passage(index_url, passage, token)))
        loop.run_until_complete(asyncio.wait(tasks))
        loop.close()

    elif data_format == 'directory': # TODO: make async
        print('Indexing from directory.')

        for root, dirs, files in os.walk(path):
            for ix, f in enumerate(tqdm(files)):
                if debug is True and ix > 2:
                    break

                payload = {'meta': '{"name":"test"}'}
                files = [
                    ('file', (f, open(os.path.join(root, f), 'rb'), 'text/plain'))
                ]
                requests.request("POST", index_url, headers=headers, data=payload, files=files)

async def upload_passage(index_url, passage, token, content_field='text', meta_field='meta', file_name_field='file_name'):
    """
    Upload passages to workspace asynchronically.

    :param str index_url: the DC url that the passage should be uploaded to.
    :param dict passage: passage as a dict
    :param str token: API token generated in DC UI
    :param str content_field: field in the passage dict where the content is located
    :param str meta_field: field in the passage dict where meta data is located
    :param str file_name_field: field in the passage dict where the file name is located
    """
    headers=auth(token=token)
    async with AsyncClient() as client:
        try:
            meta_dict = json.dumps(passage.get(meta_field, {}))
            payload = {'text': passage[content_field], 'meta': meta_dict}
            files = []

            file_name = passage[file_name_field]
            params = {
                'file_name': file_name + '.txt' if file_name[-4:] != '.txt' else file_name
            }

            response = await client.post(index_url, headers=headers, data=payload, files=files, params=params)
            response.raise_for_status()

        except Exception as exception:
            print(exception)

def get_uploaded_files(index_url, token):
    '''
    Returns a dict of files that are already uploaded.
    '''
    headers = auth(token)
    headers['accept'] = 'application/json'
    params = {'limit': '10000000'}
    response = requests.get(index_url, headers=headers,
                            params=params)
    resp_dict = response.json()
    return resp_dict