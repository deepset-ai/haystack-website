---
title: "Database"
metaTitle: "Database"
metaDescription: ""
slug: "/documentation/abidatabase"
date: "2020-09-03"
id: "apidatabasemd"
---

# Database

## Base


### class haystack.database.base.BaseDocumentStore()
Bases: `abc.ABC`

Base class for implementing Document Stores.


#### abstract write_documents(documents: List[dict])
Indexes documents for later queries.


* **Parameters**

    **documents** – List of dictionaries.
    Default format: {“text”: “<the-actual-text>”}
    Optionally: Include meta data via {“text”: “<the-actual-text>”,
    “meta”:{“name”: “<some-document-name>, “author”: “somebody”, …}}
    It can be used for filtering and is accessible in the responses of the Finder.



* **Returns**

    None


## Elasticsearch


### class haystack.database.elasticsearch.ElasticsearchDocumentStore(host: str = 'localhost', port: int = 9200, username: str = '', password: str = '', index: str = 'document', search_fields: Union[str, list] = 'text', text_field: str = 'text', name_field: str = 'name', external_source_id_field: str = 'external_source_id', embedding_field: Optional[str] = None, embedding_dim: Optional[int] = None, custom_mapping: Optional[dict] = None, excluded_meta_data: Optional[list] = None, faq_question_field: Optional[str] = None, scheme: str = 'http', ca_certs: bool = False, verify_certs: bool = True, create_index: bool = True)
Bases: `haystack.database.base.BaseDocumentStore`


#### \__init__(host: str = 'localhost', port: int = 9200, username: str = '', password: str = '', index: str = 'document', search_fields: Union[str, list] = 'text', text_field: str = 'text', name_field: str = 'name', external_source_id_field: str = 'external_source_id', embedding_field: Optional[str] = None, embedding_dim: Optional[int] = None, custom_mapping: Optional[dict] = None, excluded_meta_data: Optional[list] = None, faq_question_field: Optional[str] = None, scheme: str = 'http', ca_certs: bool = False, verify_certs: bool = True, create_index: bool = True)
A DocumentStore using Elasticsearch to store and query the documents for our search.

> 
> * Keeps all the logic to store and query documents from Elastic, incl. mapping of fields, adding filters or boosts to your queries, and storing embeddings


> * You can either use an existing Elasticsearch index or create a new one via haystack


> * Retrievers operate on top of this DocumentStore to find the relevant documents for a query


* **Parameters**

    
    * **host** – url of elasticsearch


    * **port** – port of elasticsearch


    * **username** – username


    * **password** – password


    * **index** – Name of index in elasticsearch to use. If not existing yet, we will create one.


    * **search_fields** – Name of fields used by ElasticsearchRetriever to find matches in the docs to our incoming query (using elastic’s multi_match query), e.g. [“title”, “full_text”]


    * **text_field** – Name of field that might contain the answer and will therefore be passed to the Reader Model (e.g. “full_text”).
    If no Reader is used (e.g. in FAQ-Style QA) the plain content of this field will just be returned.


    * **name_field** – Name of field that contains the title of the the doc


    * **external_source_id_field** – If you have an external id (= non-elasticsearch) that identifies your documents, you can specify it here.


    * **embedding_field** – Name of field containing an embedding vector (Only needed when using a dense retriever (e.g. DensePassageRetriever, EmbeddingRetriever) on top)


    * **embedding_dim** – Dimensionality of embedding vector (Only needed when using a dense retriever (e.g. DensePassageRetriever, EmbeddingRetriever) on top)


    * **custom_mapping** – If you want to use your own custom mapping for creating a new index in Elasticsearch, you can supply it here as a dictionary.


    * **excluded_meta_data** – Name of fields in Elasticsearch that should not be returned (e.g. [field_one, field_two]).
    Helpful if you have fields with long, irrelevant content that you don’t want to display in results (e.g. embedding vectors).


    * **scheme** – ‘https’ or ‘http’, protocol used to connect to your elasticsearch instance


    * **ca_certs** – Root certificates for SSL


    * **verify_certs** – Whether to be strict about ca certificates


    * **create_index** – Whether to try creating a new index (If the index of that name is already existing, we will just continue in any case)



#### add_eval_data(filename: str, doc_index: str = 'eval_document', label_index: str = 'feedback')
Adds a SQuAD-formatted file to the DocumentStore in order to be able to perform evaluation on it.


* **Parameters**

    
    * **filename** (*str*) – Name of the file containing evaluation data


    * **doc_index** (*str*) – Elasticsearch index where evaluation documents should be stored


    * **label_index** (*str*) – Elasticsearch index where labeled questions should be stored



#### update_embeddings(retriever)
Updates the embeddings in the the document store using the encoding model specified in the retriever.
This can be useful if want to add or change the embeddings for your documents (e.g. after changing the retriever config).


* **Parameters**

    **retriever** – Retriever



* **Returns**

    None



#### write_documents(documents: List[dict])
Indexes documents for later queries in Elasticsearch.


