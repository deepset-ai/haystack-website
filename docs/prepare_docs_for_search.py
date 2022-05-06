import os
import json
from deepset_toolkit.dc.index_handling import upload_passages, create_url
import asyncio

token = ""

async def main():
    source_directory = "v1.0.0"
    target_docs_folder = "search_docs"
    if not os.path.exists(target_docs_folder):
        os.makedirs(target_docs_folder)
    mdx_files = get_files_by_ext(source_directory, ".mdx")
    target_filename = source_directory + ".jsonl"
    files_to_jsonl(mdx_files, target_filename)
    url = create_url("api.cloud.deepset.ai", "default")[1]
    await upload_passages(
        index_url=url,
        path=target_filename,
        token=token,
        data_format="jsonl",
        batch_size=1,
        debug=True
    )


def files_to_jsonl(filepaths, output_file):
    processed_filenames = []
    documents = []
    for filepath in filepaths:
        filename = filepath.split("/")[-1]
        if filename in processed_filenames:
            raise Warning("There is already a file called {}. Please rename.".format(filename))
        content = "".join([l for l in open(filepath)])
        curr_document = {
            "text": content,
            "meta": {
                "filepath": filepath,
                "docs_version": output_file.replace(".jsonl", "")
            },
            "file_name": filename
        }
        documents.append(curr_document)
    with open(output_file, "w") as f:
        for d in documents:
            f.write(json.dumps(d) + "\n")


def get_files_by_ext(directory, ext):
    ret = []
    walk_gen = os.walk(directory)
    len_ext = len(ext)
    for curr_dir, folders, files in walk_gen:
        for file in files:
            if file[(-1*len_ext):] == ext:
                ret.append("/".join([curr_dir, file]))
    return ret

def upload_docs_version(version):
    assert token
    mdx_files = get_files_by_ext(version, ".mdx")
    target_filename = version + ".jsonl"
    files_to_jsonl(mdx_files, target_filename)
    url = create_url("api.cloud.deepset.ai", "default")[1]
    upload_passages(
        index_url=url,
        path=target_filename,
        token=token,
        data_format="jsonl",
        batch_size=1,
        debug=True
    )

if __name__ == "__main__":
    versions = sorted([x for x in os.listdir(".") if x[-3:] != ".py"])
    for v in versions:
        print("Uploading {} docs".format(v))
        upload_docs_version(v)

