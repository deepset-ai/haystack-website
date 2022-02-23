# Evaluation

Haystack has all the tools needed to evaluate whole pipelines or individual nodes, such as Retrievers, Readers and Generators. 
Evaluation and the metrics that it generates are vital for:
- judging how well your system is performing on a given domain.
- comparing the performance of different models
- identifying underperforming components in your pipeline

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tutorial:** This documentation page is meant to give an in depth understanding of the concepts involved in evaluation.
To get started using Haystack for evaluation, we recommend having a look at our [evaluation tutorial](/tutorials/v1.1.0/evaluation)

</div>

## Integrated vs Isolated Node Evaluation

We distinguish two evaluation modes for pipelines **integrated** and **isolated** node evaluation. The terms refer to whether we evaluate a pipeline node based on the predictions of the preceeding node in the pipeline as input (integrated evaluation) or whether we evaluate it in isolation from the other nodes with the ground-truth labels as input (isolated evaluation). An **integrated** evaluation tells what result quality users will experience when running the pipeline and it is the default for pipeline evaluation in Haystack via `pipeline.eval()`. An **isolated** evaluation tells what the maximum result quality of a node could be if it received the perfect input from the preceeding node. It can be activated in addition via `pipeline.eval(add_isolated_node_eval=True)`. For example, in an ExtractiveQAPipeline comprising a retriever and a reader node, you can find out the upper bounds of the reader's evaluation metrics assuming that the retriever passed on all relevant documents.
If the upper bound (isolated evaluation result) differs a lot from the actually achieved result quality (integrated evaluation result), we suggest that you focus on improving the predictions of the preceeding node to achieve the full performance of the pipeline. If the difference is small, you would need to focus on improving this node itself to improve the pipeline's overall result quality.

What we call **integrated evaluation** is often referred to as **open domain** in literature, which means multiple-document QA (typically over the entire database). The relevant documents need to be identified first in this scenario. In contrast, **isolated evaluation** is referred to as **closed domain**, meaning single document QA. There is no retrieval step involved in this scenario as the relevant document is already given.
In both scenarios, Haystack evaluates the correctness of an extracted answer by looking for a match or overlap between the two answer strings. Even if the predicted answer is extracted from a different position than the correct answer, that's fine as long as the strings match. 

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

You can already start trying out SAS in our [Evaluation Tutorial](/tutorials/v1.1.0/evaluation). You can read more about SAS in [this paper](https://arxiv.org/abs/2108.06130).

## Datasets

Annotated datasets are crucial for evaluating the retrieval as well as the question answering capabilities of your system.
Haystack is designed to work with question answering datasets that follow SQuAD format.
Please check out our [annotation tool](/guides/v1.1.0/annotation) if you're interested in creating your own dataset.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Data Tool:** have a look at our `SquadData` object in `haystack/squad_data.py` if you'd like to manipulate SQuAD style data using Pandas dataframes.

</div>
