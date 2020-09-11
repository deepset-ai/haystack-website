---
title: "Retriever"
metaTitle: "Retriever"
metaDescription: ""
slug: "/docs/apiretriever"
date: "2020-09-03"
id: "apiretrievermd"
---

# Retriever

## Base


```
cass haystack.retriever.base.BaseRetriever()
Bases: `abc.ABC`
```

## Dense

```
class haystack.retriever.dense.DensePassageRetriever(document_store: haystack.database.base.BaseDocumentStore, embedding_model: str, use_gpu: bool = True, batch_size: int = 16, do_lower_case: bool = False, use_amp: str = None)
Bases: `haystack.retriever.base.BaseRetriever`
```

Retriever that uses a bi-encoder (one transformer for query, one transformer for passage).
See the original paper for more details:
Karpukhin, Vladimir, et al. (2020): “Dense Passage Retrieval for Open-Domain Question Answering.”
([https://arxiv.org/abs/2004.04906](https://arxiv.org/abs/2004.04906)).


```
__init__(document_store: haystack.database.base.BaseDocumentStore, embedding_model: str, use_gpu: bool = True, batch_size: int = 16, do_lower_case: bool = False, use_amp: str = None)
```

Init the Retriever incl. the two encoder models from a local or remote model checkpoint.
The checkpoint format matches the one of the original author’s in the repository ([https://github.com/facebookresearch/DPR](https://github.com/facebookresearch/DPR))
See their readme for manual download instructions: [https://github.com/facebookresearch/DPR#resources–data-formats](https://github.com/facebookresearch/DPR#resources--data-formats)


* **Example**

    # remote model from FAIR
    >>> DensePassageRetriever(document_store=your_doc_store, embedding_model=”dpr-bert-base-nq”, use_gpu=True)
    # or from local path
    >>> DensePassageRetriever(document_store=your_doc_store, embedding_model=”some_path/ber-base-encoder.cp”, use_gpu=True)



* **Parameters**

    
    * **document_store** – An instance of DocumentStore from which to retrieve documents.


    * **embedding_model** – Local path or remote name of model checkpoint. The format equals the 
    one used by original author’s in [https://github.com/facebookresearch/DPR](https://github.com/facebookresearch/DPR). 
    Currently available remote names: “dpr-bert-base-nq”


    * **use_gpu** – Whether to use gpu or not


    * **batch_size** – Number of questions or passages to encode at once


    * **do_lower_case** – Whether to lower case the text input in the tokenizer


    * **encoder_model_type** – 


    * **use_amp** – Whether to use Automatix Mixed Precision optimization from apex’s to improve speed and memory consumption.


    * **use_amp** – Optional usage of Automatix Mixed Precision optimization from apex’s to improve speed and memory consumption.
    Choose None or AMP optimization level:

    > 
    >     * None -> Not using amp at all


    >     * ’O0’ -> Regular FP32


    >     * ’O1’ -> Mixed Precision (recommended, if optimization wanted)




```
embed_passages(texts: List[str])
```
Create embeddings for a list of passages using the passage encoder


* **Parameters**

    **texts** – passage to embed



* **Returns**

    embeddings, one per input passage



```
embed_queries(texts: List[str])
```
Create embeddings for a list of queries using the query encoder


* **Parameters**

    **texts** – queries to embed



* **Returns**

    embeddings, one per input queries



```
class haystack.retriever.dense.EmbeddingRetriever(document_store: haystack.database.elasticsearch.ElasticsearchDocumentStore, embedding_model: str, use_gpu: bool = True, model_format: str = 'farm', pooling_strategy: str = 'reduce_mean', emb_extraction_layer: int = - 1)
Bases: `haystack.retriever.base.BaseRetriever`
```

```
__init__(document_store: haystack.database.elasticsearch.ElasticsearchDocumentStore, embedding_model: str, use_gpu: bool = True, model_format: str = 'farm', pooling_strategy: str = 'reduce_mean', emb_extraction_layer: int = - 1)
```

* **Parameters**

    
    * **document_store** – An instance of DocumentStore from which to retrieve documents.


    * **embedding_model** – Local path or name of model in Hugging Face’s model hub. Example: ‘deepset/sentence_bert’


    * **use_gpu** – Whether to use gpu or not


    * **model_format** – Name of framework that was used for saving the model. Options: ‘farm’, ‘transformers’, ‘sentence_transformers’


    * **pooling_strategy** – Strategy for combining the embeddings from the model (for farm / transformers models only).
    Options: ‘cls_token’ (sentence vector), ‘reduce_mean’ (sentence vector),
    reduce_max (sentence vector), ‘per_token’ (individual token vectors)


    * **emb_extraction_layer** – Number of layer from which the embeddings shall be extracted (for farm / transformers models only).
    Default: -1 (very last layer).



```
embed(texts: Union[List[str], str])
```
Create embeddings for each text in a list of texts using the retrievers model (self.embedding_model)
:param texts: texts to embed
:return: list of embeddings (one per input text). Each embedding is a list of floats.


```
embed_passages(texts: List[str])
```
Create embeddings for a list of passages. For this Retriever type: The same as calling .embed()


* **Parameters**

    **texts** – passage to embed



* **Returns**

    embeddings, one per input passage



```
embed_queries(texts: List[str])
```
Create embeddings for a list of queries. For this Retriever type: The same as calling .embed()


* **Parameters**

    **texts** – queries to embed



* **Returns**

    embeddings, one per input queries


## Sparse


```
class haystack.retriever.sparse.ElasticsearchFilterOnlyRetriever(document_store: haystack.database.elasticsearch.ElasticsearchDocumentStore, custom_query: str = None)
Bases: `haystack.retriever.sparse.ElasticsearchRetriever`
```

Naive “Retriever” that returns all documents that match the given filters. No impact of query at all.
Helpful for benchmarking, testing and if you want to do QA on small documents without an “active” retriever.


```
class haystack.retriever.sparse.ElasticsearchRetriever(document_store: haystack.database.elasticsearch.ElasticsearchDocumentStore, custom_query: str = None)
Bases: `haystack.retriever.base.BaseRetriever`
```

```
__init__(document_store: haystack.database.elasticsearch.ElasticsearchDocumentStore, custom_query: str = None)
```

* **Parameters**

    
    * **document_store** – an instance of a DocumentStore to retrieve documents from.


    * **custom_query** – query string as per Elasticsearch DSL with a mandatory question placeholder($question).

    > Optionally, ES filter clause can be added where the values of terms are placeholders
    > that get substituted during runtime. The placeholder(${filter_name_1}, ${filter_name_2}..)
    > names must match with the filters dict supplied in self.retrieve().

    > An example custom_query:

    {

        “size”: 10,
        “query”: {

        > ”bool”: {

        >     “should”: [{“multi_match”: {

        >         “query”: “${question}”,                 // mandatory $question placeholder
        >         “type”: “most_fields”,
        >         “fields”: [“text”, “title”]}}],

        >     ”filter”: [                                 // optional custom filters

        >         {“terms”: {“year”: “${years}”}},
        >         {“terms”: {“quarter”: “${quarters}”}},
        >         {“range”: {“date”: {“gte”: “${date}”}}}
        >         ],

        > }

        },

    }

    > For this custom_query, a sample retrieve() could be:
    > self.retrieve(query=”Why did the revenue increase?”,

    > > filters={“years”: [“2019”], “quarters”: [“Q1”, “Q2”]})




```
eval(label_index: str = 'feedback', doc_index: str = 'eval_document', label_origin: str = 'gold_label', top_k: int = 10)
```
Performs evaluation on the Retriever.
Retriever is evaluated based on whether it finds the correct document given the question string and at which
position in the ranking of documents the correct document is.

Returns a dict containing the following metrics:

    
    * “recall”: Proportion of questions for which correct document is among retrieved documents


    * “mean avg precision”: Mean of average precision for each question. Rewards retrievers that give relevant
    documents a higher rank.


* **Parameters**

    
    * **label_index** – Index/Table in DocumentStore where labeled questions are stored


    * **doc_index** – Index/Table in DocumentStore where documents that are used for evaluation are stored


    * **top_k** – How many documents to return per question



```
class haystack.retriever.sparse.Paragraph(paragraph_id, document_id, text, meta)
Bases: `tuple`
```

```
document_id()
```
Alias for field number 1


```
meta()
```
Alias for field number 3


```
paragraph_id()
```
Alias for field number 0


```
text()
```
Alias for field number 2


```
class haystack.retriever.sparse.TfidfRetriever(document_store: haystack.database.base.BaseDocumentStore)
Bases: `haystack.retriever.base.BaseRetriever`
```

Read all documents from a SQL backend.

Split documents into smaller units (eg, paragraphs or pages) to reduce the
computations when text is passed on to a Reader for QA.

It uses sklearn’s TfidfVectorizer to compute a tf-idf matrix.


```
__init__(document_store: haystack.database.base.BaseDocumentStore)
Initialize self.  See help(type(self)) for accurate signature.
```