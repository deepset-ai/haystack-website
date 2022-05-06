import os
import json
from deepset_toolkit.dc.index_handling import upload_passages, create_url
import asyncio

token = ""


def files_to_documents(filepaths, output_file):
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
    return documents


def get_files_by_ext(directory, ext):
    ret = []
    walk_gen = os.walk(directory)
    len_ext = len(ext)
    for curr_dir, folders, files in walk_gen:
        for file in files:
            if file[(-1*len_ext):] == ext:
                ret.append("/".join([curr_dir, file]))
    return ret

def prepare_documents(version):
    mdx_files = get_files_by_ext(version, ".mdx")
    target_filename = version + ".jsonl"
    documents = files_to_documents(mdx_files, target_filename)
    return documents

def prepare_all_jsonl(jsonl_filename):
    versions = sorted([x for x in os.listdir(".") if x[-3:] != ".py"])
    all_docs = []
    for v in versions:
        curr_docs = prepare_documents(v)
        all_docs += curr_docs
    with open(jsonl_filename, "w") as f:
        for d in all_docs:
            f.write(json.dumps(d) + "\n")


if __name__ == "__main__":
    jsonl_filename = "all.jsonl"
    prepare_all_jsonl(jsonl_filename)
    url = create_url("api.cloud.deepset.ai", "default")[1]
    assert token
    upload_passages(
        index_url=url,
        path=jsonl_filename,
        token=token,
        data_format="jsonl",
        batch_size=1,
        debug=True
    )
