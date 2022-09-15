import os
from pprint import pprint
import pandas as pd
import regex as re

pattern = r"v\d\.\d\d?.\d"
regex = re.compile(pattern)


OLD_VERSIONS = [
    "v0.4.0",
    "v0.5.0",
    "v0.6.0",
    "v0.7.0",
    "v0.8.0",
    "v0.9.0",
    "v0.10.0",
    "v1.0.0",
    "v1.1.0",
    "v1.2.0"
]

def get_all_files(start_dir, extension=".mdx"):
    ret = []
    extension_len = len(extension)
    for dir, folders, files in os.walk(start_dir):
        for f in files:
            if f[-extension_len:] == extension:
                filepath = dir + "/" + f
                ret.append((dir, f, filepath))
    return ret

def get_all_api_files(start_dir):
    files = get_all_files(start_dir, extension=".md")
    ret = [f for f in files if "/api/" in f[2]]
    return ret


def get_readme_files():
    lines = [l[:-1] for l in open("readme_links")]
    api_lines = [l[:-1] for l in open("readme_api")]
    legit_readme_files = [l for l in lines if legit_readme_file(l)]
    legit_api_lines = [l for l in api_lines if legit_readme_api_file(l)]
    return legit_api_lines + legit_readme_files

def legit_readme_api_file(l):
    subsection_test = "#" not in l
    exclude = [
        "check_status",
        "delete_documents",
        "delete_feedback",
        "export_feedback",
        "feedback",
        "file-upload",
        "get_documents",
        "get_feedback",
        "get_feedback_metrics",
        "haystack_version",
        "post_feedback",
        "query",
        "search",
        "upload_file"
    ]
    exclude_test = True
    for e in exclude:
        if e in l:
            exclude_test = False
            break
    if subsection_test and exclude_test:
        return True
    return False

def legit_readme_file(l):
    must_include = [
        'https://haystack.readme.io/'
    ]
    must_exclude = [
        "dash",
        "#"
    ]
    include_test = any([m in l for m in must_include])
    exclude_test = not any([m in l for m in must_exclude])
    segments = l.split("/")
    final_segment = segments[-1]
    segment_len_test = 6 >= len(segments) >= 5
    final_segment_test = final_segment not in ["", "docs", "recipes", "reference"]
    exclude_segment = "edit" not in segments
    if include_test and exclude_test and segment_len_test and final_segment_test and exclude_segment:
        return True
    return False

def extract_version(x):
    match = regex.search(x)
    if not match:
        return "latest"
    return match.group(0)

def extract_type(x):
    if "reference" in x:
        return "reference"
    elif "docs" in x:
        return "docs"
    else:
        return "other"


def filter_rows_by_values(df, col, values):
    return df[~df[col].isin(values)]


def match(readme_row, df_readme):
    base_filename = readme_row["filename"].replace(".mdx", "").replace(".md", "")
    filenames = [
        base_filename,
        base_filename + "-api",
        base_filename.replace("_definition", ""),
        base_filename.replace("_", "-") + "-api",
        base_filename.replace("_", "-")
    ]
    version = readme_row["version"]
    type = readme_row["type"]
    haystack_match = df_readme[
        (df_readme["filename"].isin(filenames))
        & (df_readme["version"] == version)
        & (df_readme["type"] == type)
    ]
    if len(haystack_match) != 1:
        return None
    return haystack_match["filepath"].values[0]

def rename_files(f):
    new_f = f
    new_f = new_f.replace("file-classifier-api-1", "file-converter-api")
    new_f = new_f.replace("_", "-")
    new_f = new_f.replace("-reference", "")
    new_f = new_f.replace("-1", "-api")
    new_f = new_f.replace("https://haystack.readme.io/", "https://docs.haystack.deepset.ai/")
    return new_f

