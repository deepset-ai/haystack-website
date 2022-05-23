import os
import json
import asyncio

def files_to_documents(filepaths, output_file):
    processed_filenames = []
    documents = []
    for filepath in filepaths:
        filename = filepath.split("/")[-1]
        if filename in processed_filenames:
            raise Warning("There is already a file called {}. Please rename.".format(filename))
        
        # not specifying the encoding causes issues on Windows
        content = "".join([l for l in open(filepath, encoding='utf8')])
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


