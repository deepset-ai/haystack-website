# Question Generator

The Question Generator takes a Document as input and generates questions which it believes the Document can answer.
This is almost the inverse of the Reader which takes a question and Documents as input and returns an Answer.
`QuestionGenerator` models can be trained using Question Answering datasets.

|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| At the very beginning of a querying Pipeline |
|__Input__       | [Documents](/components/documents-answers-labels#document)                                                                                                                                                                  |
|__Output__      | [Documents](/components/documents-answers-labels#document)                                                                                                             |
|__Classes__     | QuestionGenerator                                                                                                          |
|||

<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Disambiguation: ** The `QuestionGenerator` is different from the `Generator`.
The `QuestionGenerator` receives only Documents as input and returns questions as output
while the `Generator` class is an alternative to the `Reader`.
It takes a question and Documents as input and returns an answer.

</div>

## Usage

To run a stand-alone Question Generator:

``` python
from haystack.nodes import QuestionGenerator

text = """Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum
and first released in 1991, Python's design philosophy emphasizes code
readability with its notable use of significant whitespace."""

qg = QuestionGenerator()
result = qg.generate(text)
```

The output looks like this:

``` python
[' Who created Python?',
 ' When was Python first released?',
 " What is Python's design philosophy?"]
```

## Ready-Made Pipelines

In Haystack, there are two pipeline configurations that are already encapsulated in its own class:
- `QuestionGenerationPipeline`
- `QuestionAnswerGenerationPipeline`

To learn more about these pipelines, have a look at our [ready-made pipelines page](/components/ready-made-pipelines).
To start using the pipelines, check out the [question generation tutorial](/tutorials/question-generation).

## Use Case: Auto-Suggested Questions

Generated questions can help users find the information that they are looking for.
Search engines now present auto-suggested questions to your top search results and even present suggested answers.
It is possible to build the same functionality in Haystack using the `QuestionGenerator`.

After your `Retriever` has returned some candidate documents, you can run the `QuestionGenerator` to suggest more answerable questions.
By presenting these generated questions to your users, you can give them a sense of other facts and topics that are present in the documents.
You can go one step further by predicting answers to these questions with a `Reader` or `Generator`.

## Use Case: Human in the Loop Annotation

A `QuestionGenerator` can enable different annotation workflows.
For example, given a text corpus, you could use the `QuestionGenerator` to create questions,
but you can also use then use a `Reader` to predict answers.

Correct QA pairs created in this manner might not be so effective in retraining your `Reader` model.
However, correcting wrong QA pairs creates training samples that your model found challenging.
These examples are likely to be impactful when it comes to retraining.
This is also a quicker workflow than having annotators generate both a question and an answer.