* **Parameters**

    **documents** – List of dictionaries.
    Default format: {“text”: “<the-actual-text>”}
    Optionally: Include meta data via {“text”: “<the-actual-text>”,
    “meta”:{“name”: “<some-document-name>, “author”: “somebody”, …}}
    It can be used for filtering and is accessible in the responses of the Finder.
    Advanced: If you are using your own Elasticsearch mapping, the key names in the dictionary
    should be changed to what you have set for self.text_field and self.name_field .



* **Returns**

    None


## Memory


### class haystack.database.memory.InMemoryDocumentStore(embedding_field: Optional[str] = None)
Bases: `haystack.database.base.BaseDocumentStore`

In-memory document store


#### \__init__(embedding_field: Optional[str] = None)
Initialize self.  See help(type(self)) for accurate signature.


#### get_all_documents()

#### get_document_by_id(id: str)

#### get_document_count()

#### get_document_ids_by_tags(tags: Union[List[Dict[str, Union[str, List[str]]]], Dict[str, Union[str, List[str]]]])
The format for the dict is {“tag-1”: “value-1”, “tag-2”: “value-2” …}
The format for the dict is {“tag-1”: [“value-1”,”value-2”], “tag-2”: [“value-3]” …}


#### index(: Optional[str])

#### query_by_embedding(query_emb: List[float], filters: Optional[dict] = None, top_k: int = 10, index: Optional[str] = None)

#### update_embeddings(retriever)
Updates the embeddings in the the document store using the encoding model specified in the retriever.
This can be useful if want to add or change the embeddings for your documents (e.g. after changing the retriever config).


* **Parameters**

    **retriever** – Retriever



* **Returns**

    None



#### write_documents(documents: List[dict])
Indexes documents for later queries.


* **Parameters**

    **documents** – List of dictionaries in the format {“text”: “<the-actual-text>”}.
    Optionally, you can also supply “tags”: [“one-tag”, “another-one”]
    or additional meta data via “meta”: {“name”: “<some-document-name>, “author”: “someone”, “url”:”some-url” …}



* **Returns**

    None


## SQL


### class haystack.database.sql.Document(\*\*kwargs)
Bases: `haystack.database.sql.ORMBase`


#### \__init__(\*\*kwargs)
A simple constructor that allows initialization from kwargs.

Sets attributes on the constructed instance using the names and
values in `kwargs`.

Only keys that are present as
attributes of the instance’s class are allowed. These could be,
for example, any mapped columns or relationships.


#### created()

#### id()

#### meta_data()

#### tags()

#### text()

#### updated()

### class haystack.database.sql.DocumentTag(\*\*kwargs)
Bases: `haystack.database.sql.ORMBase`


#### \__init__(\*\*kwargs)
A simple constructor that allows initialization from kwargs.

Sets attributes on the constructed instance using the names and
values in `kwargs`.

Only keys that are present as
attributes of the instance’s class are allowed. These could be,
for example, any mapped columns or relationships.


#### created()

#### document_id()

#### id()

#### tag_id()

#### updated()

### class haystack.database.sql.ORMBase(\*\*kwargs)
Bases: `sqlalchemy.ext.declarative.api.Base`


#### created( = Column(None, DateTime(), table=None, server_default=DefaultClause(<sqlalchemy.sql.functions.now at 0x7f3ceabd2970; now>, for_update=False)))

#### id( = Column(None, Integer(), table=None, primary_key=True, nullable=False))

#### updated( = Column(None, DateTime(), table=None, server_default=DefaultClause(<sqlalchemy.sql.functions.now at 0x7f3ce9fd52b0; now>, for_update=False)))

### class haystack.database.sql.SQLDocumentStore(url: str = 'sqlite://')
Bases: `haystack.database.base.BaseDocumentStore`


#### \__init__(url: str = 'sqlite://')
Initialize self.  See help(type(self)) for accurate signature.


#### get_all_documents()

#### get_document_by_id(id: str)

#### get_document_count()

#### get_document_ids_by_tags(tags: Dict[str, Union[str, List]])
Get list of document ids that have tags from the given list of tags.


* **Parameters**

    **tags** – limit scope to documents having the given tags and their corresponding values.
    The format for the dict is {“tag-1”: “value-1”, “tag-2”: “value-2” …}



#### index(: Optional[str])

#### query_by_embedding(query_emb: List[float], filters: Optional[dict] = None, top_k: int = 10, index: Optional[str] = None)

#### write_documents(documents: List[dict])
Indexes documents for later queries.


* **Parameters**

    **documents** – List of dictionaries in the format {“text”: “<the-actual-text>”}.
    Optionally, you can also supply meta data via “meta”: {“author”: “someone”, “url”:”some-url” …}



* **Returns**

    None



### class haystack.database.sql.Tag(\*\*kwargs)
Bases: `haystack.database.sql.ORMBase`


#### \__init__(\*\*kwargs)
A simple constructor that allows initialization from kwargs.

Sets attributes on the constructed instance using the names and
values in `kwargs`.

Only keys that are present as
attributes of the instance’s class are allowed. These could be,
for example, any mapped columns or relationships.


#### created()

#### documents()

#### id()

#### name()

#### updated()

#### value()
