"""This file will generate a table where the key is a mdx filepath that might no longer be valid as a link since
a renaming or restructuring has happened in the latest version of the docs."""


import os
from pathlib import Path

MANUAL_REDIRECTS = {
    "components/preprocessing.mdx": "pipeline_nodes/preprocessor.mdx",
    "components/primitives.mdx": "components/documents_answers_labels.mdx",
    "usage/preprocessing.mdx": "pipeline_nodes/preprocessor.mdx",
    "components/nodes.mdx": "pipeline_nodes/components_overview.mdx"
}

def generate_redirect_table():

    walked = os.walk(".")

    # Contains all paths to all mdx files
    mdx_filepaths = []
    # Contains paths to mdx files in the latest version of docs
    latest_filepaths = []
    # Will contain a mapping of potential old broken link to equivalent file in latest
    redirect_table = {}

    for curr_dir, dirs, files in walked:
        for f in files:
            filepath = Path(curr_dir) / f
            if f[-4:] == ".mdx":
                mdx_filepaths.append(filepath)
                if "latest/" in str(filepath):
                    latest_filepaths.append(filepath)
    # Unique filepaths when version tags are removed
    filepaths_versionless = set("/".join(str(filepath).split("/")[1:]) for filepath in mdx_filepaths)
    # Filepaths of mdx files in latest without the version tag
    latest_filepaths = ["/".join(str(filepath).split("/")[1:]) for filepath in latest_filepaths]

    for filepath in filepaths_versionless:
        if filepath not in latest_filepaths:
            filename = filepath.split("/")[-1]
            latest_equivalent = [lfp for lfp in latest_filepaths if filename in lfp]
            if latest_equivalent:
                redirect_table[filepath] = latest_equivalent[0]
            elif filepath in MANUAL_REDIRECTS:
                redirect_table[filepath] = MANUAL_REDIRECTS[filepath]
            else:
                redirect_table[filepath] = ""
    return redirect_table

if __name__ == "__main__":
    redirect_table = generate_redirect_table()
