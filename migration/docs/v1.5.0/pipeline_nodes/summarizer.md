# Summarizer

The Summarizer gives a short overview of a long Document.
The Summarizer can give you a glimpse of what Documents your Retriever is returning.

You can use any summarization model from
[Hugging Face Transformers](https://huggingface.co/models?filter=summarization) by providing the model name.
By default, the Google [Pegasus](https://ai.googleblog.com/2020/06/pegasus-state-of-art-model-for.html) model is loaded.

|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| After preprocessing in an indexing Pipeline or after the Retriever in a querying Pipeline |
|__Input__       | [Documents](/components/v1.5.0/documents-answers-labels#document)                                                                                                                                                                  |
|__Output__      | [Documents](/components/v1.5.0/documents-answers-labels#document)                                                                                                             |
|__Classes__     | TransformersSummarizer                                                                                                           |
|||

## Usage

To initialize and run a stand-alone Summarizer:

```python
from haystack.nodes import TransformersSummarizer
from haystack import Document

docs = [Document("PG&E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions.\
                 The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by\
                 the shutoffs which were expected to last through at least midday tomorrow.")]

summarizer = TransformersSummarizer(model_name_or_path="google/pegasus-xsum")
summary = summarizer.predict(documents=docs, generate_single_summary=True)
```

The contents of summary should contain both the summarization and also the original document text:

```python
[
    {
        "text": "California's largest electricity provider has turned off power to hundreds of thousands of customers.",
        "meta": {
            "context": "PGE stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions."
        },
        ...
    }
]
```

To use a Summarizer in a pipeline:

```python
from haystack import Pipeline

p = Pipeline()
p.add_node(component=retriever, name="ESRetriever1", inputs=["Query"])
p.add_node(component=summarizer, name="Summarizer", inputs=["ESRetriever1"])
res = p.run(query="What did Einstein work on?")
```
