# PreProcessor

Use the PreProcessor to normalize white spaces, get rid of headers and footers,
clean empty lines in your Documents, or split them into smaller pieces.

Splitting is generally recommended for long Documents
as it makes the Retriever's job easier and speeds up Question Answering.
For suggestions on how best to split your documents, see [Optimization](/guides/v1.4.0/optimization).

|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| As early in an indexing Pipeline as possible but after File Converters and Crawlers |
|__Input__       | [Documents](/components/v1.4.0/documents-answers-labels#document)                                                                                                                                                                  |
|__Output__      | [Documents](/components/v1.4.0/documents-answers-labels#document)                                                                                                                                                                    |
|__Classes__     | PreProcessor                                                                                                                                             |
|||

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tutorial:** Check out our [preprocessing tutorial](/tutorials/v1.4.0/preprocessing) if you'd like to start working with code examples
    or our [advanced indexing tutorial](/tutorials/v1.4.0/doc-class-index) for ideas on what can be done at indexing time.

</div>

## Usage

Initialization:

```python
from haystack.nodes import PreProcessor

processor = PreProcessor(
    clean_empty_lines=True,
    clean_whitespace=True,
    clean_header_footer=True,
    split_by="word",
    split_length=200,
    split_respect_sentence_boundary=True,
    split_overlap=0
)
```

| Argument                        | Type   | Description                                                                                                                                                 |
|---------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clean_empty_lines               | bool   | Whether to normalize 3 or more consecutive empty lines to be just a two empty lines.                                                                        |
| clean_whitespace                | bool   | Whether to remove any whitespace at the beginning or end of each line in the text.                                                                          |
| clean_header_footer             | bool   | Whether to remove any long header or footer texts that are repeated on each page.                                                                           |
| split_by                        | string | Determines what unit the document is split by. Choose from `'word'`, `'sentence'` or `'passage'`.                                                           |
| split_length                    | int    | Sets a maximum number of `'word'`, `'sentence'` or `'passage'` units per output document                                                                    |
| split_respect_sentence_boundary | bool   | Ensures that document boundaries do not fall in the middle of sentences                                                                                     |
| split_overlap                   | int    | Sets the amount of overlap between two adjacent documents after a split. Setting this to a positive number essentially enables the sliding window approach. |

To run the processor by itself:

```python
doc = converter.convert(file_path=file, meta=None)
docs = processor.process(doc)
```

## Document Format

When you are not using an indexing Pipeline, the PreProcessor can take either `Document` objects (recommended)
as input or plain dictionaries.
To learn more about the `Document` class see [Documents, Answers and Labels](/components/v1.4.0/documents-answers-labels).

```python
# Option 1: Native Haystack Documents
docs = [
    Document(
        content='DOCUMENT_TEXT_HERE',
        meta={'name': DOCUMENT_NAME, ...}
        ...
    ), ...
]

# Option 2: Plain dict
docs = [
    {
        'content': 'DOCUMENT_TEXT_HERE',
        'meta': {'name': DOCUMENT_NAME, ...}
    }, ...
]
```

<div style={{ marginBottom: "3rem" }} />
