type Meta = {
  subMenuTitle: string;
  repoPath: string;
  pathPrefix: string;
  items: { filename: string; title: string; slug: string }[];
};

export const referenceFilesLatest: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "document-classifier",
      filename: "document_classifier.md",
      title: "Document Classifier",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "query-classifier",
      filename: "query_classifier.md",
      title: "Query Classifier",
    },
    {
      slug: "extractor",
      filename: "extractor.md",
      title: "Extractor",
    },
    {
      slug: "other",
      filename: "other.md",
      title: "Other",
    },
    {
      slug: "primitives",
      filename: "primitives.md",
      title: "Primitives",
    },
    {
      slug: "file-classifier",
      filename: "file_classifier.md",
      title: "File Classifier",
    }
  ],
};

export const tutorialFilesLatest: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
  ],
};

export const referenceFilesV140: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "document-classifier",
      filename: "document_classifier.md",
      title: "Document Classifier",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "query-classifier",
      filename: "query_classifier.md",
      title: "Query Classifier",
    },
    {
      slug: "extractor",
      filename: "extractor.md",
      title: "Extractor",
    },
    {
      slug: "other",
      filename: "other.md",
      title: "Other",
    },
    {
      slug: "primitives",
      filename: "primitives.md",
      title: "Primitives",
    },
    {
      slug: "file-classifier",
      filename: "file_classifier.md",
      title: "File Classifier",
    }
  ],
};

export const tutorialFilesV140: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
  ],
};

export const referenceFilesV130: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "document-classifier",
      filename: "document_classifier.md",
      title: "Document Classifier",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "query-classifier",
      filename: "query_classifier.md",
      title: "Query Classifier",
    },
    {
      slug: "extractor",
      filename: "extractor.md",
      title: "Extractor",
    },
    {
      slug: "other",
      filename: "other.md",
      title: "Other",
    },
    {
      slug: "primitives",
      filename: "primitives.md",
      title: "Primitives",
    },
    {
      slug: "file-classifier",
      filename: "file_classifier.md",
      title: "File Classifier",
    }
  ],
};

export const tutorialFilesV130: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
  ],
};

export const referenceFilesV120: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "document-classifier",
      filename: "document_classifier.md",
      title: "Document Classifier",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "query-classifier",
      filename: "query_classifier.md",
      title: "Query Classifier",
    },
    {
      slug: "extractor",
      filename: "extractor.md",
      title: "Extractor",
    },
    {
      slug: "other",
      filename: "other.md",
      title: "Other",
    },
    {
      slug: "primitives",
      filename: "primitives.md",
      title: "Primitives",
    },
    {
      slug: "file-classifier",
      filename: "file_classifier.md",
      title: "File Classifier",
    }
  ],
};

export const tutorialFilesV120: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
  ],
};

export const referenceFilesV110: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "document-classifier",
      filename: "document_classifier.md",
      title: "Document Classifier",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "query-classifier",
      filename: "query_classifier.md",
      title: "Query Classifier",
    },
    {
      slug: "extractor",
      filename: "extractor.md",
      title: "Extractor",
    },
    {
      slug: "other",
      filename: "other.md",
      title: "Other",
    },
    {
      slug: "primitives",
      filename: "primitives.md",
      title: "Primitives",
    },
    {
      slug: "file-classifier",
      filename: "file_classifier.md",
      title: "File Classifier",
    }
  ],
};

export const tutorialFilesV110: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
  ],
};

export const referenceFilesV100: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "document-classifier",
      filename: "document_classifier.md",
      title: "Document Classifier",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "query-classifier",
      filename: "query_classifier.md",
      title: "Query Classifier",
    },
    {
      slug: "extractor",
      filename: "extractor.md",
      title: "Extractor",
    },
    {
      slug: "other",
      filename: "other.md",
      title: "Other",
    },
    {
      slug: "primitives",
      filename: "primitives.md",
      title: "Primitives",
    },
  ],
};

export const tutorialFilesV100: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
  ],
};

export const referenceFilesV0100: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "knowledge-graph",
      filename: "knowledge_graph.md",
      title: "Knowledge Graph",
    },
    {
      slug: "graph-retriever",
      filename: "graph_retriever.md",
      title: "Graph Retriever",
    },
    {
      slug: "question-generator",
      filename: "question_generator.md",
      title: "Question Generator",
    },
    {
      slug: "ranker",
      filename: "ranker.md",
      title: "Ranker",
    },
    {
      slug: "classifier",
      filename: "classifier.md",
      title: "Classifier",
    },
  ],
};

