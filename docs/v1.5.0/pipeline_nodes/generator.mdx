# Generator

The Generator reads a set of documents and generates an answer to a question, word by word.
While extractive QA highlights the span of text that answers a query,
generative QA can return a novel text answer that it has composed.

The best current approaches, such as [Retriever-Augmented Generation](https://arxiv.org/abs/2005.11401) and [LFQA](https://yjernite.github.io/lfqa.html),
can draw upon both the knowledge it gained during language model pretraining (parametric memory)
and the passages provided to it with a Retriever (non-parametric memory).
With the advent of transformer-based retrieval methods such as [Dense Passage Retrieval](https://arxiv.org/abs/2004.04906),
Retriever and Generator can be trained concurrently from the one loss signal.


|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| After the Retriever, you can use it as a substitute to the Reader. |
|__Input__       | [Documents](/components/v1.5.0/documents-answers-labels#document)                                                                                                                                                                   |
|__Output__      | [Answers](/components/v1.5.0/documents-answers-labels#answer)                                                                                                                                                                     |
|__Classes__     | RAGenerator, Seq2SeqGenerator                                                                                                                                               |
|||


**Pros**

- More appropriately phrased answers.
- Able to synthesize information from different texts.
- Can draw on latent knowledge stored in language model.

**Cons**

- Not easy to track what piece of information the generator is basing its response off of.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tutorial:** Build your own generative QA system with [RAG](/tutorials/retrieval-augmented-generation)
and [LFQA](/tutorials/lfqa).

</div>

## Generator Classes 

* `RAGenerator`: [Retrieval-Augmented Generator](https://arxiv.org/abs/2005.11401) based on Hugging Face's [transformers model](https://huggingface.co/transformers/model_doc/rag.html). Its main advantages are a manageable model size and the fact that the answer generation depends on retrieved documents. This means that the model can easily adjust to domain documents even after the training is finished.
* `Seq2SeqGenerator`: A generic sequence-to-sequence generator based on Hugging Face's transformers. You can use it with any Hugging Face language model that extends [GenerationMixin](https://huggingface.co/transformers/main_classes/model.html?transformers.generation_utils.GenerationMixin#transformers.generation_utils.GenerationMixin). See also [How to Generate Text](https://huggingface.co/blog/how-to-generate).

## Usage

To initialize a Generator, run:

``` python
from haystack.nodes import RAGenerator

generator = RAGenerator(
    model_name_or_path="facebook/rag-sequence-nq",
    retriever=dpr_retriever,
    top_k=1,
    min_length=2
)
```

To run a Generator in a pipeline, run:

``` python
from haystack.pipelines import GenerativeQAPipeline

pipeline = GenerativeQAPipeline(generator=generator, retriever=dpr_retriever)
result = pipelines.run(query='What are the best party games for adults?', top_k_retriever=20)
```

To run a stand-alone Generator, run:

``` python
result = generator.predict(
    query='What are the best party games for adults?',
    documents=[doc1, doc2, doc3...],
    top_k=top_k
)
```
