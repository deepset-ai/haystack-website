module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/usage/preprocessing",
        destination: "/components/preprocessing",
      },
      {
        source: "/usage/pipelines",
        destination: "/components/pipelines",
      },
      {
        source: "/usage/document-store",
        destination: "/components/document-store",
      },
      {
        source: "/usage/retriever",
        destination: "/components/retriever",
      },
      {
        source: "/usage/reader",
        destination: "/components/reader",
      },
      {
        source: "/usage/generator",
        destination: "/components/generator",
      },
      {
        source: "/usage/summarizer",
        destination: "/components/summarizer",
      },
      {
        source: "/usage/translator",
        destination: "/components/translator",
      },
      {
        source: "/usage/knowledge-graph",
        destination: "/components/knowledge-graph",
      },
      {
        source: "/pipeline_nodes/reader",
        destination: "/pipeline_nodes/reader"
      },
      {
        source: "/usage/languages",
        destination: "/guides/languages",
      },
      {
        source: "/usage/domain-adaptation",
        destination: "/guides/domain-adaptation",
      },
      {
        source: "/usage/optimization",
        destination: "/guides/optimization",
      },
      {
        source: "/usage/annotation",
        destination: "/guides/annotation",
      },
      {
        source: "/usage/rest-api",
        destination: "/guides/rest-api",
      },
      {
        source: "/usage/chatbots",
        destination: "/guides/chatbots",
      },
      {
        source: "/usage/ranker",
        destination: "/components/ranker",
      },
      {
        source: "/usage/query-classifier",
        destination: "/components/query-classifier",
      },
      {
        source: "/docs/intromd",
        destination: "/overview/intro",
      },
      {
        source: "/docs/intromd",
        destination: "/overview/intro",
      },
      {
        source: "/docs/get_startedmd",
        destination: "/overview/get-started",
      },
      {
        source: "/docs/use_casesmd",
        destination: "/overview/use-cases",
      },
      {
        source: "/docs/roadmapmd",
        destination: "/overview/roadmap",
      },
      {
        source: "/docs/faqmd",
        destination: "/overview/faq",
      },
      {
        source: "/docs/termsmd",
        destination: "/overview/glossary",
      },
      {
        source: "/docs/preprocessingmd",
        destination: "/components/preprocessing",
      },
      {
        source: "/docs/pipelinesmd",
        destination: "/components/pipelines",
      },
      {
        source: "/docs/documentstoremd",
        destination: "/components/document-store",
      },
      {
        source: "/docs/retrievermd",
        destination: "/components/retriever",
      },
      {
        source: "/docs/readermd",
        destination: "/components/reader",
      },
      {
        source: "/docs/generatormd",
        destination: "/components/generator",
      },
      {
        source: "/docs/summarizermd",
        destination: "/components/summarizer",
      },
      {
        source: "/docs/translatormd",
        destination: "/components/translator",
      },
      {
        source: "/docs/knowledgegraphmd",
        destination: "/components/knowledge-graph",
      },
      {
        source: "/docs/languagesmd",
        destination: "/guides/languages",
      },
      {
        source: "/docs/domain_adaptationmd",
        destination: "/guides/domain-adaptation",
      },
      {
        source: "/docs/optimizationmd",
        destination: "/guides/optimization",
      },
      {
        source: "/docs/annotationmd",
        destination: "/guides/annotation",
      },
      {
        source: "/docs/rankermd",
        destination: "/guides/ranker",
      },
      {
        source: "/docs/query_classifiermd",
        destination: "/guides/query-classifier",
      },
      {
        source: "/docs/tutorial1md",
        destination: "/tutorials/first-qa-system",
      },
      {
        source: "/docs/tutorial2md",
        destination: "/tutorials/fine-tuning-a-model",
      },
      {
        source: "/docs/tutorial3md",
        destination: "/tutorials/without-elasticsearch",
      },
      {
        source: "/docs/tutorial4md",
        destination: "/tutorials/existing-faqs",
      },
      {
        source: "/docs/tutorial5md",
        destination: "/tutorials/evaluation",
      },
      {
        source: "/docs/tutorial6md",
        destination: "/tutorials/dense-passage-retrieval",
      },
      {
        source: "/docs/tutorial7md",
        destination: "/tutorials/retrieval-augmented-generation",
      },
      {
        source: "/docs/tutorial8md",
        destination: "/tutorials/preprocessing",
      },
      {
        source: "/docs/tutorial9md",
        destination: "/tutorials/train-dpr",
      },
      {
        source: "/docs/tutorial10md",
        destination: "/tutorials/knowledge-graph",
      },
      {
        source: "/docs/tutorial11md",
        destination: "/tutorials/pipelines",
      },
      {
        source: "/docs/tutorial12md",
        destination: "/tutorials/lfqa",
      },
      {
        source: "/docs/apidatabasemd",
        destination: "/reference/document-store",
      },
      {
        source: "/docs/apiretrievermd",
        destination: "/reference/retriever",
      },
      {
        source: "/docs/apireadermd",
        destination: "/reference/reader",
      },
      {
        source: "/docs/apigeneratormd",
        destination: "/reference/generator",
      },
      {
        source: "/docs/apisummarizermd",
        destination: "/reference/summarizer",
      },
      {
        source: "/docs/apitranslatormd",
        destination: "/reference/translator",
      },
      {
        source: "/docs/apiindexingmd",
        destination: "/reference/preprocessor",
      },
      {
        source: "/docs/file_convertersmd",
        destination: "/reference/file-converters",
      },
      {
        source: "/docs/apicrawlermd",
        destination: "/reference/crawler",
      },
      {
        source: "/docs/apievaluationmd",
        destination: "/reference/evaluation",
      },
      {
        source: "/docs/apipipelinesmd",
        destination: "/reference/pipelines",
      },
      {
        source: "/docs/apigraphretrievermd",
        destination: "/reference/v0.10.0/graph-retriever",
      },
      {
        source: "/docs/latest/get_startedmd",
        destination: "/overview/get-started",
      },
      {
        source: "/docs/latest/use_casesmd",
        destination: "/overview/use-cases",
      },
      {
        source: "/docs/latest/roadmapmd",
        destination: "/overview/roadmap",
      },
      {
        source: "/docs/latest/faqmd",
        destination: "/overview/faq",
      },
      {
        source: "/docs/latest/termsmd",
        destination: "/overview/glossary",
      },
      {
        source: "/docs/latest/preprocessingmd",
        destination: "/components/preprocessing",
      },
      {
        source: "/docs/latest/pipelinesmd",
        destination: "/components/pipelines",
      },
      {
        source: "/docs/latest/documentstoremd",
        destination: "/components/document-store",
      },
      {
        source: "/docs/latest/retrievermd",
        destination: "/components/retriever",
      },
      {
        source: "/docs/latest/readermd",
        destination: "/components/reader",
      },
      {
        source: "/docs/latest/generatormd",
        destination: "/components/generator",
      },
      {
        source: "/docs/latest/summarizermd",
        destination: "/components/summarizer",
      },
      {
        source: "/docs/latest/translatormd",
        destination: "/components/translator",
      },
      {
        source: "/docs/latest/knowledgegraphmd",
        destination: "/components/knowledge-graph",
      },
      {
        source: "/docs/latest/languagesmd",
        destination: "/guides/languages",
      },
      {
        source: "/docs/latest/domain_adaptationmd",
        destination: "/guides/domain-adaptation",
      },
      {
        source: "/docs/latest/optimizationmd",
        destination: "/guides/optimization",
      },
      {
        source: "/docs/latest/annotationmd",
        destination: "/guides/annotation",
      },
      {
        source: "/docs/latest/rankermd",
        destination: "/components/ranker",
      },
      {
        source: "/docs/latest/query_classifiermd",
        destination: "/components/query-classifier",
      },
      {
        source: "/docs/latest/tutorial1md",
        destination: "/tutorials/first-qa-system",
      },
      {
        source: "/docs/latest/tutorial2md",
        destination: "/tutorials/fine-tuning-a-model",
      },
      {
        source: "/docs/latest/tutorial3md",
        destination: "/tutorials/without-elasticsearch",
      },
      {
        source: "/docs/latest/tutorial4md",
        destination: "/tutorials/existing-faqs",
      },
      {
        source: "/docs/latest/tutorial5md",
        destination: "/tutorials/evaluation",
      },
      {
        source: "/docs/latest/tutorial6md",
        destination: "/tutorials/dense-passage-retrieval",
      },
      {
        source: "/docs/latest/tutorial7md",
        destination: "/tutorials/retrieval-augmented-generation",
      },
      {
        source: "/docs/latest/tutorial8md",
        destination: "/tutorials/preprocessing",
      },
      {
        source: "/docs/latest/tutorial9md",
        destination: "/tutorials/train-dpr",
      },
      {
        source: "/docs/latest/tutorial10md",
        destination: "/tutorials/knowledge-graph",
      },
      {
        source: "/docs/latest/tutorial11md",
        destination: "/tutorials/pipelines",
      },
      {
        source: "/docs/latest/tutorial12md",
        destination: "/tutorials/lfqa",
      },
      {
        source: "/docs/latest/apidatabasemd",
        destination: "/reference/document-store",
      },
      {
        source: "/docs/latest/apiretrievermd",
        destination: "/reference/retriever",
      },
      {
        source: "/docs/latest/apireadermd",
        destination: "/reference/reader",
      },
      {
        source: "/docs/latest/apigeneratormd",
        destination: "/reference/generator",
      },
      {
        source: "/docs/latest/apisummarizermd",
        destination: "/reference/summarizer",
      },
      {
        source: "/docs/latest/apitranslatormd",
        destination: "/reference/translator",
      },
      {
        source: "/docs/latest/apiindexingmd",
        destination: "/reference/preprocessor",
      },
      {
        source: "/docs/latest/file_convertersmd",
        destination: "/reference/file-converters",
      },
      {
        source: "/docs/latest/apicrawlermd",
        destination: "/reference/crawler",
      },
      {
        source: "/docs/latest/apievaluationmd",
        destination: "/reference/evaluation",
      },
      {
        source: "/docs/latest/apipipelinesmd",
        destination: "/reference/pipelines",
      },
      {
        source: "/docs/latest/apigraphretrievermd",
        destination: "/reference//v0.10.0/graph-retriever",
      },
      {
        source: '/bm/benchmarks',
        destination: '/benchmarks/latest',
      },
      {
        source: '/docs/v0.9.0/intromd',
        destination: '/overview/v0.9.0/intro',
      },
      {
        source: '/docs/v0.9.0/get_startedmd',
        destination: '/overview/v0.9.0/get-started',
      },
      {
        source: '/docs/v0.9.0/use_casesmd',
        destination: '/overview/v0.9.0/use-cases',
      },
      {
        source: '/docs/v0.9.0/roadmapmd',
        destination: '/overview/v0.9.0/roadmap',
      },
      {
        source: '/docs/v0.9.0/faqmd',
        destination: '/overview/v0.9.0/faq',
      },
      {
        source: '/docs/v0.9.0/termsmd',
        destination: '/overview/v0.9.0/glossary',
      },
      {
        source: '/docs/v0.9.0/preprocessingmd',
        destination: '/usage/v0.9.0/preprocessing',
      },
      {
        source: '/docs/v0.9.0/pipelinesmd',
        destination: '/usage/v0.9.0/pipelines',
      },
      {
        source: '/docs/v0.9.0/documentstoremd',
        destination: '/usage/v0.9.0/document-store',
      },
      {
        source: '/docs/v0.9.0/retrievermd',
        destination: '/usage/v0.9.0/retriever',
      },
      {
        source: '/docs/v0.9.0/readermd',
        destination: '/usage/v0.9.0/reader',
      },
      {
        source: '/docs/v0.9.0/generatormd',
        destination: '/usage/v0.9.0/generator',
      },
      {
        source: '/docs/v0.9.0/summarizermd',
        destination: '/usage/v0.9.0/summarizer',
      },
      {
        source: '/docs/v0.9.0/translatormd',
        destination: '/usage/v0.9.0/translator',
      },
      {
        source: '/docs/v0.9.0/knowledgegraphmd',
        destination: '/usage/v0.9.0/knowledge-graph',
      },
      {
        source: '/docs/v0.9.0/languagesmd',
        destination: '/usage/v0.9.0/languages',
      },
      {
        source: '/docs/v0.9.0/domain_adaptationmd',
        destination: '/usage/v0.9.0/domain-adaptation',
      },
      {
        source: '/docs/v0.9.0/optimizationmd',
        destination: '/usage/v0.9.0/optimization',
      },
      {
        source: '/docs/v0.9.0/annotationmd',
        destination: '/usage/v0.9.0/annotation',
      },
      {
        source: '/docs/v0.9.0/rankermd',
        destination: '/usage/v0.9.0/ranker',
      },
      {
        source: '/docs/v0.9.0/tutorial1md',
        destination: '/tutorials/v0.9.0/first-qa-system',
      },
      {
        source: '/docs/v0.9.0/tutorial2md',
        destination: '/tutorials/v0.9.0/fine-tuning-a-model',
      },
      {
        source: '/docs/v0.9.0/tutorial3md',
        destination: '/tutorials/v0.9.0/without-elasticsearch',
      },
      {
        source: '/docs/v0.9.0/tutorial4md',
        destination: '/tutorials/v0.9.0/existing-faqs',
      },
      {
        source: '/docs/v0.9.0/tutorial5md',
        destination: '/tutorials/v0.9.0/evaluation',
      },
      {
        source: '/docs/v0.9.0/tutorial6md',
        destination: '/tutorials/v0.9.0/dense-passage-retrieval',
      },
      {
        source: '/docs/v0.9.0/tutorial7md',
        destination: '/tutorials/v0.9.0/retrieval-augmented-generation',
      },
      {
        source: '/docs/v0.9.0/tutorial8md',
        destination: '/tutorials/v0.9.0/preprocessing',
      },
      {
        source: '/docs/v0.9.0/tutorial9md',
        destination: '/tutorials/v0.9.0/train-dpr',
      },
      {
        source: '/docs/v0.9.0/tutorial10md',
        destination: '/tutorials/v0.9.0/knowledge-graph',
      },
      {
        source: '/docs/v0.9.0/tutorial11md',
        destination: '/tutorials/v0.9.0/pipelines',
      },
      {
        source: '/docs/v0.9.0/tutorial12md',
        destination: '/tutorials/v0.9.0/lfqa',
      },
      {
        source: '/docs/v0.9.0/apidatabasemd',
        destination: '/reference/v0.9.0/document-store',
      },
      {
        source: '/docs/v0.9.0/apiretrievermd',
        destination: '/reference/v0.9.0/retriever',
      },
      {
        source: '/docs/v0.9.0/apireadermd',
        destination: '/reference/v0.9.0/reader',
      },
      {
        source: '/docs/v0.9.0/apigeneratormd',
        destination: '/reference/v0.9.0/generator',
      },
      {
        source: '/docs/v0.9.0/apisummarizermd',
        destination: '/reference/v0.9.0/summarizer',
      },
      {
        source: '/docs/v0.9.0/apitranslatormd',
        destination: '/reference/v0.9.0/translator',
      },
      {
        source: '/docs/v0.9.0/apiindexingmd',
        destination: '/reference/v0.9.0/preprocessor',
      },
      {
        source: '/docs/v0.9.0/file_convertersmd',
        destination: '/reference/v0.9.0/file-converters',
      },
      {
        source: '/docs/v0.9.0/apicrawlermd',
        destination: '/reference/v0.9.0/crawler',
      },
      {
        source: '/docs/v0.9.0/apievaluationmd',
        destination: '/reference/v0.9.0/evaluation',
      },
      {
        source: '/docs/v0.9.0/apipipelinesmd',
        destination: '/reference/v0.9.0/pipelines',
      },
      {
        source: '/docs/v0.9.0/apiknowledgegraphmd',
        destination: '/reference/v0.9.0/knowledge-graph',
      },
      {
        source: '/docs/v0.9.0/apigraphretrievermd',
        destination: '/reference/v0.9.0/graph-retriever',
      },
      {
        source: '/docs/v0.8.0/intromd',
        destination: '/overview/v0.8.0/intro',
      },
      {
        source: '/docs/v0.8.0/get_startedmd',
        destination: '/overview/v0.8.0/get-started',
      },
      {
        source: '/docs/v0.8.0/use_casesmd',
        destination: '/overview/v0.8.0/use-cases',
      },
      {
        source: '/docs/v0.8.0/roadmapmd',
        destination: '/overview/v0.8.0/roadmap',
      },
      {
        source: '/docs/v0.8.0/faqmd',
        destination: '/overview/v0.8.0/faq',
      },
      {
        source: '/docs/v0.8.0/termsmd',
        destination: '/overview/v0.8.0/glossary',
      },
      {
        source: '/docs/v0.8.0/preprocessingmd',
        destination: '/usage/v0.8.0/preprocessing',
      },
      {
        source: '/docs/v0.8.0/pipelinesmd',
        destination: '/usage/v0.8.0/pipelines',
      },
      {
        source: '/docs/v0.8.0/documentstoremd',
        destination: '/usage/v0.8.0/document-store',
      },
      {
        source: '/docs/v0.8.0/retrievermd',
        destination: '/usage/v0.8.0/retriever',
      },
      {
        source: '/docs/v0.8.0/readermd',
        destination: '/usage/v0.8.0/reader',
      },
      {
        source: '/docs/v0.8.0/generatormd',
        destination: '/usage/v0.8.0/generator',
      },
      {
        source: '/docs/v0.8.0/summarizermd',
        destination: '/usage/v0.8.0/summarizer',
      },
      {
        source: '/docs/v0.8.0/translatormd',
        destination: '/usage/v0.8.0/translator',
      },
      {
        source: '/docs/v0.8.0/languagesmd',
        destination: '/usage/v0.8.0/languages',
      },
      {
        source: '/docs/v0.8.0/domain_adaptationmd',
        destination: '/usage/v0.8.0/domain-adaptation',
      },
      {
        source: '/docs/v0.8.0/optimizationmd',
        destination: '/usage/v0.8.0/optimization',
      },
      {
        source: '/docs/v0.8.0/annotationmd',
        destination: '/usage/v0.8.0/annotation',
      },
      {
        source: '/docs/v0.8.0/rankermd',
        destination: '/usage/v0.8.0/ranker',
      },
      {
        source: '/docs/v0.8.0/query_classifiermd',
        destination: '/usage/v0.8.0/query-classifier',
      },
      {
        source: '/docs/v0.8.0/tutorial1md',
        destination: '/tutorials/v0.8.0/first-qa-system',
      },
      {
        source: '/docs/v0.8.0/tutorial2md',
        destination: '/tutorials/v0.8.0/fine-tuning-a-model',
      },
      {
        source: '/docs/v0.8.0/tutorial3md',
        destination: '/tutorials/v0.8.0/without-elasticsearch',
      },
      {
        source: '/docs/v0.8.0/tutorial4md',
        destination: '/tutorials/v0.8.0/existing-faqs',
      },
      {
        source: '/docs/v0.8.0/tutorial5md',
        destination: '/tutorials/v0.8.0/evaluation',
      },
      {
        source: '/docs/v0.8.0/tutorial6md',
        destination: '/tutorials/v0.8.0/dense-passage-retrieval',
      },
      {
        source: '/docs/v0.8.0/tutorial7md',
        destination: '/tutorials/v0.8.0/retrieval-augmented-generation',
      },
      {
        source: '/docs/v0.8.0/tutorial8md',
        destination: '/tutorials/v0.8.0/preprocessing',
      },
      {
        source: '/docs/v0.8.0/tutorial9md',
        destination: '/tutorials/v0.8.0/train-dpr',
      },
      {
        source: '/docs/v0.8.0/tutorial10md',
        destination: '/tutorials/v0.8.0/knowledge-graph',
      },
      {
        source: '/docs/v0.8.0/tutorial12md',
        destination: '/tutorials/v0.8.0/lfqa',
      },
      {
        source: '/docs/v0.8.0/apidatabasemd',
        destination: '/reference/v0.8.0/document-store',
      },
      {
        source: '/docs/v0.8.0/apiretrievermd',
        destination: '/reference/v0.8.0/retriever',
      },
      {
        source: '/docs/v0.8.0/apireadermd',
        destination: '/reference/v0.8.0/reader',
      },
      {
        source: '/docs/v0.8.0/apigeneratormd',
        destination: '/reference/v0.8.0/generator',
      },
      {
        source: '/docs/v0.8.0/apisummarizermd',
        destination: '/reference/v0.8.0/summarizer',
      },
      {
        source: '/docs/v0.8.0/apitranslatormd',
        destination: '/reference/v0.8.0/translator',
      },
      {
        source: '/docs/v0.8.0/apiindexingmd',
        destination: '/reference/v0.8.0/preprocessor',
      },
      {
        source: '/docs/v0.8.0/file_convertersmd',
        destination: '/reference/v0.8.0/file-converters',
      },
      {
        source: '/docs/v0.8.0/apicrawlermd',
        destination: '/reference/v0.8.0/crawler',
      },
      {
        source: '/docs/v0.8.0/apievaluationmd',
        destination: '/reference/v0.8.0/evaluation',
      },
      {
        source: '/docs/v0.8.0/apipipelinesmd',
        destination: '/reference/v0.8.0/pipelines',
      },
      {
        source: '/docs/v0.7.0/intromd',
        destination: '/overview/v0.7.0/intro',
      },
      {
        source: '/docs/v0.7.0/get_startedmd',
        destination: '/overview/v0.7.0/get-started',
      },
      {
        source: '/docs/v0.7.0/use_casesmd',
        destination: '/overview/v0.7.0/use-cases',
      },
      {
        source: '/docs/v0.7.0/roadmapmd',
        destination: '/overview/v0.7.0/roadmap',
      },
      {
        source: '/docs/v0.7.0/faqmd',
        destination: '/overview/v0.7.0/faq',
      },
      {
        source: '/docs/v0.7.0/termsmd',
        destination: '/overview/v0.7.0/glossary',
      },
      {
        source: '/docs/v0.7.0/preprocessingmd',
        destination: '/usage/v0.7.0/preprocessing',
      },
      {
        source: '/docs/v0.7.0/pipelinesmd',
        destination: '/usage/v0.7.0/pipelines',
      },
      {
        source: '/docs/v0.7.0/documentstoremd',
        destination: '/usage/v0.7.0/document-store',
      },
      {
        source: '/docs/v0.7.0/retrievermd',
        destination: '/usage/v0.7.0/retriever',
      },
      {
        source: '/docs/v0.7.0/readermd',
        destination: '/usage/v0.7.0/reader',
      },
      {
        source: '/docs/v0.7.0/generatormd',
        destination: '/usage/v0.7.0/generator',
      },
      {
        source: '/docs/v0.7.0/summarizermd',
        destination: '/usage/v0.7.0/summarizer',
      },
      {
        source: '/docs/v0.7.0/languagesmd',
        destination: '/usage/v0.7.0/languages',
      },
      {
        source: '/docs/v0.7.0/domain_adaptationmd',
        destination: '/usage/v0.7.0/domain-adaptation',
      },
      {
        source: '/docs/v0.7.0/optimizationmd',
        destination: '/usage/v0.7.0/optimization',
      },
      {
        source: '/docs/v0.7.0/annotationmd',
        destination: '/usage/v0.7.0/annotation',
      },
      {
        source: '/docs/v0.7.0/tutorial1md',
        destination: '/tutorials/v0.7.0/first-qa-system',
      },
      {
        source: '/docs/v0.7.0/tutorial2md',
        destination: '/tutorials/v0.7.0/fine-tuning-a-model',
      },
      {
        source: '/docs/v0.7.0/tutorial3md',
        destination: '/tutorials/v0.7.0/without-elasticsearch',
      },
      {
        source: '/docs/v0.7.0/tutorial4md',
        destination: '/tutorials/v0.7.0/existing-faqs',
      },
      {
        source: '/docs/v0.7.0/tutorial5md',
        destination: '/tutorials/v0.7.0/evaluation',
      },
      {
        source: '/docs/v0.7.0/tutorial6md',
        destination: '/tutorials/v0.7.0/dense-passage-retrieval',
      },
      {
        source: '/docs/v0.7.0/tutorial7md',
        destination: '/tutorials/v0.7.0/retrieval-augmented-generation',
      },
      {
        source: '/docs/v0.7.0/tutorial8md',
        destination: '/tutorials/v0.7.0/preprocessing',
      },
      {
        source: '/docs/v0.7.0/tutorial9md',
        destination: '/tutorials/v0.7.0/train-dpr',
      },
      {
        source: '/docs/v0.7.0/tutorial11md',
        destination: '/tutorials/v0.7.0/pipelines',
      },
      {
        source: '/docs/v0.7.0/tutorial12md',
        destination: '/tutorials/v0.7.0/lfqa',
      },
      {
        source: '/docs/v0.7.0/apidatabasemd',
        destination: '/reference/v0.7.0/document-store',
      },
      {
        source: '/docs/v0.7.0/apiretrievermd',
        destination: '/reference/v0.7.0/retriever',
      },
      {
        source: '/docs/v0.7.0/apireadermd',
        destination: '/reference/v0.7.0/reader',
      },
      {
        source: '/docs/v0.7.0/apigeneratormd',
        destination: '/reference/v0.7.0/generator',
      },
      {
        source: '/docs/v0.7.0/apisummarizermd',
        destination: '/reference/v0.7.0/summarizer',
      },
      {
        source: '/docs/v0.7.0/apiindexingmd',
        destination: '/reference/v0.7.0/preprocessor',
      },
      {
        source: '/docs/v0.7.0/file_convertersmd',
        destination: '/reference/v0.7.0/file-converters',
      },
      {
        source: '/docs/v0.7.0/apicrawlermd',
        destination: '/reference/v0.7.0/crawler',
      },
      {
        source: '/docs/v0.7.0/apipipelinesmd',
        destination: '/reference/v0.7.0/pipelines',
      },
      {
        source: '/docs/v0.6.0/intromd',
        destination: '/overview/v0.6.0/intro',
      },
      {
        source: '/docs/v0.6.0/get_startedmd',
        destination: '/overview/v0.6.0/get-started',
      },
      {
        source: '/docs/v0.6.0/use_casesmd',
        destination: '/overview/v0.6.0/use-cases',
      },
      {
        source: '/docs/v0.6.0/roadmapmd',
        destination: '/overview/v0.6.0/roadmap',
      },
      {
        source: '/docs/v0.6.0/faqmd',
        destination: '/overview/v0.6.0/faq',
      },
      {
        source: '/docs/v0.6.0/termsmd',
        destination: '/overview/v0.6.0/glossary',
      },
      {
        source: '/docs/v0.6.0/preprocessingmd',
        destination: '/usage/v0.6.0/preprocessing',
      },
      {
        source: '/docs/v0.6.0/pipelinesmd',
        destination: '/usage/v0.6.0/pipelines',
      },
      {
        source: '/docs/v0.6.0/documentstoremd',
        destination: '/usage/v0.6.0/document-store',
      },
      {
        source: '/docs/v0.6.0/retrievermd',
        destination: '/usage/v0.6.0/retriever',
      },
      {
        source: '/docs/v0.6.0/readermd',
        destination: '/usage/v0.6.0/reader',
      },
      {
        source: '/docs/v0.6.0/generatormd',
        destination: '/usage/v0.6.0/generator',
      },
      {
        source: '/docs/v0.6.0/knowledgegraphmd',
        destination: '/usage/v0.6.0/knowledge-graph',
      },
      {
        source: '/docs/v0.6.0/languagesmd',
        destination: '/usage/v0.6.0/languages',
      },
      {
        source: '/docs/v0.6.0/domain_adaptationmd',
        destination: '/usage/v0.6.0/domain-adaptation',
      },
      {
        source: '/docs/v0.6.0/optimizationmd',
        destination: '/usage/v0.6.0/optimization',
      },
      {
        source: '/docs/v0.6.0/annotationmd',
        destination: '/usage/v0.6.0/annotation',
      },
      {
        source: '/docs/v0.6.0/rankermd',
        destination: '/usage/v0.6.0/ranker',
      },
      {
        source: '/docs/v0.6.0/query_classifiermd',
        destination: '/usage/v0.6.0/query-classifier',
      },
      {
        source: '/docs/v0.6.0/tutorial1md',
        destination: '/tutorials/v0.6.0/first-qa-system',
      },
      {
        source: '/docs/v0.6.0/tutorial2md',
        destination: '/tutorials/v0.6.0/fine-tuning-a-model',
      },
      {
        source: '/docs/v0.6.0/tutorial3md',
        destination: '/tutorials/v0.6.0/without-elasticsearch',
      },
      {
        source: '/docs/v0.6.0/tutorial4md',
        destination: '/tutorials/v0.6.0/existing-faqs',
      },
      {
        source: '/docs/v0.6.0/tutorial5md',
        destination: '/tutorials/v0.6.0/evaluation',
      },
      {
        source: '/docs/v0.6.0/tutorial6md',
        destination: '/tutorials/v0.6.0/dense-passage-retrieval',
      },
      {
        source: '/docs/v0.6.0/tutorial7md',
        destination: '/tutorials/v0.6.0/retrieval-augmented-generation',
      },
      {
        source: '/docs/v0.6.0/tutorial10md',
        destination: '/tutorials/v0.6.0/knowledge-graph',
      },
      {
        source: '/docs/v0.6.0/tutorial11md',
        destination: '/tutorials/v0.6.0/pipelines',
      },
      {
        source: '/docs/v0.6.0/tutorial12md',
        destination: '/tutorials/v0.6.0/lfqa',
      },
      {
        source: '/docs/v0.6.0/apidatabasemd',
        destination: '/reference/v0.6.0/document-store',
      },
      {
        source: '/docs/v0.6.0/apiretrievermd',
        destination: '/reference/v0.6.0/retriever',
      },
      {
        source: '/docs/v0.6.0/apireadermd',
        destination: '/reference/v0.6.0/reader',
      },
      {
        source: '/docs/v0.6.0/apigeneratormd',
        destination: '/reference/v0.6.0/generator',
      },
      {
        source: '/docs/v0.6.0/apitranslatormd',
        destination: '/reference/v0.6.0/translator',
      },
      {
        source: '/docs/v0.6.0/apiindexingmd',
        destination: '/reference/v0.6.0/preprocessor',
      },
      {
        source: '/docs/v0.6.0/file_convertersmd',
        destination: '/reference/v0.6.0/file-converters',
      },
      {
        source: '/docs/v0.6.0/apicrawlermd',
        destination: '/reference/v0.6.0/crawler',
      },
      {
        source: '/docs/v0.6.0/apievaluationmd',
        destination: '/reference/v0.6.0/evaluation',
      },
      {
        source: '/docs/v0.6.0/apipipelinesmd',
        destination: '/reference/v0.6.0/pipelines',
      },
      {
        source: '/docs/v0.6.0/apiknowledgegraphmd',
        destination: '/reference/v0.6.0/knowledge-graph',
      },
      {
        source: '/docs/v0.5.0/intromd',
        destination: '/overview/v0.5.0/intro',
      },
      {
        source: '/docs/v0.5.0/get_startedmd',
        destination: '/overview/v0.5.0/get-started',
      },
      {
        source: '/docs/v0.5.0/use_casesmd',
        destination: '/overview/v0.5.0/use-cases',
      },
      {
        source: '/docs/v0.5.0/roadmapmd',
        destination: '/overview/v0.5.0/roadmap',
      },
      {
        source: '/docs/v0.5.0/faqmd',
        destination: '/overview/v0.5.0/faq',
      },
      {
        source: '/docs/v0.5.0/termsmd',
        destination: '/overview/v0.5.0/glossary',
      },
      {
        source: '/docs/v0.5.0/preprocessingmd',
        destination: '/usage/v0.5.0/preprocessing',
      },
      {
        source: '/docs/v0.5.0/documentstoremd',
        destination: '/usage/v0.5.0/document-store',
      },
      {
        source: '/docs/v0.5.0/retrievermd',
        destination: '/usage/v0.5.0/retriever',
      },
      {
        source: '/docs/v0.5.0/readermd',
        destination: '/usage/v0.5.0/reader',
      },
      {
        source: '/docs/v0.5.0/translatormd',
        destination: '/usage/v0.5.0/translator',
      },
      {
        source: '/docs/v0.5.0/languagesmd',
        destination: '/usage/v0.5.0/languages',
      },
      {
        source: '/docs/v0.5.0/domain_adaptationmd',
        destination: '/usage/v0.5.0/domain-adaptation',
      },
      {
        source: '/docs/v0.5.0/optimizationmd',
        destination: '/usage/v0.5.0/optimization',
      },
      {
        source: '/docs/v0.5.0/annotationmd',
        destination: '/usage/v0.5.0/annotation',
      },
      {
        source: '/docs/v0.5.0/rankermd',
        destination: '/usage/v0.5.0/ranker',
      },
      {
        source: '/docs/v0.5.0/query_classifiermd',
        destination: '/usage/v0.5.0/query-classifier',
      },
      {
        source: '/docs/v0.5.0/tutorial1md',
        destination: '/tutorials/v0.5.0/first-qa-system',
      },
      {
        source: '/docs/v0.5.0/tutorial2md',
        destination: '/tutorials/v0.5.0/fine-tuning-a-model',
      },
      {
        source: '/docs/v0.5.0/tutorial3md',
        destination: '/tutorials/v0.5.0/without-elasticsearch',
      },
      {
        source: '/docs/v0.5.0/tutorial4md',
        destination: '/tutorials/v0.5.0/existing-faqs',
      },
      {
        source: '/docs/v0.5.0/tutorial5md',
        destination: '/tutorials/v0.5.0/evaluation',
      },
      {
        source: '/docs/v0.5.0/tutorial6md',
        destination: '/tutorials/v0.5.0/dense-passage-retrieval',
      },
      {
        source: '/docs/v0.5.0/tutorial7md',
        destination: '/tutorials/v0.5.0/retrieval-augmented-generation',
      },
      {
        source: '/docs/v0.5.0/tutorial8md',
        destination: '/tutorials/v0.5.0/preprocessing',
      },
      {
        source: '/docs/v0.5.0/tutorial9md',
        destination: '/tutorials/v0.5.0/train-dpr',
      },
      {
        source: '/docs/v0.5.0/tutorial12md',
        destination: '/tutorials/v0.5.0/lfqa',
      },
      {
        source: '/docs/v0.5.0/apidatabasemd',
        destination: '/reference/v0.5.0/document-store',
      },
      {
        source: '/docs/v0.5.0/apiretrievermd',
        destination: '/reference/v0.5.0/retriever',
      },
      {
        source: '/docs/v0.5.0/apireadermd',
        destination: '/reference/v0.5.0/reader',
      },
      {
        source: '/docs/v0.5.0/apitranslatormd',
        destination: '/reference/v0.5.0/translator',
      },
      {
        source: '/docs/v0.5.0/apiindexingmd',
        destination: '/reference/v0.5.0/preprocessor',
      },
      {
        source: '/docs/v0.5.0/file_convertersmd',
        destination: '/reference/v0.5.0/file-converters',
      },
      {
        source: '/docs/v0.5.0/apicrawlermd',
        destination: '/reference/v0.5.0/crawler',
      },
      {
        source: '/docs/v0.5.0/apievaluationmd',
        destination: '/reference/v0.5.0/evaluation',
      },
      {
        source: '/docs/v0.5.0/apigraphretrievermd',
        destination: '/reference/v0.5.0/graph-retriever',
      },
      {
        source: '/docs/v0.4.0/intromd',
        destination: '/overview/v0.4.0/intro',
      },
      {
        source: '/docs/v0.4.0/get_startedmd',
        destination: '/overview/v0.4.0/get-started',
      },
      {
        source: '/docs/v0.4.0/use_casesmd',
        destination: '/overview/v0.4.0/use-cases',
      },
      {
        source: '/docs/v0.4.0/roadmapmd',
        destination: '/overview/v0.4.0/roadmap',
      },
      {
        source: '/docs/v0.4.0/faqmd',
        destination: '/overview/v0.4.0/faq',
      },
      {
        source: '/docs/v0.4.0/termsmd',
        destination: '/overview/v0.4.0/glossary',
      },
      {
        source: '/docs/v0.4.0/preprocessingmd',
        destination: '/usage/v0.4.0/preprocessing',
      },
      {
        source: '/docs/v0.4.0/documentstoremd',
        destination: '/usage/v0.4.0/document-store',
      },
      {
        source: '/docs/v0.4.0/retrievermd',
        destination: '/usage/v0.4.0/retriever',
      },
      {
        source: '/docs/v0.4.0/readermd',
        destination: '/usage/v0.4.0/reader',
      },
      {
        source: '/docs/v0.4.0/generatormd',
        destination: '/usage/v0.4.0/generator',
      },
      {
        source: '/docs/v0.4.0/languagesmd',
        destination: '/usage/v0.4.0/languages',
      },
      {
        source: '/docs/v0.4.0/domain_adaptationmd',
        destination: '/usage/v0.4.0/domain-adaptation',
      },
      {
        source: '/docs/v0.4.0/optimizationmd',
        destination: '/usage/v0.4.0/optimization',
      },
      {
        source: '/docs/v0.4.0/annotationmd',
        destination: '/usage/v0.4.0/annotation',
      },
      {
        source: '/docs/v0.4.0/tutorial1md',
        destination: '/tutorials/v0.4.0/first-qa-system',
      },
      {
        source: '/docs/v0.4.0/tutorial2md',
        destination: '/tutorials/v0.4.0/fine-tuning-a-model',
      },
      {
        source: '/docs/v0.4.0/tutorial3md',
        destination: '/tutorials/v0.4.0/without-elasticsearch',
      },
      {
        source: '/docs/v0.4.0/tutorial4md',
        destination: '/tutorials/v0.4.0/existing-faqs',
      },
      {
        source: '/docs/v0.4.0/tutorial5md',
        destination: '/tutorials/v0.4.0/evaluation',
      },
      {
        source: '/docs/v0.4.0/tutorial6md',
        destination: '/tutorials/v0.4.0/dense-passage-retrieval',
      },
      {
        source: '/docs/v0.4.0/tutorial7md',
        destination: '/tutorials/v0.4.0/retrieval-augmented-generation',
      },
      {
        source: '/docs/v0.4.0/tutorial12md',
        destination: '/tutorials/v0.4.0/lfqa',
      },
      {
        source: '/docs/v0.4.0/apidatabasemd',
        destination: '/reference/v0.4.0/document-store',
      },
      {
        source: '/docs/v0.4.0/apiretrievermd',
        destination: '/reference/v0.4.0/retriever',
      },
      {
        source: '/docs/v0.4.0/apireadermd',
        destination: '/reference/v0.4.0/reader',
      },
      {
        source: '/docs/v0.4.0/apigeneratormd',
        destination: '/reference/v0.4.0/generator',
      },
      {
        source: '/docs/v0.4.0/apiindexingmd',
        destination: '/reference/v0.4.0/preprocessor',
      },
      {
        source: '/docs/v0.4.0/file_convertersmd',
        destination: '/reference/v0.4.0/file-converters',
      },
      {
        source: '/docs/v0.4.0/apicrawlermd',
        destination: '/reference/v0.4.0/crawler',
      },
      {
        source: '/docs/v0.4.0/apievaluationmd',
        destination: '/reference/v0.4.0/evaluation',
      },
      {
        source: '/docs/v0.4.0/apigraphretrievermd',
        destination: '/reference/v0.4.0/graph-retriever',
      },
      {
        source: '/docs_hub/conf_modelmd',
        destination: '/overview/get-started',
      },
      {
        source: '/pricing/pricing',
        destination: '/overview/get-started',
      },
      {
        source: '/docs/signupmd',
        destination: '/overview/get-started',
      },
      {
        source: '/docs/get_started_hubmd',
        destination: '/overview/get-started',
      },
      {
        source: '/docs_hub/user_settingsmd',
        destination: '/overview/get-started',
      },
      {
        source: '/docs/dashboard_hubmd',
        destination: '/overview/get-started',
      },
      {
        source: '/docs_api/openapispec',
        destination: '/overview/get-started',
      },
      {
        source: '/docs_hub/get_started_hubmd',
        destination: '/overview/get-started',
      },
      {
        source: '/usage/glossary',
        destination: '/overview/glossary',
      },
      {
        source: '/usage/get-started',
        destination: '/overview/get-started',
      },
      {
        source: '/usage/roadmap',
        destination: '/overview/roadmap',
      },
      {
        source: '/usage/intro',
        destination: '/overview/intro',
      },
      {
        source: '/components/classifier',
        destination: '/components/document-classifier',
      },
      {
        source: '/tutorials/5',
        destination: '/tutorials/evaluation',
      },
      {
        source: '/reference/v0.6.0/question-generator',
        destination: '/components/question-generator',
      },
      {
        source: '/reference/knowledge-graph',
        destination: '/reference/v0.10.0/knowledge-graph',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/components/primitives',
        destination: '/components/documents-answers-labels',
        permanent: true,
      },
      {
        source: '/components/nodes',
        destination: '/pipeline_nodes/overview',
        permanent: true,
      },
      {
        source: '/usage/reader',
        destination: '/pipeline_nodes/reader',
        permanent: true,
      },
      {
        source: '/usage/knowledge-graph',
        destination: '/guides/knowledge-graph',
        permanent: true,
      },
      {
        source: '/components/classifier',
        destination: '/pipeline_nodes/query-classifier',
        permanent: true,
      },
      {
        source: '/components/route-documents',
        destination: '/pipeline_nodes/route-documents',
        permanent: true,
      },
      {
        source: '/usage/annotation',
        destination: '/components/annotation',
        permanent: true, 
      },
      {
        source: '/components/ranker',
        destination: '/pipeline_nodes/ranker',
        permanent: true, 
      },
      {
        source: '/usage/retriever',
        destination: '/pipeline_nodes/retriever',
        permanent: true, 
      },
      {
        source: '/usage/glossary',
        destination: '/overview/glossary',
        permanent: true, 
      },
      {
        source: '/components/preprocessing',
        destination: '/pipeline_nodes/preprocessor',
        permanent: true, 
      },
      {
        source: '/components/join-answers',
        destination: '/pipeline_nodes/join-answers',
        permanent: true, 
      },
      {
        source: '/usage/pipelines',
        destination: '/components/ready-made-pipelines',
        permanent: true, 
      },
      {
        source: '/components/question-generator',
        destination: '/pipeline_nodes/question-generator',
        permanent: true, 
      },
      {
        source: '/usage/query-classifier',
        destination: '/pipeline_nodes/query-classifier',
        permanent: true,
      },
      {
        source: '/usage/domain-adaptation',
        destination: '/guides/domain-adaptation',
        permanent: true,
      },
      {
        source: '/usage/roadmap',
        destination: '/overview/roadmap',
        permanent: true,
      },
      {
        source: '/usage/translator',
        destination: '/pipeline_nodes/translator',
        permanent: true,
      },
      {
        source: '/usage/generator',
        destination: '/pipeline_nodes/generator',
        permanent: true,
      },
      {
        source: '/guides/rest-api-definition',
        destination: '/components/rest-api-definition',
        permanent: true,
      },
      {
        source: '/usage/reader',
        destination: '/pipeline_nodes/reader',
        permanent: true,
      },
      {
        source: '/components/reader',
        destination: '/pipeline_nodes/reader',
        permanent: true,
      },
      {
        source: '/components/generator',
        destination: '/pipeline_nodes/generator',
        permanent: true,
      },
      {
        source: '/components/retriever',
        destination: '/pipeline_nodes/retriever',
        permanent: true,
      },
      {
        source: '/components/summarizer',
        destination: '/pipeline_nodes/summarizer',
        permanent: true,
      },
      {
        source: '/usage/document-store',
        destination: '/components/document-store',
        permanent: true,
      },
      {
        source: '/usage/summarizer',
        destination: '/pipeline_nodes/summarizer',
        permanent: true,
      },
      {
        source: '/usage/intro',
        destination: '/overview/intro',
        permanent: true,
      },
      {
        source: '/usage/optimization',
        destination: '/guides/optimization',
        permanent: true,
      },
      {
        source: '/guides/rest-api',
        destination: '/components/rest-api',
        permanent: true,
      },
      {
        source: '/components/knowledge-graph',
        destination: '/guides/knowledge-graph',
        permanent: true,
      },
      {
        source: '/usage/preprocessing',
        destination: '/pipeline_nodes/preprocessor',
        permanent: true,
      },
      {
        source: '/components/translator',
        destination: '/pipeline_nodes/translator',
        permanent: true,
      },
      {
        source: '/components/query-classifier',
        destination: '/pipeline_nodes/query-classifier',
        permanent: true,
      },
      {
        source: '/usage/ranker',
        destination: '/pipeline_nodes/ranker',
        permanent: true,
      },
      {
        source: '/components/entity-extractor',
        destination: '/pipeline_nodes/entity-extractor',
        permanent: true,
      },
      {
        source: '/components/document-classifier',
        destination: '/pipeline_nodes/document-classifier',
        permanent: true,
      },
      {
        source: '/guides/annotation',
        destination: '/components/annotation',
        permanent: true,
      },
      {
        source: '/usage/languages',
        destination: '/guides/languages',
        permanent: true,
      }
    ]
  },
};