export const tutorialFilesV0100: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
    {
      slug: "question-generation",
      filename: "13.md",
      title: 'Question Generation',
    },
    {
      slug: "query-classifier",
      filename: "14.md",
      title: 'Query Classifier',
    },
    {
      slug: "table-qa",
      filename: "15.md",
      title: 'Table Question Answering',
    },
    {
      slug: "doc-class-index",
      filename: "16.md",
      title: 'Document Classifier at Indexing',
    }
  ],
};

export const referenceFilesV090: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "summarizer",
      filename: "summarizer.md",
      title: "Summarizer",
    },
    {
      slug: "translator",
      filename: "translator.md",
      title: "Translator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "crawler",
      filename: "crawler.md",
      title: "Crawler",
    },
    {
      slug: "evaluation",
      filename: "evaluation.md",
      title: "Evaluation",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
    {
      slug: "knowledge-graph",
      filename: "knowledge_graph.md",
      title: "Knowledge Graph",
    },
    {
      slug: "graph-retriever",
      filename: "graph_retriever.md",
      title: "Graph Retriever",
    },
  ],
};

export const tutorialFilesV090: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
    {
      slug: "pipelines",
      filename: "11.md",
      title: "How to use Pipelines",
    },
    {
      slug: "lfqa",
      filename: "12.md",
      title: 'Generative QA with "LFQA"',
    },
  ],
};

export const referenceFilesV080: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
  ],
};

export const tutorialFilesV080: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
    {
      slug: "knowledge-graph",
      filename: "10.md",
      title: "Question Answering on a Knowledge Graph",
    },
  ],
};

export const referenceFilesV070: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
  ],
};

export const tutorialFilesV070: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
    {
      slug: "preprocessing",
      filename: "8.md",
      title: "Preprocessing your Documents",
    },
    {
      slug: "train-dpr",
      filename: "9.md",
      title: "How to Train DPR",
    },
  ],
};

export const referenceFilesV060: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "generator",
      filename: "generator.md",
      title: "Generator",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
    {
      slug: "pipelines",
      filename: "pipelines.md",
      title: "Pipelines",
    },
  ],
};

export const tutorialFilesV060: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
    {
      slug: "retrieval-augmented-generation",
      filename: "7.md",
      title: 'Generative QA with "Retrieval-Augmented Generation"',
    },
  ],
};

export const referenceFilesV050: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
  ],
};

export const tutorialFilesV050: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
  ],
};

export const referenceFilesV040: Meta = {
  subMenuTitle: "API Reference",
  repoPath: "/_src/api/api/",
  pathPrefix: "/reference/",
  items: [
    {
      slug: "document-store",
      filename: "document_store.md",
      title: "Document Store",
    },
    {
      slug: "retriever",
      filename: "retriever.md",
      title: "Retriever",
    },
    {
      slug: "reader",
      filename: "reader.md",
      title: "Reader",
    },
    {
      slug: "preprocessor",
      filename: "preprocessor.md",
      title: "Preprocessor",
    },
    {
      slug: "file-converters",
      filename: "file_converter.md",
      title: "File Converters",
    },
  ],
};

export const tutorialFilesV040: Meta = {
  subMenuTitle: "Tutorials",
  repoPath: "/_src/tutorials/tutorials/",
  pathPrefix: "/tutorials/",
  items: [
    {
      slug: "first-qa-system",
      filename: "1.md",
      title: "Build Your First QA System",
    },
    {
      slug: "fine-tuning-a-model",
      filename: "2.md",
      title: "Fine-tuning a Model on Your Own Data",
    },
    {
      slug: "without-elasticsearch",
      filename: "3.md",
      title: "Build a QA System Without Elasticsearch",
    },
    {
      slug: "existing-faqs",
      filename: "4.md",
      title: "Utilizing existing FAQs for Question Answering",
    },
    {
      slug: "evaluation",
      filename: "5.md",
      title: "Evaluation of a QA System",
    },
    {
      slug: "dense-passage-retrieval",
      filename: "6.md",
      title: 'Better Retrieval via "Dense Passage Retrieval"',
    },
  ],
};