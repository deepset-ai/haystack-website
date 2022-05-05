# Translator

The Translator does what it says on the tin: it translates text from one language into another.
Some translation models are language specific while others are multilingual.
See the HuggingFace [Model Hub](https://huggingface.co/models?pipeline_tag=translation&sort=downloads) for a list of available models.
|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| After preprocessing in an indexing Pipeline or after the Retriever in a querying Pipeline |
|__Input__       | [Documents](/components/v1.4.0/documents-answers-labels#document)                                                                                                                                                                  |
|__Output__      | [Documents](/components/v1.4.0/documents-answers-labels#document)                                                                                                             |
|__Classes__     | TransformersTranslator                                                                                                           |
|||

## Usage

You can use the Translator component directly to translate your query or documents:

```python
from haystack import Document
from haystack.nodes import TransformersTranslator

DOCS = [
        Document(
            content="""Heinz von Foerster was an Austrian American scientist
                  combining physics and philosophy, and widely attributed
                  as the originator of Second-order cybernetics."""
        )
    ]
translator = TransformersTranslator(model_name_or_path="Helsinki-NLP/opus-mt-en-fr")
res = translator.translate(documents=DOCS, query=None)
```

## Using the TranslationWrapperPipeline

Let's imagine you have an English corpus of technical docs, but the mother tongue of many of your users is French.
You can use a `Translator` node in your pipeline to:

- Translate the incoming query from French to English
- Search in your English corpus for the right document / answer
- Translate the results back from English to French

```python
from haystack.pipelines import TranslationWrapperPipeline, DocumentSearchPipeline
from haystack.nodes import TransformersTranslator

pipeline = DocumentSearchPipeline(retriever=my_dpr_retriever)

in_translator = TransformersTranslator(model_name_or_path="Helsinki-NLP/opus-mt-fr-en")
out_translator = TransformersTranslator(model_name_or_path="Helsinki-NLP/opus-mt-en-fr")

pipeline_with_translation = TranslationWrapperPipeline(input_translator=in_translator,
                                                       output_translator=out_translator,
                                                       pipeline=pipeline)
```

