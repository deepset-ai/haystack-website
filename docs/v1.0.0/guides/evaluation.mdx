# Evaluation

Haystack has all the tools needed to evaluate whole pipelines or individual nodes, such as Retrievers, Readers and Generators. 
Evaluation and the metrics that it generates are vital for:
- judging how well your system is performing on a given domain.
- comparing the performance of different models
- identifying underperforming components in your pipeline

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tutorial:** This documentation page is meant to give an in depth understanding of the concepts involved in evaluation.
To get started using Haystack for evaluation, we recommend having a look at our [evaluation tutorial](/tutorials/v1.0.0/evaluation)

</div>

## Open vs Closed Domain

There are two evaluation modes known as **open domain** and **closed domain.** The default for pipeline evaluation in Haystack via pipeline.eval()` is **open domain.**

**Open domain** means multiple-document QA (typically over the entire database).
Here, you only look for a match or overlap between the two answer strings.
Even if the predicted answer is extracted from a different position than the correct answer,
that's fine as long as the strings match.

**Closed domain** means single document QA.
In this setting, you want to make sure the correct instance of a string is highlighted as the answer.
So you compare the indexes of predicted against labeled answers.
Even if the two strings have identical content, if they occur in different documents,
or in different positions in the same document, they count as wrong.

## Metrics: Retrieval

### Recall

Recall measures how many times the correct document was among the retrieved documents over a set of queries.
For a single query, the output is binary: either the correct document is contained in the selection, or it is not.
Over the entire dataset, the recall score amounts to a number between zero (no query retrieved the right document) and one (all queries retrieved the right documents).

In some scenarios, there can be multiple correct documents for one query. The metric `recall_single_hit` considers whether at least one of the correct documents is retrieved, whereas `recall_multi_hit` takes into account how many of the multiple correct documents for one query are retrieved.

Note that recall is affected by the number of documents that the retriever returns.
If the retriever returns only one or a few documents, it is a tougher task to retrieve correct documents.
Make sure to set the Retriever's `top_k` to an appropriate value in the pipeline that you evaluate.

### Mean Reciprocal Rank (MRR)

In contrast to the recall metric, mean reciprocal rank takes the position of the top correctly retrieved document (the “rank”) into account.
It does this to account for the fact that a query elicits multiple responses of varying relevance.
Like recall, MRR can be a value between zero (no matches) and one (the system retrieved a correct document for all queries as the top result).
For more details, check out [this page](https://en.wikipedia.org/wiki/Mean_reciprocal_rank)

### Mean Average Precision (mAP)

Mean average precision is similar to mean reciprocal rank but takes into account the position of every correctly retrieved document.
Like MRR, mAP can be a value between zero (no matches) and one (the system retrieved correct documents for all top results).
mAP is particularly useful in cases where there are more than one correct document to be retrieved.
For more details, check out [this page](https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)#Mean_average_precision)


## Metrics: Question Answering

### Exact Match (EM)

Exact match measures the proportion of cases where the predicted answer is identical to the correct answer.
For example, for the annotated question answer pair “What is Haystack?" + "A question answering library in Python”,
even a predicted answer like “A Python question answering library” would yield a zero score because it does not match the expected answer 100 percent.

### F1

The F1 score is more forgiving and measures the word overlap between the labeled and the predicted answer.
Whenever the EM is 1, F1 will also be 1.
To learn more about the F1 score, check out this guide

### Semantic Answer Similarity (SAS)

Semantic Answer Similarity uses a transformer-based cross-encoder architecture to evaluate the semantic similarity of two answers rather than their lexical overlap. 
While F1 and EM would both score “one hundred percent” as sharing zero similarity with “100 %", SAS is trained to assign this a high score.
SAS is particularly useful to seek out cases where F1 doesn't give a good indication of the validity of a predicted answer.

You can already start trying out SAS in our [Evaluation Tutorial](/tutorials/v1.0.0/evaluation). You can read more about SAS in [this paper](https://arxiv.org/abs/2108.06130).

## Datasets

Annotated datasets are crucial for evaluating the retrieval as well as the question answering capabilities of your system.
Haystack is designed to work with question answering datasets that follow SQuAD format.
Please check out our [annotation tool](/guides/v1.0.0/annotation) if you're interested in creating your own dataset.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Data Tool:** have a look at our `SquadData` object in `haystack/squad_data.py` if you'd like to manipulate SQuAD style data using Pandas dataframes.

</div>
