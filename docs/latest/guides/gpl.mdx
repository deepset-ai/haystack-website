# Generative Pseudo Labelling (GPL)

Adapt your dense Retriever to a new domain without human annotation. 

Dense retrieval methods require a large amount of training data to work well and are sensitive to domain shifts. Generative Pseudo Labelling (GPL) is a technique that can make dense retrievers more effective in a new domain, without needing human annotators. It uses an ensemble of trained models to generate labeled data that are then used to perform domain adaptation on the dense retriever.

If you want to find out more, here's the original [GPL paper](https://arxiv.org/pdf/2112.07577.pdf).

## How It Works in General

Here's what happens if you want to use GPL to adapt a dense retriever to a new domain:
1. A pretrained query-generation model generates questions for your documents. The original model used for that was the T5 encoder-decoder model, which is similar to the Haystack question generator. 
2. A retrieval system uses the generated queries to retrieve negative passages. Negative passages are documents that are not relevant to the query. 
3. The dense retriever is trained using the generated queries, the source document, and the negative passages. It is trained to give high relevancy scores to the source document but low relevancy scores to a negative passage. This should improve the effectiveness of the dense retriever in the new domain.

## How It Works in Haystack

We added a new node called `PseudoLabelGenerator` and enhanced the `train()` method for EmbeddingRetriever so that you can take advantage of GPL in Haystack. Here are the steps for performing domain adaptation with GPL in Haystack:
1. Initialize `PseudoLabelGenerator` with a `QuestionGenerator` and a Retriever. In this example, we're going to input Documents from the Document Store, that's why we're also importing and defining a Document Store.
```python
from haystack.nodes.retriever import EmbeddingRetriever
from haystack.document_stores import InMemoryDocumentStore
from haystack.nodes.question_generator.question_generator import QuestionGenerator
from haystack.nodes.label_generator.pseudo_label_generator import PseudoLabelGenerator
```

2. Initialize any document store and fill it in with documents from your domain. You don't need any labels:
```python
document_store = InMemoryDocumentStore()
document_store.write_documents(...)
``` 

3. Turn your documents into embeddings:
```python
retriever = EmbeddingRetriever(document_store=document_store, 
                               embedding_model="sentence-transformers/msmarco-distilbert-base-tas-b", 
                               model_format="sentence_transformers",
                               max_seq_len=200)
document_store.update_embeddings(retriever)
```

4. Use `PseudoLabelGenerator` to automatically generate labels and train the Retriever on them:
```python
qg = QuestionGenerator(model_name_or_path="doc2query/msmarco-t5-base-v1", max_length=64, split_length=200, batch_size=12)
psg = PseudoLabelGenerator(qg, retriever)
output, _ = psg.run(documents=document_store.get_all_documents()) 
retriever.train(output["gpl_labels"])
```
And that's it! You now have a fine-tuned retriever.