def update_readme_filenames(readme):
    ret = []
    for filepath, readme_filename, v, type in readme:
        new_filename = readme_filename
        new_filepath = filepath
        if type == "reference":
            new_filename = rename_files(readme_filename)
            new_filepath = rename_files(filepath)
        ret.append((new_filepath, new_filename, v, type))
    return ret

def filepath_to_url(haystack):
    domain = "https://haystack.deepset.ai"
    ret = []
    for haystack_filepath, haystack_filename, haystack_versions, haystack_types in haystack:
        if haystack_versions == "latest" and haystack_types == "docs":
            haystack_url = haystack_filepath.replace("docs/latest", domain)
            sections = haystack_url.split("/")
            new_sections = sections[:-1]
            new_sections.append(sections[-1].replace(".mdx", "").replace("_", "-"))
            haystack_url = "/".join(new_sections)
        elif haystack_versions != "latest" and haystack_types == "docs":
            sections = haystack_filepath.split("/")
            new_sections = [sections[2], sections[1]]
            new_sections.append(sections[-1].replace(".mdx", "").replace("_", "-"))
            new_sections = [domain] + new_sections
            haystack_url = "/".join(new_sections)
        elif haystack_versions == "latest" and haystack_types == "reference":
            sections = haystack_filepath.split("/")
            new_sections = [domain, "reference"]
            new_sections.append(sections[-1].replace(".md", "").replace("_", "-"))
            haystack_url = "/".join(new_sections)
        elif haystack_versions != "latest" and haystack_types == "reference":
            sections = haystack_filepath.split("/")
            new_sections = [domain, "reference", sections[3]]
            new_sections.append(sections[-1].replace(".md", "").replace("_", "-"))
            haystack_url = "/".join(new_sections)
        else:
            raise Exception
        ret.append((haystack_url, haystack_filename, haystack_versions, haystack_types))
    return ret

if __name__ == "__main__":

    readme_files = get_readme_files()
    readme_filenames = [x.split("/")[-1] for x in readme_files]
    readme_files_versions = [extract_version(x) for x in readme_files]
    readme_files_type = [extract_type(x) for x in readme_files]
    readme = zip(readme_files, readme_filenames, readme_files_versions, readme_files_type)
    readme = update_readme_filenames(readme)
    df_readme = pd.DataFrame.from_records(readme, columns=["filepath", "filename", "version", "type"])
    df_readme = filter_rows_by_values(
        df_readme,
        "version",
        OLD_VERSIONS
    )
    print()

    haystack_docs = get_all_files("docs")
    haystack_docs_type = ["docs"] * len(haystack_docs)
    haystack_api = get_all_api_files("../haystack/docs")
    haystack_api_type = ["reference"] * len(haystack_api)
    haystack_files = haystack_docs + haystack_api
    haystack_filepath = [x[2] for x in haystack_files]
    haystack_filename = [x[1] for x in haystack_files]
    haystack_types = haystack_docs_type + haystack_api_type
    haystack_versions = [extract_version(x[0]) for x in haystack_files]
    haystack = zip(haystack_filepath, haystack_filename, haystack_versions, haystack_types)
    haystack = filepath_to_url(haystack)
    df_haystack = pd.DataFrame.from_records(haystack, columns=["filepath", "filename", "version", "type"])
    df_haystack = filter_rows_by_values(
        df_haystack,
        "version",
        OLD_VERSIONS
    )

    df_filled = pd.read_csv("df_haystack.csv")
    matches = []
    for i, row in df_haystack.iterrows():
        potential_match = match(row, df_readme)
        if potential_match is None:
            potential_match_df = df_filled[
                (df_filled["filename"] == row["filename"]) &
                (df_filled["version"] == row["version"]) &
                (df_filled["type"] == row["type"])
            ]
            if len(potential_match_df) == 1:
                potential_match = potential_match_df["filepath"].values[0]
        matches.append(potential_match)
    df_haystack["readme_filepath"] = matches
    df_missing = df_haystack[df_haystack["readme_filepath"].isnull()]
    print(matches.count(None))
    print()

