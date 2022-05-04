# Optimization

## Speeding up Reader

In most pipelines, the Reader will be the most computationally expensive component.
If this is a step that you would like to speed up, you can opt for a smaller Reader model
that can process more passages in the same amount of time.

On our [benchmarks page](https://haystack.deepset.ai/bm/benchmarks), you will find a comparison of
many of the common model architectures. While our default recommendation is RoBERTa,
MiniLM offers much faster processing for only a minimal drop in accuracy.
If you are interested in compressing your own large models into smaller ones similar to TinyBERT, you can also
take a look at our [Model Distillation guide](/guides/model-distillation).
You can find the models that we've trained on [the HuggingFace Model Hub](https://huggingface.co/deepset)

<div style={{ marginBottom: "3rem" }} />

## GPU acceleration

The transformer based models used in Haystack are designed to be run on a GPU enabled machine.
The design of these models means that they greatly benefit from the parallel processing capabilities of graphics cards.
If Haystack has successfully detected a graphics card, you should see these lines in your console output.

```
INFO - farm.utils -   Using device: CUDA
INFO - farm.utils -   Number of GPUs: 1
```

You can track the work load on your CUDA enabled Nvidia GPU by tracking the output of `nvidia-smi -l` on the command line
while your Haystack program is running.

<div style={{ marginBottom: "3rem" }} />

## Document Length

Document length has a very direct impact on the speed of the Reader
which is why we recommend using the `PreProcessor` class to clean and split your documents.
**If you halve the length of your documents, you will halve the workload placed onto your Reader.**

For **sparse retrievers**, very long documents pose a challenge since the signal of the relevant section of text
can get washed out by the rest of the document.
To get a good balance between Reader speed and Retriever performance, we splitting documents to a maximum of 500 words.
If there is no Reader in the pipeline following the Retriever, we recommend that **documents be no longer than 10,000 words**.

**Dense retrievers** are limited in the length of text that they can read in one pass.
As such, it is important that documents are not longer than the dense retriever's maximum input length.
By default, Haystack's DensePassageRetriever model has a maximum length of 256 tokens.
As such, we recommend that documents contain significantly less words.
We have found decent performance with **documents around 100 words long**.

## Respecting Sentence Boundaries

When splitting documents, it is generally not a good idea to let document boundaries fall in the middle of sentences.
Doing so means that each document will contain incomplete sentence fragments
which maybe be hard for both retriever and reader to interpret.
It is therefore recommended to set `split_respect_sentence_boundary=True` when initializing your `PreProcessor`.

<div style={{ marginBottom: "3rem" }} />

## Choosing the Right top-k Values

The `top-k` parameter in both the `Retriever` and `Reader` determine how many results they return.
More specifically, `Retriever` `top-k` dictates how many retrieved documents are passed on to the next stage,
while `Reader` `top-k` determines how many answer candidates to show.

In our experiments, we have found that **`Retriever` `top_k=10`
gives decent overall performance** and so we have set this as the default in Haystack.

The choice of `Retriever` `top-k` is a trade-off between speed and accuracy,
especially when there is a `Reader` in the pipeline.
Setting it higher means passing more documents to the `Reader`,
thus reducing the chance that the answer-containing passage is missed.
However, passing more documents to the `Reader` will create a larger workload for the component.

These parameters can easily be tweaked as follows if using a `Finder`:

```python
answers = pipeline.run(query="What did Einstein work on?", params={"retriever": {"top_k": 10}, "reader": {"top_k": 5}})
```

or like this if directly calling the `Retriever`:

```python
retrieved_docs = retriever.retrieve(top_k=10)
```

<div style={{ marginBottom: "3rem" }} />
