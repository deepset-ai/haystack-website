export const versions = [
  "v0.9.0",
  "v0.8.0",
  "v0.7.0",
  "v0.6.0",
  "v0.5.0",
  "v0.4.0",
];

type MenuItem = {
  subMenuTitle: string;
  repoPath: string;
  pathPrefix: string;
  items: { filename: string; title: string; slug: string }[];
};

export const menu: MenuItem[] = [
  {
    subMenuTitle: "Overview",
    repoPath: "/_src/usage/usage/",
    pathPrefix: "/overview/",
    items: [
      {
        slug: "get-started",
        filename: "get_started.md",
        title: "Get Started",
      },
      {
        slug: "intro",
        filename: "intro.md",
        title: "What is Haystack?",
      },
      {
        slug: "use-cases",
        filename: "use_cases.md",
        title: "Use Cases",
      },
      {
        slug: "roadmap",
        filename: "roadmap.md",
        title: "Roadmap",
      },
      {
        slug: "faq",
        filename: "faq.md",
        title: "FAQ",
      },
      {
        slug: "glossary",
        filename: "terms.md",
        title: "Glossary",
      },
    ],
  },
  {
    subMenuTitle: "Usage",
    repoPath: "/_src/usage/usage/",
    pathPrefix: "/usage/",
    items: [
      {
        slug: "preprocessing",
        filename: "preprocessing.md",
        title: "Preprocessing",
      },
      {
        slug: "pipelines",
        filename: "pipelines.md",
        title: "Pipelines",
      },
      {
        slug: "document-store",
        filename: "document_store.md",
        title: "DocumentStore",
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
        slug: "knowledge-graph",
        filename: "knowledge_graph.md",
        title: "Knowledge Graph",
      },
      {
        slug: "languages",
        filename: "languages.md",
        title: "Languages Other Than English",
      },
      {
        slug: "domain-adaptation",
        filename: "domain_adaptation.md",
        title: "Domain Adaptation",
      },
      {
        slug: "optimization",
        filename: "optimization.md",
        title: "Optimization",
      },
      {
        slug: "annotation",
        filename: "annotation.md",
        title: "Annotation Tool",
      },
      {
        slug: "ranker",
        filename: "ranker.md",
        title: "Ranker",
      },
    ],
  },
  {
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
  },
  {
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
  },
];
