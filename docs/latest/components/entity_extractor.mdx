# Entity Extractor

The `EntityExtractor` node extracts predefined entities out of a piece of text.
The most common kind of entity extraction is Named Entity Extraction (NER) but
this could also be used to label each word by part of speech.

## Usage

The `EntityExtractor` can be initialized as follows.
Any token classification model from the HuggingFace model hub can be provided as a model name, and it will automatically be downloaded and loaded.

``` python
from haystack.nodes import EntityExtractor

entity_extractor = EntityExtractor(model_name_or_path="dslim/bert-base-NER")
```

To use it in isolation, simply call the `extract()` method.

```
entities = entity_extractor.extract(
    text="Berlin is the capital and largest city of Germany by both area and population. "
         "Its 3.8 million inhabitants make it the European Union's most populous city, "
         "according to population within city limits."
 )
```

The return format is a list of dictionaries containing, the entity string,
the group that the entity belongs to, the start and end character indices and the model's confidence.
Note that multi-token entities such as `European Union` are merged together even though the model is making predictions on a per token level.

```
[{'end': 6,
  'entity_group': 'LOC',
  'score': 0.9997844,
  'start': 0,
  'word': 'Berlin'},
 {'end': 49,
  'entity_group': 'LOC',
  'score': 0.999785,
  'start': 42,
  'word': 'Germany'},
 {'end': 133,
  'entity_group': 'ORG',
  'score': 0.9991541,
  'start': 119,
  'word': 'European Union'}]
```

This node can be put in query a query pipeline so that entity extraction only occurs on retrieved documents.
The extracted entities will populate `Document.meta["entities"]`.

```
pipeline = Pipeline()
pipeline.add_node(component=es_retriever, name="ESRetriever", inputs=["Query"])
pipeline.add_node(component=ner, name="NER", inputs=["ESRetriever"])
pipeline.add_node(component=reader, name="Reader", inputs=["NER"])

result = pipeline.run(query="What is Berlin?")
```

Alternatively, it can be placed in the indexing pipeline so that all documents in the document stores
have extracted entities as part of their metadata.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tip**: You will want to make sure that the `EntityExtractor` comes after the `PreProcessor` since the document splitting
performed by the `PreProcessor` will break alignment with the start and end character indices returned by the `EntityExtractor`.

</div>

```
pipeline = Pipeline()
pipeline.add_node(text_converter, "TextConverter", ["File"])
pipeline.add_node(preprocessor, "PreProcessor", ["TextConverter"])
pipeline.add_node(entity_extractor, "EntityExtractor", ["PreProcessor"])
pipeline.add_node(document_store, "DocumentStore", ["EntityExtractor"])

pipeline.run(file_paths=file_paths)
```

## Use Cases

### Entity Relation

It can also be used in conjunction with question answering as a kind of entity relation extraction.
After extracting all entities within a text, you can form a question that represents a relation using an entity and a template.
For example, after extracting all person names in a set of documents you can then ask the question,
"Who is the father of [PERS]?".
In the most naive implementation, any other entities that occur in the answer to this question can be considered part of the relational triple.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tip**: If you are using the `EntityExtractor` in a question answering pipeline,
check out our utility function `haystack.extractor.entities.simplify_ner_for_qa` which will print
out predicted QA answers as well as the NER entities which are contained in them.

</div>

### Metadata Filtering

Performing entity extraction can be a powerful way to generate metadata data
by which your documents can filtered.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Note**: All the information needed to perform metadata filtering is already there but the format of the extracted entities is not in
the same format as that of other metadata fields.
If using entities for metadata filtering is of interest to you, please feel free to open an issue in our Github!

</div>