# File Converters

Use File Converters to extract text from files
in different formats and cast it into the unified Document format.

|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| At the very beginning of an indexing Pipeline |
|__Input__       | Filename                                                                                                                                                                  |
|__Output__      | [Documents](/components/documents-answers-labels#document)                                                                                                             |
|__Classes__     | PDFToTextConverter<br />PDFToTextOCRConverter<br />DocxToTextConverter<br />AzureConverter<br />ImageToTextConverter<br />MarkdownConverter<br />ParsrConverter<br />TikaConverter<br />TextConverter<br />                                                                                                           |
|||

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tutorial:** To see an example of file converters in a pipeline, see the [advanced indexing tutorial](/tutorials/doc-class-index).

</div>

## File Converter Classes

Here's what each of the file convertes type can do:
* `PDFToTextConverter`: Extracts text from a PDF file using the [pdftotext](https://www.xpdfreader.com/pdftotext-man.html library.
* `PDFToTextOCRConverter`: Extracts text from PDF files that contain images using the [pytesseract](https://github.com/madmaze/pytesseract) library.
* `DocxToTextConverter`: Extracts text from .docx files.
* `AzureConverter`: Extracts text and tables from files in the following formats: PDF, JPEG, PNG, BMP, and TIFF. Uses [Microsoft Azure's Form Recognizer](https://azure.microsoft.com/en-us/services/form-recognizer/). To use this converter, you must have an active Azure account and a Form Recognizer or Cognitive Services resource. For more information, see [Form Recognizer](https://docs.microsoft.com/en-us/azure/applied-ai-services/form-recognizer/quickstarts/try-v3-python-sdk#prerequisites).
* `ImageToTextConverter`: Extracts text from image files using the [pytesseract library](https://github.com/madmaze/pytesseract).
* `MarkdownConverter`: Converts markdown to plain text.
* `ParsrConverter`: Extracts text and tables from PDF and .docx files using the open-source [Parsr](https://github.com/axa-group/Parsr) by axa-group.
* `TikaConverter`: Converts files into Documents using [Apache Tika](https://tika.apache.org/).
* `TextConverter`: Preprocesses text files and returns documents. 

## Usage

Click a tab to read more about each converter and see how to initialize it:

<Tabs
  options={[
    {
      title: "PDF",
      content: (
        <pre>
          <code>from haystack.nodes import PDFToTextConverter</code>
          <code>
            converter = PDFToTextConverter(remove_numeric_tables=True,
            valid_languages=["de","en"])
          </code>
          <code>docs = converter.convert(file_path=Path("my-file.pdf"), meta=None)</code>
          <code>
            # Alternatively, if you have a PDF containing images, Haystack uses the pytessaract library under the hood for optical character recognition of image PDFs.
          </code>
          <code>
            from haystack.nodes import PDFToTextOCRConverter
          </code>
          <code>
            converter = PDFToTextOCRConverter(remove_numeric_tables=False,
            valid_languages=["deu","eng"])
          </code>
          <code>docs = converter.convert(file_path=Path("my-file.pdf"), meta=None)</code>
        </pre>
      ),
    },
    {
      title: "DOCX",
      content: (
        <pre>
          <code>from haystack.nodes import DocxToTextConverter</code>
          <code>
            converter = DocxToTextConverter(remove_numeric_tables=True,
            valid_languages=["de","en"])
          </code>
          <code>docs = converter.convert(file_path=Path("my-file.docx"), meta=None)</code>
        </pre>
      ),
    },
     {
      title: "Azure",
      content: (
        <div>
          <p>
            We recommend the <a href="https://azure.microsoft.com/en-us/services/form-recognizer/">Azure Form Recognizer</a> service for parsing tables from PDFs or other complex document structures.
          </p>
          <pre>
            <code>
              from haystack.nodes import AzureConverter
            </code>
            <code>
            converter = AzureConverter(endpoint="some-url",
                 credential_key="my-secret-key")
          </code>
          <code>docs = converter.convert(file_path=Path("my-file.pdf"), meta=None)</code>
          </pre>
        </div>
      ),
    },
    {
      title: "Image",
      content: (
        <div>
          <p>
            Haystack supports extraction of text from images using OCR.
          </p>
          <pre>
            <code>
              from haystack.nodes import ImageToTextConverter
            </code>
            <code>
            converter = ImageToTextConverter(remove_numeric_tables=True,
            valid_languages=["de","en"])
          </code>
          <code>docs = converter.convert(file_path=Path("my-file.png"), meta=None)</code>
          </pre>
        </div>
      ),
    },
                         {
      title: "Markdown",
      content: (
          <pre>
            <code>
              from haystack.nodes import MarkdownConverter
            </code>
            <code>
            converter = MarkdownConverter(remove_numeric_tables=True,
            valid_languages=["de","en"])
          </code>
          <code>docs = converter.convert(file_path=Path("my-file.md"), meta=None)</code>
          </pre>
      ),
    },
  ]}
/>

Haystack also has a `convert_files_to_docs()` utility function that
will convert all txt or pdf files in a given directory.

```
from haystack.utils.preprocessing import convert_files_to_docs
docs = convert_files_to_docs(dir_path=doc_dir)
```

<div style={{ marginBottom: "3rem" }} />
