---
title: "Reader"
metaTitle: "Reader"
metaDescription: ""
slug: "/docs/apireader"
date: "2020-09-03"
id: "apireadermd"
---

<a name="reader.farm"></a>
# reader.farm

<a name="reader.farm.FARMReader"></a>
## FARMReader Objects

```python
class FARMReader(BaseReader)
```

Transformer based model for extractive Question Answering using the FARM framework (https://github.com/deepset-ai/FARM).
While the underlying model can vary (BERT, Roberta, DistilBERT, ...), the interface remains the same.

|  With a FARMReader, you can:

 - directly get predictions via predict()
 - fine-tune the model on QA data via train()

<a name="reader.farm.FARMReader.__init__"></a>
#### \_\_init\_\_

```python
 | __init__(model_name_or_path: Union[str, Path], context_window_size: int = 150, batch_size: int = 50, use_gpu: bool = True, no_ans_boost: Optional[float] = None, top_k_per_candidate: int = 3, top_k_per_sample: int = 1, num_processes: Optional[int] = None, max_seq_len: int = 256, doc_stride: int = 128)
```

**Arguments**:

- `model_name_or_path`: Directory of a saved model or the name of a public model:

- ``'bert-base-cased'``
- ``'deepset/bert-base-cased-squad2'``
- ``'deepset/bert-base-cased-squad2'``
- ``'distilbert-base-uncased-distilled-squad'``
- ``...``
See https://huggingface.co/models for full list of available models.
- `context_window_size`: The size, in characters, of the window around the answer span that is used when
displaying the context around the answer.
- `batch_size`: Number of samples the model receives in one batch for inference.
Memory consumption is much lower in inference mode. Recommendation: Increase the batch size
to a value so only a single batch is used.
- `use_gpu`: Whether to use GPU (if available)
- `no_ans_boost`: How much the no_answer logit is boosted/increased.
Possible values:

- None (default) = disable returning "no answer" predictions
- Negative = lower chance of "no answer" being predicted
- Positive = increase chance of "no answer"
- `top_k_per_candidate`: How many answers to extract for each candidate doc that is coming from the retriever
(might be a long text).
Note:

- This is not the number of "final answers" you will receive (see `top_k` in
FARMReader.predict() or Finder.get_answers() for that)
- FARM includes no_answer in the sorted list of predictions
- `top_k_per_sample`: How many answers to extract from each small text passage that the model can
process at once (one "candidate doc" is usually split into many smaller "passages").
You usually want a very small value here, as it slows down inference and you
don't gain much of quality by having multiple answers from one passage.
Note:

- This is not the number of "final answers" you will receive
(see `top_k` in FARMReader.predict() or Finder.get_answers() for that)
- FARM includes no_answer in the sorted list of predictions
- `num_processes`: The number of processes for `multiprocessing.Pool`. Set to value of 0 to disable
multiprocessing. Set to None to let Inferencer determine optimum number. If you
want to debug the Language Model, you might need to disable multiprocessing!
- `max_seq_len`: Max sequence length of one input text for the model
- `doc_stride`: Length of striding window for splitting long texts (used if ``len(text) > max_seq_len``)

<a name="reader.farm.FARMReader.train"></a>
#### train

```python
 | train(data_dir: str, train_filename: str, dev_filename: Optional[str] = None, test_filename: Optional[str] = None, use_gpu: Optional[bool] = None, batch_size: int = 10, n_epochs: int = 2, learning_rate: float = 1e-5, max_seq_len: Optional[int] = None, warmup_proportion: float = 0.2, dev_split: float = 0, evaluate_every: int = 300, save_dir: Optional[str] = None, num_processes: Optional[int] = None)
```

Fine-tune a model on a QA dataset. Options:

- Take a plain language model (e.g. `bert-base-cased`) and train it for QA (e.g. on SQuAD data)
- Take a QA model (e.g. `deepset/bert-base-cased-squad2`) and fine-tune it for your domain (e.g. using your labels collected via the haystack annotation tool)

**Arguments**:

- `data_dir`: Path to directory containing your training data in SQuAD style
- `train_filename`: Filename of training data
- `dev_filename`: Filename of dev / eval data
- `test_filename`: Filename of test data
- `dev_split`: Instead of specifying a dev_filename, you can also specify a ratio (e.g. 0.1) here
that gets split off from training data for eval.
- `use_gpu`: Whether to use GPU (if available)
- `batch_size`: Number of samples the model receives in one batch for training
- `n_epochs`: Number of iterations on the whole training data set
- `learning_rate`: Learning rate of the optimizer
- `max_seq_len`: Maximum text length (in tokens). Everything longer gets cut down.
- `warmup_proportion`: Proportion of training steps until maximum learning rate is reached.
Until that point LR is increasing linearly. After that it's decreasing again linearly.
Options for different schedules are available in FARM.
- `evaluate_every`: Evaluate the model every X steps on the hold-out eval dataset
- `save_dir`: Path to store the final model
- `num_processes`: The number of processes for `multiprocessing.Pool` during preprocessing.
Set to value of 1 to disable multiprocessing. When set to 1, you cannot split away a dev set from train set.
Set to None to use all CPU cores minus one.

**Returns**:

None

<a name="reader.farm.FARMReader.save"></a>
#### save

```python
 | save(directory: Path)
```

Saves the Reader model so that it can be reused at a later point in time.

**Arguments**:

- `directory`: Directory where the Reader model should be saved

<a name="reader.farm.FARMReader.predict_batch"></a>
#### predict\_batch

```python
 | predict_batch(question_doc_list: List[dict], top_k_per_question: int = None, batch_size: int = None)
```

Use loaded QA model to find answers for a list of questions in each question's supplied list of Document.

Returns list of dictionaries containing answers sorted by (desc.) probability

**Arguments**:

- `question_doc_list`: List of dictionaries containing questions with their retrieved documents
- `top_k_per_question`: The maximum number of answers to return for each question
- `batch_size`: Number of samples the model receives in one batch for inference

**Returns**:

List of dictionaries containing question and answers

<a name="reader.farm.FARMReader.predict"></a>
#### predict

```python
 | predict(question: str, documents: List[Document], top_k: Optional[int] = None)
```

Use loaded QA model to find answers for a question in the supplied list of Document.

Returns dictionaries containing answers sorted by (desc.) probability.
Example:
::
{'question': 'Who is the father of Arya Stark?',
'answers': [
{'answer': 'Eddard,',
'context': " She travels with her father, Eddard, to King's Landing when he is ",
'offset_answer_start': 147,
'offset_answer_end': 154,
'probability': 0.9787139466668613,
'score': None,
'document_id': '1337'
},
...
]
}

**Arguments**:

- `question`: Question string
- `documents`: List of Document in which to search for the answer
- `top_k`: The maximum number of answers to return

**Returns**:

Dict containing question and answers

<a name="reader.farm.FARMReader.eval_on_file"></a>
#### eval\_on\_file

```python
 | eval_on_file(data_dir: str, test_filename: str, device: str)
```

Performs evaluation on a SQuAD-formatted file.
Returns a dict containing the following metrics:
- "EM": exact match score
- "f1": F1-Score
- "top_n_accuracy": Proportion of predicted answers that overlap with correct answer

**Arguments**:

- `data_dir`: The directory in which the test set can be found
:type data_dir: Path or str
- `test_filename`: The name of the file containing the test data in SQuAD format.
:type test_filename: str
- `device`: The device on which the tensors should be processed. Choose from "cpu" and "cuda".
:type device: str

<a name="reader.farm.FARMReader.eval"></a>
#### eval

```python
 | eval(document_store: BaseDocumentStore, device: str, label_index: str = "label", doc_index: str = "eval_document", label_origin: str = "gold_label")
```

Performs evaluation on evaluation documents in the DocumentStore.
Returns a dict containing the following metrics:
- "EM": Proportion of exact matches of predicted answers with their corresponding correct answers
- "f1": Average overlap between predicted answers and their corresponding correct answers
- "top_n_accuracy": Proportion of predicted answers that overlap with correct answer

**Arguments**:

- `document_store`: DocumentStore containing the evaluation documents
- `device`: The device on which the tensors should be processed. Choose from "cpu" and "cuda".
- `label_index`: Index/Table name where labeled questions are stored
- `doc_index`: Index/Table name where documents that are used for evaluation are stored

<a name="reader.farm.FARMReader.predict_on_texts"></a>
#### predict\_on\_texts

```python
 | predict_on_texts(question: str, texts: List[str], top_k: Optional[int] = None)
```

Use loaded QA model to find answers for a question in the supplied list of Document.
Returns dictionaries containing answers sorted by (desc.) probability.
Example:
::
{'question': 'Who is the father of Arya Stark?',
'answers': [
{'answer': 'Eddard,',
'context': " She travels with her father, Eddard, to King's Landing when he is ",
'offset_answer_start': 147,
'offset_answer_end': 154,
'probability': 0.9787139466668613,
'score': None,
'document_id': '1337'
},
...
]
}

**Arguments**:

- `question`: Question string
- `documents`: List of documents as string type
- `top_k`: The maximum number of answers to return

**Returns**:

Dict containing question and answers

<a name="reader.farm.FARMReader.convert_to_onnx"></a>
#### convert\_to\_onnx

```python
 | @classmethod
 | convert_to_onnx(cls, model_name_or_path, opset_version: int = 11, optimize_for: Optional[str] = None)
```

Convert a PyTorch BERT model to ONNX format and write to ./onnx-export dir. The converted ONNX model
can be loaded with in the `FARMReader` using the export path as `model_name_or_path` param.

Usage:
>>> from haystack.reader.farm import FARMReader
>>> FARMReader.convert_to_onnx(model_name_or_path="deepset/bert-base-cased-squad2", optimize_for="gpu_tensor_core")
>>> FARMReader(model_name_or_path=Path("onnx-export"))


**Arguments**:

- `opset_version`: ONNX opset version
- `optimize_for`: Optimize the exported model for a target device. Available options
are "gpu_tensor_core" (GPUs with tensor core like V100 or T4),
"gpu_without_tensor_core" (most other GPUs), and "cpu".

<a name="reader.transformers_utils"></a>
# reader.transformers\_utils

<a name="reader.transformers_utils.get_framework"></a>
#### get\_framework

```python
get_framework(model=None)
```

Select framework (TensorFlow/PyTorch) to use.
If both frameworks are installed and no specific model is provided, defaults to using PyTorch.

<a name="reader.transformers_utils.PipelineException"></a>
## PipelineException Objects

```python
class PipelineException(Exception)
```

Raised by pipelines when handling __call__

<a name="reader.transformers_utils.ArgumentHandler"></a>
## ArgumentHandler Objects

```python
class ArgumentHandler(ABC)
```

Base interface for handling varargs for each Pipeline

<a name="reader.transformers_utils.DefaultArgumentHandler"></a>
## DefaultArgumentHandler Objects

```python
class DefaultArgumentHandler(ArgumentHandler)
```

Default varargs argument parser handling parameters for each Pipeline

<a name="reader.transformers_utils.PipelineDataFormat"></a>
## PipelineDataFormat Objects

```python
class PipelineDataFormat()
```

Base class for all the pipeline supported data format both for reading and writing.
Supported data formats currently includes:
 - JSON
 - CSV
 - stdin/stdout (pipe)

PipelineDataFormat also includes some utilities to work with multi-columns like mapping from datasets columns
to pipelines keyword arguments through the `dataset_kwarg_1=dataset_column_1` format.

<a name="reader.transformers_utils.PipelineDataFormat.save"></a>
#### save

```python
 | @abstractmethod
 | save(data: dict)
```

Save the provided data object with the representation for the current `DataFormat`.

**Arguments**:

- `data`: data to store

**Returns**:



<a name="reader.transformers_utils.PipelineDataFormat.save_binary"></a>
#### save\_binary

```python
 | save_binary(data: Union[dict, List[dict]]) -> str
```

Save the provided data object as a pickle-formatted binary data on the disk.

**Arguments**:

- `data`: data to store

**Returns**:

(str) Path where the data has been saved

<a name="reader.transformers_utils.PipedPipelineDataFormat"></a>
## PipedPipelineDataFormat Objects

```python
class PipedPipelineDataFormat(PipelineDataFormat)
```

Read data from piped input to the python process.
For multi columns data, columns should separated by \t

If columns are provided, then the output will be a dictionary with {column_x: value_x}

<a name="reader.transformers_utils.Pipeline"></a>
## Pipeline Objects

```python
class Pipeline(_ScikitCompat)
```

The Pipeline class is the class from which all pipelines inherit. Refer to this class for methods shared across
different pipelines.

Base class implementing pipelined operations.
Pipeline workflow is defined as a sequence of the following operations:

Input -> Tokenization -> Model Inference -> Post-Processing (Task dependent) -> Output

Pipeline supports running on CPU or GPU through the device argument. Users can specify
device argument as an integer, -1 meaning "CPU", >= 0 referring the CUDA device ordinal.

Some pipeline, like for instance FeatureExtractionPipeline ('feature-extraction') outputs large
tensor object as nested-lists. In order to avoid dumping such large structure as textual data we
provide the binary_output constructor argument. If set to True, the output will be stored in the
pickle format.

**Arguments**:

  model (:obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`):
  The model that will be used by the pipeline to make predictions. This needs to be a model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  tokenizer (:obj:`~transformers.PreTrainedTokenizer`):
  The tokenizer that will be used by the pipeline to encode data for the model. This object inherits from
  :class:`~transformers.PreTrainedTokenizer`.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.
  binary_output (:obj:`bool`, `optional`, defaults to :obj:`False`):
  Flag indicating if the output the pipeline should happen in a binary format (i.e. pickle) or as raw text.
  

**Returns**:

  :obj:`List` or :obj:`Dict`:
  Pipeline returns list or dictionary depending on:
  
  - Whether the user supplied multiple samples
  - Whether the pipeline exposes multiple fields in the output object

<a name="reader.transformers_utils.Pipeline.save_pretrained"></a>
#### save\_pretrained

```python
 | save_pretrained(save_directory)
```

Save the pipeline's model and tokenizer to the specified save_directory

<a name="reader.transformers_utils.Pipeline.transform"></a>
#### transform

```python
 | transform(X)
```

Scikit / Keras interface to transformers' pipelines. This method will forward to __call__().

<a name="reader.transformers_utils.Pipeline.predict"></a>
#### predict

```python
 | predict(X)
```

Scikit / Keras interface to transformers' pipelines. This method will forward to __call__().

<a name="reader.transformers_utils.Pipeline.device_placement"></a>
#### device\_placement

```python
 | @contextmanager
 | device_placement()
```

Context Manager allowing tensor allocation on the user-specified device in framework agnostic way.
example:
# Explicitly ask for tensor allocation on CUDA device :0
nlp = pipeline(..., device=0)
with nlp.device_placement():
# Every framework specific tensor allocation will be done on the request device
output = nlp(...)

**Returns**:

  Context manager

<a name="reader.transformers_utils.Pipeline.ensure_tensor_on_device"></a>
#### ensure\_tensor\_on\_device

```python
 | ensure_tensor_on_device(**inputs)
```

Ensure PyTorch tensors are on the specified device.

**Arguments**:

- `inputs`: 

**Returns**:



<a name="reader.transformers_utils.FeatureExtractionPipeline"></a>
## FeatureExtractionPipeline Objects

```python
class FeatureExtractionPipeline(Pipeline)
```

Feature extraction pipeline using Model head. This pipeline extracts the hidden states from the base transformer,
which can be used as features in downstream tasks.

This feature extraction pipeline can currently be loaded from the :func:`~transformers.pipeline` method using
the following task identifier(s):

- "feature-extraction", for extracting features of a sequence.

All models may be used for this pipeline. See a list of all models, including community-contributed models on
`huggingface.co/models <https://huggingface.co/models>`__.

**Arguments**:

  model (:obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`):
  The model that will be used by the pipeline to make predictions. This needs to be a model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  tokenizer (:obj:`~transformers.PreTrainedTokenizer`):
  The tokenizer that will be used by the pipeline to encode data for the model. This object inherits from
  :class:`~transformers.PreTrainedTokenizer`.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.TextGenerationPipeline"></a>
## TextGenerationPipeline Objects

```python
class TextGenerationPipeline(Pipeline)
```

Language generation pipeline using any ModelWithLMHead head. This pipeline predicts the words that will follow a specified text prompt.

This language generation pipeline can currently be loaded from the :func:`~transformers.pipeline` method using
the following task identifier(s):

- "text-generation", for generating text from a specified prompt.

The models that this pipeline can use are models that have been trained with an autoregressive language modeling objective,
which includes the uni-directional models in the library (e.g. gpt2).
See the list of available community models on
`huggingface.co/models <https://huggingface.co/models?search=&filter=lm-head>`__.

<a name="reader.transformers_utils.TextClassificationPipeline"></a>
## TextClassificationPipeline Objects

```python
class TextClassificationPipeline(Pipeline)
```

Text classification pipeline using ModelForSequenceClassification head. See the
`sequence classification usage <../usage.html#sequence-classification>`__ examples for more information.

This text classification pipeline can currently be loaded from the :func:`~transformers.pipeline` method using
the following task identifier(s):

- "sentiment-analysis", for classifying sequences according to positive or negative sentiments.

The models that this pipeline can use are models that have been fine-tuned on a sequence classification task.
See the up-to-date list of available models on
`huggingface.co/models <https://huggingface.co/models?filter=text-classification>`__.

**Arguments**:

  model (:obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`):
  The model that will be used by the pipeline to make predictions. This needs to be a model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  tokenizer (:obj:`~transformers.PreTrainedTokenizer`):
  The tokenizer that will be used by the pipeline to encode data for the model. This object inherits from
  :class:`~transformers.PreTrainedTokenizer`.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.FillMaskPipeline"></a>
## FillMaskPipeline Objects

```python
class FillMaskPipeline(Pipeline)
```

Masked language modeling prediction pipeline using ModelWithLMHead head. See the
`masked language modeling usage <../usage.html#masked-language-modeling>`__ examples for more information.

This mask filling pipeline can currently be loaded from the :func:`~transformers.pipeline` method using
the following task identifier(s):

- "fill-mask", for predicting masked tokens in a sequence.

The models that this pipeline can use are models that have been trained with a masked language modeling objective,
which includes the bi-directional models in the library.
See the up-to-date list of available models on
`huggingface.co/models <https://huggingface.co/models?filter=lm-head>`__.

**Arguments**:

  model (:obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`):
  The model that will be used by the pipeline to make predictions. This needs to be a model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  tokenizer (:obj:`~transformers.PreTrainedTokenizer`):
  The tokenizer that will be used by the pipeline to encode data for the model. This object inherits from
  :class:`~transformers.PreTrainedTokenizer`.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.TokenClassificationPipeline"></a>
## TokenClassificationPipeline Objects

```python
class TokenClassificationPipeline(Pipeline)
```

Named Entity Recognition pipeline using ModelForTokenClassification head. See the
`named entity recognition usage <../usage.html#named-entity-recognition>`__ examples for more information.

This token recognition pipeline can currently be loaded from the :func:`~transformers.pipeline` method using
the following task identifier(s):

- "ner", for predicting the classes of tokens in a sequence: person, organisation, location or miscellaneous.

The models that this pipeline can use are models that have been fine-tuned on a token classification task.
See the up-to-date list of available models on
`huggingface.co/models <https://huggingface.co/models?filter=token-classification>`__.

**Arguments**:

  model (:obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`):
  The model that will be used by the pipeline to make predictions. This needs to be a model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  tokenizer (:obj:`~transformers.PreTrainedTokenizer`):
  The tokenizer that will be used by the pipeline to encode data for the model. This object inherits from
  :class:`~transformers.PreTrainedTokenizer`.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.TokenClassificationPipeline.group_entities"></a>
#### group\_entities

```python
 | group_entities(entities)
```

Returns grouped entities

<a name="reader.transformers_utils.QuestionAnsweringArgumentHandler"></a>
## QuestionAnsweringArgumentHandler Objects

```python
class QuestionAnsweringArgumentHandler(ArgumentHandler)
```

QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped
to internal SquadExample / SquadFeature structures.

QuestionAnsweringArgumentHandler manages all the possible to create SquadExample from the command-line supplied
arguments.

<a name="reader.transformers_utils.QuestionAnsweringPipeline"></a>
## QuestionAnsweringPipeline Objects

```python
class QuestionAnsweringPipeline(Pipeline)
```

Question Answering pipeline using ModelForQuestionAnswering head. See the
`question answering usage <../usage.html#question-answering>`__ examples for more information.

This question answering can currently be loaded from the :func:`~transformers.pipeline` method using
the following task identifier(s):

- "question-answering", for answering questions given a context.

The models that this pipeline can use are models that have been fine-tuned on a question answering task.
See the up-to-date list of available models on
`huggingface.co/models <https://huggingface.co/models?filter=question-answering>`__.

**Arguments**:

  model (:obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`):
  The model that will be used by the pipeline to make predictions. This needs to be a model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  tokenizer (:obj:`~transformers.PreTrainedTokenizer`):
  The tokenizer that will be used by the pipeline to encode data for the model. This object inherits from
  :class:`~transformers.PreTrainedTokenizer`.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.QuestionAnsweringPipeline.create_sample"></a>
#### create\_sample

```python
 | @staticmethod
 | create_sample(question: Union[str, List[str]], context: Union[str, List[str]]) -> Union[SquadExample, List[SquadExample]]
```

QuestionAnsweringPipeline leverages the SquadExample/SquadFeatures internally.
This helper method encapsulate all the logic for converting question(s) and context(s) to SquadExample(s).
We currently support extractive question answering.

**Arguments**:

- `question` - (str, List[str]) The question to be ask for the associated context
- `context` - (str, List[str]) The context in which we will look for the answer.
  

**Returns**:

  SquadExample initialized with the corresponding question and context.

<a name="reader.transformers_utils.QuestionAnsweringPipeline.__call__"></a>
#### \_\_call\_\_

```python
 | __call__(*args, **kwargs)
```

**Arguments**:

  We support multiple use-cases, the following are exclusive:
- `X` - sequence of SquadExample
- `data` - sequence of SquadExample
- `question` - (str, List[str]), batch of question(s) to map along with context
- `context` - (str, List[str]), batch of context(s) associated with the provided question keyword argument

**Returns**:

- `dict` - {'answer': str, 'score": float, 'start": int, "end": int}
- `answer` - the textual answer in the intial context
- `score` - the score the current answer scored for the model
- `start` - the character index in the original string corresponding to the beginning of the answer' span
- `end` - the character index in the original string corresponding to the ending of the answer' span

<a name="reader.transformers_utils.QuestionAnsweringPipeline.decode"></a>
#### decode

```python
 | decode(start: np.ndarray, end: np.ndarray, topk: int, max_answer_len: int) -> Tuple
```

Take the output of any QuestionAnswering head and will generate probalities for each span to be
the actual answer.
In addition, it filters out some unwanted/impossible cases like answer len being greater than
max_answer_len or answer end position being before the starting position.
The method supports output the k-best answer through the topk argument.

**Arguments**:

- `start` - numpy array, holding individual start probabilities for each token
- `end` - numpy array, holding individual end probabilities for each token
- `topk` - int, indicates how many possible answer span(s) to extract from the model's output
- `max_answer_len` - int, maximum size of the answer to extract from the model's output

<a name="reader.transformers_utils.QuestionAnsweringPipeline.span_to_answer"></a>
#### span\_to\_answer

```python
 | span_to_answer(text: str, start: int, end: int)
```

When decoding from token probalities, this method maps token indexes to actual word in
the initial context.

**Arguments**:

- `text` - str, the actual context to extract the answer from
- `start` - int, starting answer token index
- `end` - int, ending answer token index
  

**Returns**:

- `dict` - {'answer': str, 'start': int, 'end': int}

<a name="reader.transformers_utils.SummarizationPipeline"></a>
## SummarizationPipeline Objects

```python
class SummarizationPipeline(Pipeline)
```

Summarize news articles and other documents

Usage::

# use bart in pytorch
summarizer = pipeline("summarization")
summarizer("Sam Shleifer writes the best docstring examples in the whole world.", min_length=5, max_length=20)

# use t5 in tf
summarizer = pipeline("summarization", model="t5-base", tokenizer="t5-base", framework="tf")
summarizer("Sam Shleifer writes the best docstring examples in the whole world.", min_length=5, max_length=20)

The models that this pipeline can use are models that have been fine-tuned on a summarization task,
which is currently, '`bart-large-cnn`', '`t5-small`', '`t5-base`', '`t5-large`', '`t5-3b`', '`t5-11b`'.
See the up-to-date list of available models on
`huggingface.co/models <https://huggingface.co/models?filter=summarization>`__.

**Arguments**:

  model (:obj:`str` or :obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`, `optional`, defaults to :obj:`None`):
  The model that will be used by the pipeline to make predictions. This can be :obj:`None`, a string
  checkpoint identifier or an actual pre-trained model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  
  If :obj:`None`, the default of the pipeline will be loaded.
  tokenizer (:obj:`str` or :obj:`~transformers.PreTrainedTokenizer`, `optional`, defaults to :obj:`None`):
  The tokenizer that will be used by the pipeline to encode data for the model. This can be :obj:`None`,
  a string checkpoint identifier or an actual pre-trained tokenizer inheriting from
  :class:`~transformers.PreTrainedTokenizer`.
  
  If :obj:`None`, the default of the pipeline will be loaded.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.TranslationPipeline"></a>
## TranslationPipeline Objects

```python
class TranslationPipeline(Pipeline)
```

Translates from one language to another.

Usage::
en_fr_translator = pipeline("translation_en_to_fr")
en_fr_translator("How old are you?")

The models that this pipeline can use are models that have been fine-tuned on a translation task,
currently: "t5-small", "t5-base", "t5-large", "t5-3b", "t5-11b"
See the up-to-date list of available models on
`huggingface.co/models <https://huggingface.co/models?filter=translation>`__.

**Arguments**:

  model (:obj:`str` or :obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`, `optional`, defaults to :obj:`None`):
  The model that will be used by the pipeline to make predictions. This can be :obj:`None`, a string
  checkpoint identifier or an actual pre-trained model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  If :obj:`None`, the default of the pipeline will be loaded.
  tokenizer (:obj:`str` or :obj:`~transformers.PreTrainedTokenizer`, `optional`, defaults to :obj:`None`):
  The tokenizer that will be used by the pipeline to encode data for the model. This can be :obj:`None`,
  a string checkpoint identifier or an actual pre-trained tokenizer inheriting from
  :class:`~transformers.PreTrainedTokenizer`.
  If :obj:`None`, the default of the pipeline will be loaded.
  modelcard (:obj:`str` or :class:`~transformers.ModelCard`, `optional`, defaults to :obj:`None`):
  Model card attributed to the model for this pipeline.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  args_parser (:class:`~transformers.pipelines.ArgumentHandler`, `optional`, defaults to :obj:`None`):
  Reference to the object in charge of parsing supplied pipeline parameters.
  device (:obj:`int`, `optional`, defaults to :obj:`-1`):
  Device ordinal for CPU/GPU supports. Setting this to -1 will leverage CPU, >=0 will run the model
  on the associated CUDA device id.

<a name="reader.transformers_utils.pipeline"></a>
#### pipeline

```python
pipeline(task: str, model: Optional = None, config: Optional[Union[str, PretrainedConfig]] = None, tokenizer: Optional[Union[str, PreTrainedTokenizer]] = None, framework: Optional[str] = None, **kwargs) -> Pipeline
```

Utility factory method to build a pipeline.

Pipeline are made of:

- A Tokenizer instance in charge of mapping raw textual input to token
- A Model instance
- Some (optional) post processing for enhancing model's output


**Arguments**:

  task (:obj:`str`):
  The task defining which pipeline will be returned. Currently accepted tasks are:
  
  - "feature-extraction": will return a :class:`~transformers.FeatureExtractionPipeline`
  - "sentiment-analysis": will return a :class:`~transformers.TextClassificationPipeline`
  - "ner": will return a :class:`~transformers.TokenClassificationPipeline`
  - "question-answering": will return a :class:`~transformers.QuestionAnsweringPipeline`
  - "fill-mask": will return a :class:`~transformers.FillMaskPipeline`
  - "summarization": will return a :class:`~transformers.SummarizationPipeline`
  - "translation_xx_to_yy": will return a :class:`~transformers.TranslationPipeline`
  - "text-generation": will return a :class:`~transformers.TextGenerationPipeline`
  model (:obj:`str` or :obj:`~transformers.PreTrainedModel` or :obj:`~transformers.TFPreTrainedModel`, `optional`, defaults to :obj:`None`):
  The model that will be used by the pipeline to make predictions. This can be :obj:`None`,
  a model identifier or an actual pre-trained model inheriting from
  :class:`~transformers.PreTrainedModel` for PyTorch and :class:`~transformers.TFPreTrainedModel` for
  TensorFlow.
  
  If :obj:`None`, the default for this pipeline will be loaded.
  config (:obj:`str` or :obj:`~transformers.PretrainedConfig`, `optional`, defaults to :obj:`None`):
  The configuration that will be used by the pipeline to instantiate the model. This can be :obj:`None`,
  a model identifier or an actual pre-trained model configuration inheriting from
  :class:`~transformers.PretrainedConfig`.
  
  If :obj:`None`, the default for this pipeline will be loaded.
  tokenizer (:obj:`str` or :obj:`~transformers.PreTrainedTokenizer`, `optional`, defaults to :obj:`None`):
  The tokenizer that will be used by the pipeline to encode data for the model. This can be :obj:`None`,
  a model identifier or an actual pre-trained tokenizer inheriting from
  :class:`~transformers.PreTrainedTokenizer`.
  
  If :obj:`None`, the default for this pipeline will be loaded.
  framework (:obj:`str`, `optional`, defaults to :obj:`None`):
  The framework to use, either "pt" for PyTorch or "tf" for TensorFlow. The specified framework must be
  installed.
  
  If no framework is specified, will default to the one currently installed. If no framework is specified
  and both frameworks are installed, will default to PyTorch.
  

**Returns**:

- `:class:`~transformers.Pipeline`` - Class inheriting from :class:`~transformers.Pipeline`, according to
  the task.
  
  Examples::
  
  from transformers import pipeline, AutoModelForTokenClassification, AutoTokenizer
  
  # Sentiment analysis pipeline
  pipeline('sentiment-analysis')
  
  # Question answering pipeline, specifying the checkpoint identifier
  pipeline('question-answering', model='distilbert-base-cased-distilled-squad', tokenizer='bert-base-cased')
  
  # Named entity recognition pipeline, passing in a specific model and tokenizer
  model = AutoModelForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
  tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
  pipeline('ner', model=model, tokenizer=tokenizer)

<a name="reader.transformers"></a>
# reader.transformers

<a name="reader.transformers.TransformersReader"></a>
## TransformersReader Objects

```python
class TransformersReader(BaseReader)
```

Transformer based model for extractive Question Answering using the HuggingFace's transformers framework
(https://github.com/huggingface/transformers).
While the underlying model can vary (BERT, Roberta, DistilBERT ...), the interface remains the same.

|  With the reader, you can:

    - directly get predictions via predict()

<a name="reader.transformers.TransformersReader.__init__"></a>
#### \_\_init\_\_

```python
 | __init__(model: str = "distilbert-base-uncased-distilled-squad", tokenizer: Optional[str] = None, context_window_size: int = 70, use_gpu: int = 0, top_k_per_candidate: int = 4, return_no_answers: bool = True, max_seq_len: int = 256, doc_stride: int = 128)
```

Load a QA model from Transformers.
Available models include:

- ``'distilbert-base-uncased-distilled-squad`'``
- ``'bert-large-cased-whole-word-masking-finetuned-squad``'
- ``'bert-large-uncased-whole-word-masking-finetuned-squad``'

See https://huggingface.co/models for full list of available QA models

**Arguments**:

- `model`: Name of the model
- `tokenizer`: Name of the tokenizer (usually the same as model)
- `context_window_size`: Num of chars (before and after the answer) to return as "context" for each answer.
The context usually helps users to understand if the answer really makes sense.
- `use_gpu`: - < 0  -> use cpu
- >= 0 -> ordinal of the gpu to use
- `top_k_per_candidate`: How many answers to extract for each candidate doc that is coming from the retriever
(might be a long text). Note:

- This is not the number of "final answers" you will receive
(see `top_k` in TransformersReader.predict() or Finder.get_answers() for that)
- Can include no_answer in the sorted list of predictions
- `return_no_answers`: - True -> Hugging Face model could return an "impossible"/"empty" answer (i.e. when there is an unanswerable question)
- False -> otherwise

no_answer_boost is unfortunately not available with TransformersReader. If you would like to
set no_answer_boost, use a FARMReader.
- `max_seq_len`: max sequence length of one input text for the model
- `doc_stride`: length of striding window for splitting long texts (used if len(text) > max_seq_len)

<a name="reader.transformers.TransformersReader.predict"></a>
#### predict

```python
 | predict(question: str, documents: List[Document], top_k: Optional[int] = None)
```

Use loaded QA model to find answers for a question in the supplied list of Document.

Returns dictionaries containing answers sorted by (desc.) probability.
Example:
::
{'question': 'Who is the father of Arya Stark?',
'answers': [
{'answer': 'Eddard,',
'context': " She travels with her father, Eddard, to King's Landing when he is ",
'offset_answer_start': 147,
'offset_answer_end': 154,
'probability': 0.9787139466668613,
'score': None,
'document_id': '1337'
},
...
]
}

**Arguments**:

- `question`: Question string
- `documents`: List of Document in which to search for the answer
- `top_k`: The maximum number of answers to return

**Returns**:

Dict containing question and answers

<a name="reader.base"></a>
# reader.base

