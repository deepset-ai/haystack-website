---
title: "File Converters"
metaTitle: "File Converters"
metaDescription: ""
slug: "/docs/file_converters"
date: "2020-09-03"
id: "file_convertersmd"
---

# File Converters

## Base


```
class haystack.indexing.file_converters.base.BaseConverter(remove_numeric_tables: Optional[bool] = None, remove_header_footer: Optional[bool] = None, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
Bases: `object`
```

Base class for implementing file converts to transform input documents to text format for indexing in database.


```
__init__(remove_numeric_tables: Optional[bool] = None, remove_header_footer: Optional[bool] = None, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
```

* **Parameters**

    
    * **remove_numeric_tables** – This option uses heuristics to remove numeric rows from the tables.
    The tabular structures in documents might be noise for the reader model if it
    does not have table parsing capability for finding answers. However, tables
    may also have long strings that could possible candidate for searching answers.
    The rows containing strings are thus retained in this option.


    * **remove_header_footer** – use heuristic to remove footers and headers across different pages by searching
    for the longest common string. This heuristic uses exact matches and therefore
    works well for footers like “Copyright 2019 by XXX”, but won’t detect “Page 3 of 4”
    or similar.


    * **remove_whitespace** – strip whitespaces before or after each line in the text.


    * **remove_empty_lines** – remove more than two empty lines in the text.


    * **valid_languages** – validate languages from a list of languages specified in the ISO 639-1
    ([https://en.wikipedia.org/wiki/ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)) format.
    This option can be used to add test for encoding errors. If the extracted text is
    not one of the valid languages, then it might likely be encoding error resulting
    in garbled text.



```
abstract extract_pages(file_path: pathlib.Path)
```

```
find_and_remove_header_footer(pages: List[str], n_chars: int, n_first_pages_to_ignore: int, n_last_pages_to_ignore: int)
```

Heuristic to find footers and headers across different pages by searching for the longest common string.
For headers we only search in the first n_chars characters (for footer: last n_chars).
Note: This heuristic uses exact matches and therefore works well for footers like “Copyright 2019 by XXX”, but won’t detect “Page 3 of 4” or similar.


* **Parameters**

    
    * **pages** – list of strings, one string per page


    * **n_chars** – number of first/last characters where the header/footer shall be searched in


    * **n_first_pages_to_ignore** – number of first pages to ignore (e.g. TOCs often don’t contain footer/header)


    * **n_last_pages_to_ignore** – number of last pages to ignore



* **Returns**

    (cleaned pages, found_header_str, found_footer_str)



```
validate_language(text: str)
```

Validate if the language of the text is one of valid languages.

## Docx


```
class haystack.indexing.file_converters.docx.DocxToTextConverter(remove_numeric_tables: Optional[bool] = None, remove_header_footer: Optional[bool] = None, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
Bases: `haystack.indexing.file_converters.base.BaseConverter`
```

```
extract_pages(file_path: pathlib.Path)
```

Extract text from a .docx file.
Note: As docx doesn’t contain “page” information, we actually extract and return a list of paragraphs here.
For compliance with other converters we nevertheless opted for keeping the methods name.


* **Parameters**

    **file_path** – Path to the .docx file you want to convert


## PDF


```
class haystack.indexing.file_converters.pdf.PDFToTextConverter(remove_numeric_tables: Optional[bool] = False, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, remove_header_footer: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
Bases: `haystack.indexing.file_converters.base.BaseConverter`
```

```
__init__(remove_numeric_tables: Optional[bool] = False, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, remove_header_footer: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
```

* **Parameters**

    
    * **remove_numeric_tables** – This option uses heuristics to remove numeric rows from the tables.
    The tabular structures in documents might be noise for the reader model if it
    does not have table parsing capability for finding answers. However, tables
    may also have long strings that could possible candidate for searching answers.
    The rows containing strings are thus retained in this option.


    * **remove_whitespace** – strip whitespaces before or after each line in the text.


    * **remove_empty_lines** – remove more than two empty lines in the text.


    * **remove_header_footer** – use heuristic to remove footers and headers across different pages by searching
    for the longest common string. This heuristic uses exact matches and therefore
    works well for footers like “Copyright 2019 by XXX”, but won’t detect “Page 3 of 4”
    or similar.


    * **valid_languages** – validate languages from a list of languages specified in the ISO 639-1
    ([https://en.wikipedia.org/wiki/ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)) format.
    This option can be used to add test for encoding errors. If the extracted text is
    not one of the valid languages, then it might likely be encoding error resulting
    in garbled text.



```
extract_pages(file_path: pathlib.Path)
```

## Txt


```
class haystack.indexing.file_converters.txt.TextConverter(remove_numeric_tables: Optional[bool] = False, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, remove_header_footer: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
Bases: `haystack.indexing.file_converters.base.BaseConverter`
```

```
__init__(remove_numeric_tables: Optional[bool] = False, remove_whitespace: Optional[bool] = None, remove_empty_lines: Optional[bool] = None, remove_header_footer: Optional[bool] = None, valid_languages: Optional[List[str]] = None)
```

* **Parameters**

    
    * **remove_numeric_tables** – This option uses heuristics to remove numeric rows from the tables.
    The tabular structures in documents might be noise for the reader model if it
    does not have table parsing capability for finding answers. However, tables
    may also have long strings that could possible candidate for searching answers.
    The rows containing strings are thus retained in this option.


    * **remove_whitespace** – strip whitespaces before or after each line in the text.


    * **remove_empty_lines** – remove more than two empty lines in the text.


    * **remove_header_footer** – use heuristic to remove footers and headers across different pages by searching
    for the longest common string. This heuristic uses exact matches and therefore
    works well for footers like “Copyright 2019 by XXX”, but won’t detect “Page 3 of 4”
    or similar.


    * **valid_languages** – validate languages from a list of languages specified in the ISO 639-1
    ([https://en.wikipedia.org/wiki/ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)) format.
    This option can be used to add test for encoding errors. If the extracted text is
    not one of the valid languages, then it might likely be encoding error resulting
    in garbled text.



```
extract_pages(file_path: pathlib.Path)
```

## Tika
