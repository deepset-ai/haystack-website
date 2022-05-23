import os
from dc_file_client import upload_passages, create_url, get_uploaded_files, delete_files
from prepare_docs_for_search import prepare_all_jsonl

token = os.getenv('DC_API_TOKEN')
workspace = os.getenv('DC_WORKSPACE')

if __name__ == "__main__":
    jsonl_filename = "all.jsonl"
    prepare_all_jsonl(jsonl_filename)
    url = create_url("api.cloud.deepset.ai", workspace)[1]
    assert token

    print(create_url("api.cloud.deepset.ai", "test-upload-files"))

    existing_files = get_uploaded_files(url, token)
    print(existing_files)

    filepath_id_map = {}
    ids = []
    for file in existing_files['data']:
        filepath_id_map[file['file_id']] = file['meta']['filepath']

    print(filepath_id_map)

    upload_passages(
        index_url=url,
        path=jsonl_filename,
        token=token,
        data_format="jsonl",
        batch_size=1,
        debug=True
    )

    delete_files(token, url, filepath_id_map)
