---
title: "Indexing"
metaTitle: "Indexing"
metaDescription: ""
slug: "/docs/apiindexing"
date: "2020-09-03"
id: "apiindexingmd"
---

# Indexing

## Cleaning


### haystack.indexing.cleaning.clean_wiki_text(text: str)
## Utils


### haystack.indexing.utils.convert_files_to_dicts(dir_path: str, clean_func: Optional[Callable] = None, split_paragraphs: bool = False)
Convert all files(.txt, .pdf) in the sub-directories of the given path to Python dicts that can be written to a
Document Store.


* **Parameters**

    
    * **dir_path** – path for the documents to be written to the database


    * **clean_func** – a custom cleaning function that gets applied to each doc (input: str, output:str)


    * **split_paragraphs** – split text in paragraphs.



* **Returns**

    None



### haystack.indexing.utils.fetch_archive_from_http(url: str, output_dir: str, proxies: Optional[dict] = None)
Fetch an archive (zip or tar.gz) from a url via http and extract content to an output directory.


* **Parameters**

    
    * **url** (*str*) – http address


    * **output_dir** (*str*) – local path


    * **proxies** (*dict*) – proxies details as required by requests library



* **Returns**

    bool if anything got fetched
