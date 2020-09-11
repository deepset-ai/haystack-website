---
title: "Reader"
metaTitle: "Reader"
metaDescription: ""
slug: "/docs/apireader"
date: "2020-09-03"
id: "apireadermd"
---

# Reader

## Base


```
class haystack.reader.base.BaseReader()
Bases: `abc.ABC`
```

## FARM


```
class haystack.reader.farm.FARMReader(model_name_or_path: Union[str, pathlib.Path], context_window_size: int = 150, batch_size: int = 50, use_gpu: bool = True, no_ans_boost: Optional[int] = None, top_k_per_candidate: int = 3, top_k_per_sample: int = 1, num_processes: Optional[int] = None, max_seq_len: int = 256, doc_stride: int = 128)
Bases: `haystack.reader.base.BaseReader`
```

Transformer based model for extractive Question Answering using the FARM framework ([https://github.com/deepset-ai/FARM](https://github.com/deepset-ai/FARM)).
While the underlying model can vary (BERT, Roberta, DistilBERT …) the interface remains the same.

With a FARMReader, you can:

    
    * directly get predictions via predict()


    * fine-tune the model on QA data via train()


```
__init__(model_name_or_path: Union[str, pathlib.Path], context_window_size: int = 150, batch_size: int = 50, use_gpu: bool = True, no_ans_boost: Optional[int] = None, top_k_per_candidate: int = 3, top_k_per_sample: int = 1, num_processes: Optional[int] = None, max_seq_len: int = 256, doc_stride: int = 128)
```

* **Parameters**

    
    * **model_name_or_path** – directory of a saved model or the name of a public model:
    - ‘bert-base-cased’
    - ‘deepset/bert-base-cased-squad2’
    - ‘deepset/bert-base-cased-squad2’
    - ‘distilbert-base-uncased-distilled-squad’
    ….
    See [https://huggingface.co/models](https://huggingface.co/models) for full list of available models.


    * **context_window_size** – The size, in characters, of the window around the answer span that is used when displaying the context around the answer.


    * **batch_size** – Number of samples the model receives in one batch for inference
    Memory consumption is much lower in inference mode. Recommendation: increase the batch size to a value so only a single batch is used.


    * **use_gpu** – Whether to use GPU (if available)


    * **no_ans_boost** – How much the no_answer logit is boosted/increased.
    Possible values: None (default) = disable returning “no answer” predictions

    > Negative = lower chance of “no answer” being predicted
    > Positive = increase chance of “no answer”



    * **top_k_per_candidate** – How many answers to extract for each candidate doc that is coming from the retriever (might be a long text).

        Note: - This is not the number of “final answers” you will receive
        (see top_k in FARMReader.predict() or Finder.get_answers() for that)


        * FARM includes no_answer in the sorted list of predictions



    * **top_k_per_sample** – How many answers to extract from each small text passage that the model can
    process at once (one “candidate doc” is usually split into many smaller “passages”).
    You usually want a very small value here, as it slows down inference and you
    don’t gain much of quality by having multiple answers from one passage.

    > > Note: - This is not the number of “final answers” you will receive
    > > (see top_k in FARMReader.predict() or Finder.get_answers() for that)


    >     * FARM includes no_answer in the sorted list of predictions



    * **num_processes** (*int*) – the number of processes for multiprocessing.Pool. Set to value of 0 to disable
    multiprocessing. Set to None to let Inferencer determine optimum number. If you
    want to debug the Language Model, you might need to disable multiprocessing!


    * **max_seq_len** – max sequence length of one input text for the model


    * **doc_stride** – length of striding window for splitting long texts (used if len(text) > max_seq_len)



```
classmethod convert_to_onnx(model_name_or_path, opset_version: int = 11, optimize_for: Optional[str] = None)
```

Convert a PyTorch BERT model to ONNX format and write to ./onnx-export dir. The converted ONNX model
can be loaded with in the FARMReader using the export path as model_name_or_path param.

Usage:

    ```python
    >>> from haystack.reader.farm import FARMReader
    >>> FARMReader.convert_to_onnx(model_name_or_path="deepset/bert-base-cased-squad2", optimize_for="gpu_tensor_core")
    >>> FARMReader(model_name_or_path=Path("onnx-export"))
    ```


* **Parameters**

    
    * **opset_version** – ONNX opset version


    * **optimize_for** – optimize the exported model for a target device. Available options
    are “gpu_tensor_core” (GPUs with tensor core like V100 or T4),
    “gpu_without_tensor_core” (most other GPUs), and “cpu”.



```
eval(document_store: haystack.database.elasticsearch.ElasticsearchDocumentStore, device: str, label_index: str = 'feedback', doc_index: str = 'eval_document', label_origin: str = 'gold_label')
```

Performs evaluation on evaluation documents in Elasticsearch DocumentStore.

Returns a dict containing the following metrics:

    
    * “EM”: Proportion of exact matches of predicted answers with their corresponding correct answers


    * “f1”: Average overlap between predicted answers and their corresponding correct answers


    * “top_n_accuracy”: Proportion of predicted answers that match with correct answer


* **Parameters**

    
    * **document_store** (*ElasticsearchDocumentStore*) – The ElasticsearchDocumentStore containing the evaluation documents


    * **device** (*str*) – The device on which the tensors should be processed. Choose from “cpu” and “cuda”.


    * **label_index** (*str*) – Elasticsearch index where labeled questions are stored


    * **doc_index** (*str*) – Elasticsearch index where documents that are used for evaluation are stored



```
eval_on_file(data_dir: str, test_filename: str, device: str)
```

Performs evaluation on a SQuAD-formatted file.

Returns a dict containing the following metrics:

    
    * “EM”: exact match score


    * “f1”: F1-Score


    * “top_n_accuracy”: Proportion of predicted answers that match with correct answer


* **Parameters**

    
    * **data_dir** (*Path** or **str*) – The directory in which the test set can be found


    * **test_filename** (*str*) – The name of the file containing the test data in SQuAD format.


    * **device** (*str*) – The device on which the tensors should be processed. Choose from “cpu” and “cuda”.


```
predict(question: str, documents: List[haystack.database.base.Document], top_k: Optional[int] = None)
```

Use loaded QA model to find answers for a question in the supplied list of Document.

```
Returns dictionaries containing answers sorted by (desc.) probability
Example:
{‘question’: ‘Who is the father of Arya Stark?’,
‘answers’: [

> > > {‘answer’: ‘Eddard,’,
> > > ‘context’: ” She travels with her father, Eddard, to King’s Landing when he is “,
> > > ‘offset_answer_start’: 147,
> > > ‘offset_answer_end’: 154,
> > > ‘probability’: 0.9787139466668613,
> > > ‘score’: None,
> > > ‘document_id’: ‘1337’
> > > },

> > …

> ]

}
```

* **Parameters**

    
    * **question** – question string


    * **documents** – list of Document in which to search for the answer


    * **top_k** – the maximum number of answers to return



* **Returns**

    dict containing question and answers



```
train(data_dir: str, train_filename: str, dev_filename: Optional[str] = None, test_file_name: Optional[str] = None, use_gpu: Optional[bool] = None, batch_size: int = 10, n_epochs: int = 2, learning_rate: float = 1e-05, max_seq_len: Optional[int] = None, warmup_proportion: float = 0.2, dev_split: Optional[float] = 0.1, evaluate_every: int = 300, save_dir: Optional[str] = None)
```

Fine-tune a model on a QA dataset. Options:
- Take a plain language model (e.g. bert-base-cased) and train it for QA (e.g. on SQuAD data)
- Take a QA model (e.g. deepset/bert-base-cased-squad2) and fine-tune it for your domain (e.g. using your labels collected via the haystack annotation tool)


* **Parameters**

    
    * **data_dir** – Path to directory containing your training data in SQuAD style


    * **train_filename** – filename of training data


    * **dev_filename** – filename of dev / eval data


    * **test_file_name** – filename of test data


    * **dev_split** – Instead of specifying a dev_filename you can also specify a ratio (e.g. 0.1) here
    that get’s split off from training data for eval.


    * **use_gpu** – Whether to use GPU (if available)


    * **batch_size** – Number of samples the model receives in one batch for training


    * **n_epochs** – number of iterations on the whole training data set


    * **learning_rate** – learning rate of the optimizer


    * **max_seq_len** – maximum text length (in tokens). Everything longer gets cut down.


    * **warmup_proportion** – Proportion of training steps until maximum learning rate is reached.
    Until that point LR is increasing linearly. After that it’s decreasing again linearly.
    Options for different schedules are available in FARM.


    * **evaluate_every** – Evaluate the model every X steps on the hold-out eval dataset


    * **save_dir** – Path to store the final model



* **Returns**

    None


## Transformers

```
class haystack.reader.transformers.TransformersReader(model: str = 'distilbert-base-uncased-distilled-squad', tokenizer: str = 'distilbert-base-uncased', context_window_size: int = 30, use_gpu: int = 0, n_best_per_passage: int = 2)
Bases: `haystack.reader.base.BaseReader`
```

Transformer based model for extractive Question Answering using the huggingface’s transformers framework
([https://github.com/huggingface/transformers](https://github.com/huggingface/transformers)).
While the underlying model can vary (BERT, Roberta, DistilBERT …) the interface remains the same.

With the reader, you can:

    
    * directly get predictions via predict()


```
__init__(model: str = 'distilbert-base-uncased-distilled-squad', tokenizer: str = 'distilbert-base-uncased', context_window_size: int = 30, use_gpu: int = 0, n_best_per_passage: int = 2)
```

Load a QA model from Transformers.
Available models include:
- distilbert-base-uncased-distilled-squad
- bert-large-cased-whole-word-masking-finetuned-squad
- bert-large-uncased-whole-word-masking-finetuned-squad

See [https://huggingface.co/models](https://huggingface.co/models) for full list of available QA models


* **Parameters**

    
    * **model** – name of the model


    * **tokenizer** – name of the tokenizer (usually the same as model)


    * **context_window_size** – num of chars (before and after the answer) to return as “context” for each answer.
    The context usually helps users to understand if the answer really makes sense.


    * **use_gpu** – < 0  -> use cpu
    >= 0 -> ordinal of the gpu to use



```
predict(question: str, documents: List[haystack.database.base.Document], top_k: Optional[int] = None)
```

Use loaded QA model to find answers for a question in the supplied list of Document.

```
Returns dictionaries containing answers sorted by (desc.) probability
Example:
{‘question’: ‘Who is the father of Arya Stark?’,
‘answers’: [

> > > {‘answer’: ‘Eddard,’,
> > > ‘context’: ” She travels with her father, Eddard, to King’s Landing when he is “,
> > > ‘offset_answer_start’: 147,
> > > ‘offset_answer_end’: 154,
> > > ‘probability’: 0.9787139466668613,
> > > ‘score’: None,
> > > ‘document_id’: None
> > > },

> > …

> ]

}
```

* **Parameters**

    
    * **question** – question string


    * **documents** – list of Document in which to search for the answer


    * **top_k** – the maximum number of answers to return



* **Returns**

    dict containing question and answers
