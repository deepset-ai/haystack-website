
# Model Distillation

Haystack now allows for distillation of large readers serving as teachers into smaller readers called students.

## Why Model Distillation?

A larger model size leads to more accurate model predictions. But the more parameters a model has, the more resource-intensive it is. This makes deployment more difficult and increases latency.
Choosing the right reader is always a trade-off between the quality of results and the cost of deployment. Model distilation is an approach that we use to bridge the accuracy gap between a large language model and a smaller one. With this approach, you can preserve some of the accuracy of a large teacher model when training a smaller student model.  

## How Does It Work?

The goal of model distillation is for the student model to behave similarly to the teacher model. When training the student, you can use a range of approaches with different sets of loss functions to enforce this similarity. The two approaches we focused on are the approach proposed by [Hinton et al.](https://arxiv.org/pdf/1503.02531.pdf) of distilling the outputs of the prediction layers and the approach used by [TinyBERT (Jiao et al.)](https://arxiv.org/pdf/1909.10351) of also distilling intermediate layers.

### Hinton's Approach

Hinton's prediction layer distillation approach introduces a loss function to minimise the difference between the logits (outputs of the prediction layer) of the student model and the teacher model. These logits contain the probabilities that the teacher model assigns to all possible answer spans in the document. This makes the training loss more expressive and allows for higher accuracy with the same model size. An advantage of this method is that it is very quick and does not have any requirements for the student architecture.

### TinyBERT Approach

The TinyBERT approach adds an additional step before performing prediction layer distillation. This step is called intermediate layer distillation and its goal is to minimize the differences between the hidden states and the attentions of the student and teacher. Intermediate layer distillation increases performance because it forces the student model to behave similarly to the teacher model. In this approach, you can only use student models pretrained using the teacher model. It also increases the computation time by about 35x the time of performing prediction layer distillation. 

## Student-Teacher Combinations

The student-teacher combinations available depend on whether you are using intermediate layer distillaton, as it restricts the models that can be used with it. 

### Possible Student-Teacher Combinations for Prediction Layer Distillation
When only using prediction layer distillation, the only thing that needs to be the same is the tokenizer. This table contains a few examples of models with the same tokenizer:

<table>
    <tbody>
        <tr>
            <th><p align="left">Tokenizer</p></th>
            <th><p align="left">Models</p></th>
        </tr>
        <tr>
            <td><p align="left">Bert uncased tokenizer</p></td>
            <td><ul align="left">
                <li><a href="https://huggingface.co/prajjwal1/bert-medium">prajjwal1/bert-medium</a></li>
                <li><a href="https://huggingface.co/huawei-noah/TinyBERT_General_6L_768D">huawei-noah/TinyBERT_General_6L_768D</a></li>
                <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
                <li><a href="https://huggingface.co/bert-large-uncased">bert-large-uncased</a></li>
                <li>All models fine-tuned on those: <a href="https://huggingface.co/mrm8488/bert-tiny-5-finetuned-squadv2">mrm8488/bert-tiny-5-finetuned-squadv2</a></li>
                </ul></td>
        </tr>
        <tr>
            <td><p align="left">Bert cased tokenizer</p></td>
            <td><ul align="left">
                <li><a href="https://huggingface.co/bert-base-cased">bert-base-cased</a></li>
                <li><a href="https://huggingface.co/bert-large-cased">bert-large-cased</a></li>
                <li>And all models fine-tuned on those: <a href="https://huggingface.co/deepset/bert-base-cased-squad2">deepset/bert-base-cased-squad2</a></li>
            </ul></td>
            
        </tr>
        <tr>
            <td><p align="left">RoBERTa tokenizer</p></td>
            <td><ul align="left">
            <li><a href="https://huggingface.co/roberta-base">roberta-base</a></li>
            <li><a href="https://huggingface.co/roberta-large">roberta-large</a></li>
            <li>And all models fine-tuned on those: <a href="https://huggingface.co/deepset/roberta-base-squad2">deepset/roberta-base-squad2</a></li>
            </ul>
            </td>
            </tr>
        <tr>
            <td><p align="left">Electra tokenizer</p></td>
            <td><ul align="left">
                <li><a href="https://huggingface.co/google/electra-small-discriminator">google/electra-small-discriminator</a></li>
                <li><a href="https://huggingface.co/google/electra-base-discriminator">google/electra-base-discriminator</a></li>
                <li><a href="https://huggingface.co/google/electra-large-discriminator">google/electra-large-discriminator</a></li>
                <li>And all models fine-tuned on those: <a href="https://huggingface.co/deepset/electra-base-squad2">deepset/electra-base-squad2</a></li>
            </ul></td>
        </tr>
    </tbody>
</table>


### Possible Student-Teacher Combinations for Intermediate Layer Distillation
Intermediate layer distillation places strict restrictions on the kinds of models you can use. It requires that the student model was distilled during pretraining with the same teacher model. This means that for each student model there is only one teacher model you can use for fine tuning.
<table>
    <tbody>
        <tr>
            <th><p align="left">Student</p></th>
            <th><p align="left">Teacher</p></th>
        </tr>
        <tr>
            <td>
                <ul align="left">
                    <li><a href="https://huggingface.co/huawei-noah/TinyBERT_General_4L_312D">huawei-noah/TinyBERT_General_4L_312D</a></li>
                    <li><a href="https://huggingface.co/huawei-noah/TinyBERT_General_6L_768D">huawei-noah/TinyBERT General_6L_768D</a></li>
                </ul>
            </td>
            <td>
                <ul align="left">
                    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
                    <li>And all models fine-tuned using this: <a href="https://huggingface.co/twmkn9/bert-base-uncased-squad2">twmkn9/bert-base-uncased-squad2</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

This table will be growing as we are actively working on training more student models compatible with other teachers.


## Distilling a Model in Haystack

When using model distillation, you need to have both a teacher and a student model. The teacher model must be trained on the task. This means that you can use a fine-tuned teacher from the Hugging Face hub or you can fine-tune the teacher on your own data beforehand.

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Tutorial:** To learn how to fine-tune your teacher model on your own data, check out our [finetuning tutorial](/tutorials/fine-tuning-a-model).

</div>

The following paragraphs are only relevant for intermediate layer distillation. To use prediction layer distillation, jump directly to "Prediction layer distillation". Otherwise, read on to learn how to use intermediate layer distillation.

### Data Augmentation for Intermediate Layer Distillation

The optional intermediate layer distillation step requires a lot of data. Because acquiring a lot of training data is expensive, the TinyBERT paper suggests a data augmentation approach in which you multiply existing datasets. For data augmentation, you can use the [`augment_squad.py`](https://github.com/deepset-ai/haystack/blob/master/haystack/utils/augment_squad.py) script from Haystack.

This command creates an augmented dataset with 20 times the samples from the `dataset.json` data set and places it in the `augmented_dataset.json` file. In this example, `dataset.json` is in the same folder as `augment_squad.py`:
```
python augment_squad.py --squad_path dataset.json --output_path augmented_dataset.json --multiplication_factor 20
```

### Loading Student and Teacher Models

Both student and teacher models are standard `FARMReader`s so you can load them as you are used to:

```
student = FARMReader(...)
teacher = FARMReader(...)
```

Ensure that the student and teacher models use the same tokenizer. Otherwise, model distillation fails.

### Distilling a Teacher Model to a Student Model

#### Intermediate Layer Distillation (optional)
To use intermediate layer distillation in haystack, call the `distil_intermediate_layers_from` method on the student passing the teacher model:

```
student.distil_intermediate_layers_from(teacher, data_dir=data_dir, train_filename=train_filename)
```
Ensure that the training dataset specified with `data_dir` and `train_filename` has been augmented using the `augment_squad.py` script.
`distil_intermediate_layers_from` accepts all the parameters you can use for training. You must provide all the necessary parameters in this method. The method also accepts additional parameters like `temperature` and `distillation_loss`. However, for intermediate layer distillation, you can leave them at their default values.
Intermediate layer distillation is optional but if you decide to use it, you must perform prediction layer distillation after it to achieve good performance.

#### Prediction Layer Distillation
To use prediction layer distillation in Haystack, call the `distil_prediction_layer_from` method on the student and pass the teacher model: 

```
student.distil_prediction_layer_from(teacher, temperature=5, distillation_loss_weight=0.5,
                                     data_dir=data_dir, train_filename=train_filename, ...)
```

Like `distil_intermediate_layers_from`, `distil_prediction_layer_from` accepts all parameters that you can use for training, but also accepts additional parameters. Everything you need to provide for training such as train_filename (name of file with training data set) and data_dir (folder of training data set file and optionally test and eval data set) is also necessary to provide in `distil_from`. You also need to provide the teacher model. All other parameters are optional, but we also recommend adjusting `temperature` and `distillation_loss_weight`.

## What Parameters Should I Use?
### Intermediate Layer Distillation
When using intermediate layer distillation, we recommend using the default parameters. You can try tuning the distillation-specific parameter `temperature` and adjusting all the parameters that are relevant for training (for example, `learning_rate`, `n_epochs`). The only exception to this is the parameter `batch_size`. Specify `student_batch_size` instead. 

### Prediction Layer Distillation
Prediction layer distillation is controlled by two parameters: `temperature` and `distillation_loss_weight`.

The `temperature` parameter specifies the certainty of the teacher model. Usually language models are very certain that one answer span is correct and assign all other answer spans a very low probability. We don't want this for distillation as it would be similar to having a label. You can correct this by using a higher temperature.
We also don't want the probabilities to be too similar as this doesn't create a meaningful training signal. For this, we can decrease the temperature.
In most experiments, we found a temperature between 1 and 5 to be most useful.

The `distillation_loss_weight` parameter specifies the weight given to the distillation loss in relation to the loss based on the label. For example, setting this to 0 effectively disables model distillation and setting it to 1 only uses model distillation making the labels unnecessary.
Most times, you should set this to a relatively high value (for example, 0.75).

Here are the parameters that worked best in our experiments:
<table>
    <tbody>
        <tr>
            <th><p align="left">Student</p></th>
            <th><p align="left">Teacher</p></th>
            <th><p align="left">Distilled</p></th>
            <th><p align="left">Data set</p></th>
            <th><p align="left">temperature</p></th>
            <th><p align="left">loss weight</p></th>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/prajjwal1/bert-medium">prajjwal1/​bert-medium</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/bert-large-uncased-whole-word-masking-squad2">deepset/​bert-large-uncased-whole-word-masking-squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/bert-medium-squad2-distilled">deepset/​bert-medium-squad2-distilled</a></p></td>
            <td><p align="left">SQuADv2</p></td>
             <td><p align="left">5.0</p></td>
              <td><p align="left">1.0</p></td>
        </tr>
         <tr>
            <td><p align="left"><a href="https://huggingface.co/roberta-base">roberta-base</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/roberta-large-squad2">deepset/​roberta-large-squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/roberta-base-squad2-distilled">deepset/​roberta-base-squad2-distilled</a></p></td>
            <td><p align="left">SQuADv2</p></td>
             <td><p align="left">1.5</p></td>
              <td><p align="left">0.75 </p></td>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/xlm-roberta-base">xlm-roberta-base</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/xlm-roberta-large-squad2">deepset/​xlm-roberta-large-squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/xlm-roberta-base-squad2-distilled">deepset/​xlm-roberta-base-squad2-distilled</a></p></td>
            <td><p align="left">SQuADv2</p></td>
             <td><p align="left">3.0 </p></td>
              <td><p align="left">0.75</p></td>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/deepset/gelectra-base">deepset/​gelectra-base</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/gelectra-large-germanquad">deepset/​gelectra-large-germanquad</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/gelectra-base-germanquad-distilled">deepset/​gelectra-base-germanquad-distilled</a></p></td>
            <td><p align="left">GermanQuAD</p></td>
             <td><p align="left">2.0 </p></td>
              <td><p align="left">0.75</p></td>
        </tr>
    </tbody>
</table>

## What Accuracy Can I Expect?

These tables show experiment results of the current version of model distillation in Haystack.

### Only using prediction layer distillation
This table shows the results of the experiments where we applied prediction layer to distill a fine-tuned large model (~350M parameters) into a base model (~115M parameters and ~2x the speed of a large model).
<table>
    <tbody>
        <tr>
            <th><p align="left">Student</p></th>
            <th><p align="left">Teacher</p></th>
            <th><p align="left">Distilled</p></th>
            <th><p align="left">Base F1</p></th>
            <th><p align="left">Teacher F1</p></th>
            <th><p align="left">Distilled F1</p></th>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/prajjwal1/bert-medium">prajjwal1/​bert-medium</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/bert-large-uncased-whole-word-masking-squad2">deepset/​bert-large-uncased-whole-word-masking-squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/bert-medium-squad2-distilled">deepset/​bert-medium-squad2-distilled</a></p></td>
            <td><p align="left">69.6% </p></td>
             <td><p align="left">83.2% </p></td>
              <td><p align="left">72.8%</p></td>
        </tr>
         <tr>
            <td><p align="left"><a href="https://huggingface.co/roberta-base">roberta-base</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/roberta-large-squad2">deepset/​roberta-large-squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/roberta-base-squad2-distilled">deepset/​roberta-base-squad2-distilled</a></p></td>
            <td><p align="left">82.6%</p></td>
             <td><p align="left">87.9%</p></td>
              <td><p align="left">83.9%</p></td>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/xlm-roberta-base">xlm-roberta-base</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/xlm-roberta-large-squad2">deepset/​xlm-roberta-large-squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/xlm-roberta-base-squad2-distilled">deepset/​xlm-roberta-base-squad2-distilled</a></p></td>
            <td><p align="left">78.0%</p></td>
             <td><p align="left">84.4% </p></td>
              <td><p align="left">79.0%</p></td>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/deepset/gelectra-base">deepset/​gelectra-base</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/gelectra-large-germanquad">deepset/​gelectra-large-germanquad</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/gelectra-base-germanquad-distilled">deepset/​gelectra-base-germanquad-distilled</a></p></td>
            <td><p align="left">77.2%</p></td>
             <td><p align="left">86.4%</p></td>
              <td><p align="left">80.4%</p></td>
        </tr>
    </tbody>
</table>

### Intermediate Layer Distillation and Prediction Layer Distillation
In this experiment, we used intermediate layer distillation. We distilled a base model (~115M parameters) into a TinyBERT-6L-768d model (~67M parameters and ~2x the speed of a base model).
<table>
    <tbody>
        <tr>
            <th><p align="left">Student</p></th>
            <th><p align="left">Teacher</p></th>
            <th><p align="left">Distilled</p></th>
            <th><p align="left">Base F1</p></th>
            <th><p align="left">Teacher F1</p></th>
            <th><p align="left">Distilled F1</p></th>
        </tr>
        <tr>
            <td><p align="left"><a href="https://huggingface.co/huawei-noah/TinyBERT_General_6L_768D">huawei-​noah/​Tiny​BERT\_​General\_​6L\_​768D</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/bert-base-uncased-squad2/">deepset/​bert-​base-​uncased-​squad2</a></p></td>
            <td><p align="left"><a href="https://huggingface.co/deepset/tinybert-6l-768d-squad2">deepset/​tinybert-​6l-​768d-​squad2</a></p></td>
            <td><p align="left">71.1%</p></td>
             <td><p align="left">77.8% </p></td>
              <td><p align="left">76.2%</p></td>
        </tr>
    </tbody>
</table>

The baseline is the student model fine-tuned without distillation.
