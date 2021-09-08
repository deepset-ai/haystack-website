module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/intromd",
        destination: "/overview/intro",
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
        destination: "/usage/preprocessing",
      },
      {
        source: "/docs/latest/pipelinesmd",
        destination: "/usage/pipelines",
      },
      {
        source: "/docs/latest/documentstoremd",
        destination: "/usage/document-store",
      },
      {
        source: "/docs/latest/retrievermd",
        destination: "/usage/retriever",
      },
      {
        source: "/docs/latest/readermd",
        destination: "/usage/reader",
      },
      {
        source: "/docs/latest/generatormd",
        destination: "/usage/generator",
      },
      {
        source: "/docs/latest/summarizermd",
        destination: "/usage/summarizer",
      },
      {
        source: "/docs/latest/translatormd",
        destination: "/usage/translator",
      },
      {
        source: "/docs/latest/knowledgegraphmd",
        destination: "/usage/knowledge-graph",
      },
      {
        source: "/docs/latest/languagesmd",
        destination: "/usage/languages",
      },
      {
        source: "/docs/latest/omain_adaptationmd",
        destination: "/usage/domain-adaptation",
      },
      {
        source: "/docs/latest/optimizationmd",
        destination: "/usage/optimization",
      },
      {
        source: "/docs/latest/annotationmd",
        destination: "/usage/annotation",
      },
      {
        source: "/docs/latest/rankermd",
        destination: "/usage/ranker",
      },
      {
        source: "/docs/latest/query_classifiermd",
        destination: "/usage/query-classifier",
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
        source: "/docs/latest/apiknowledgegraphmd",
        destination: "/reference/knowledge-graph",
      },
      {
        source: "/docs/latest/apigraphretrievermd",
        destination: "/reference/graph-retriever",
      },
      {
        source: '/bm/benchmarks/',
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
        source: '/docs/v0.9.0/omain_adaptationmd',
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
        source: '/docs/v0.9.0/query_classifiermd',
        destination: '/usage/v0.9.0/query-classifier',
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
        source: '/docs/v0.8.0/knowledgegraphmd',
        destination: '/usage/v0.8.0/knowledge-graph',
      },
      {
        source: '/docs/v0.8.0/languagesmd',
        destination: '/usage/v0.8.0/languages',
      },
      {
        source: '/docs/v0.8.0/omain_adaptationmd',
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
        source: '/docs/v0.8.0/tutorial11md',
        destination: '/tutorials/v0.8.0/pipelines',
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
        source: '/docs/v0.8.0/apiknowledgegraphmd',
        destination: '/reference/v0.8.0/knowledge-graph',
      },
      {
        source: '/docs/v0.8.0/apigraphretrievermd',
        destination: '/reference/v0.8.0/graph-retriever',
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
        source: '/docs/v0.7.0/translatormd',
        destination: '/usage/v0.7.0/translator',
      },
      {
        source: '/docs/v0.7.0/knowledgegraphmd',
        destination: '/usage/v0.7.0/knowledge-graph',
      },
      {
        source: '/docs/v0.7.0/languagesmd',
        destination: '/usage/v0.7.0/languages',
      },
      {
        source: '/docs/v0.7.0/omain_adaptationmd',
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
        source: '/docs/v0.7.0/rankermd',
        destination: '/usage/v0.7.0/ranker',
      },
      {
        source: '/docs/v0.7.0/query_classifiermd',
        destination: '/usage/v0.7.0/query-classifier',
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
        source: '/docs/v0.7.0/tutorial10md',
        destination: '/tutorials/v0.7.0/knowledge-graph',
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
        source: '/docs/v0.7.0/apitranslatormd',
        destination: '/reference/v0.7.0/translator',
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
        source: '/docs/v0.7.0/apievaluationmd',
        destination: '/reference/v0.7.0/evaluation',
      },
      {
        source: '/docs/v0.7.0/apipipelinesmd',
        destination: '/reference/v0.7.0/pipelines',
      },
      {
        source: '/docs/v0.7.0/apiknowledgegraphmd',
        destination: '/reference/v0.7.0/knowledge-graph',
      },
      {
        source: '/docs/v0.7.0/apigraphretrievermd',
        destination: '/reference/v0.7.0/graph-retriever',
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
        source: '/docs/v0.6.0/summarizermd',
        destination: '/usage/v0.6.0/summarizer',
      },
      {
        source: '/docs/v0.6.0/translatormd',
        destination: '/usage/v0.6.0/translator',
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
        source: '/docs/v0.6.0/omain_adaptationmd',
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
        source: '/docs/v0.6.0/tutorial8md',
        destination: '/tutorials/v0.6.0/preprocessing',
      },
      {
        source: '/docs/v0.6.0/tutorial9md',
        destination: '/tutorials/v0.6.0/train-dpr',
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
        source: '/docs/v0.6.0/apisummarizermd',
        destination: '/reference/v0.6.0/summarizer',
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
        source: '/docs/v0.6.0/apigraphretrievermd',
        destination: '/reference/v0.6.0/graph-retriever',
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
        source: '/docs/v0.5.0/pipelinesmd',
        destination: '/usage/v0.5.0/pipelines',
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
        source: '/docs/v0.5.0/generatormd',
        destination: '/usage/v0.5.0/generator',
      },
      {
        source: '/docs/v0.5.0/summarizermd',
        destination: '/usage/v0.5.0/summarizer',
      },
      {
        source: '/docs/v0.5.0/translatormd',
        destination: '/usage/v0.5.0/translator',
      },
      {
        source: '/docs/v0.5.0/knowledgegraphmd',
        destination: '/usage/v0.5.0/knowledge-graph',
      },
      {
        source: '/docs/v0.5.0/languagesmd',
        destination: '/usage/v0.5.0/languages',
      },
      {
        source: '/docs/v0.5.0/omain_adaptationmd',
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
        source: '/docs/v0.5.0/tutorial10md',
        destination: '/tutorials/v0.5.0/knowledge-graph',
      },
      {
        source: '/docs/v0.5.0/tutorial11md',
        destination: '/tutorials/v0.5.0/pipelines',
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
        source: '/docs/v0.5.0/apigeneratormd',
        destination: '/reference/v0.5.0/generator',
      },
      {
        source: '/docs/v0.5.0/apisummarizermd',
        destination: '/reference/v0.5.0/summarizer',
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
        source: '/docs/v0.5.0/apipipelinesmd',
        destination: '/reference/v0.5.0/pipelines',
      },
      {
        source: '/docs/v0.5.0/apiknowledgegraphmd',
        destination: '/reference/v0.5.0/knowledge-graph',
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
        source: '/docs/v0.4.0/pipelinesmd',
        destination: '/usage/v0.4.0/pipelines',
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
        source: '/docs/v0.4.0/summarizermd',
        destination: '/usage/v0.4.0/summarizer',
      },
      {
        source: '/docs/v0.4.0/translatormd',
        destination: '/usage/v0.4.0/translator',
      },
      {
        source: '/docs/v0.4.0/knowledgegraphmd',
        destination: '/usage/v0.4.0/knowledge-graph',
      },
      {
        source: '/docs/v0.4.0/languagesmd',
        destination: '/usage/v0.4.0/languages',
      },
      {
        source: '/docs/v0.4.0/omain_adaptationmd',
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
        source: '/docs/v0.4.0/rankermd',
        destination: '/usage/v0.4.0/ranker',
      },
      {
        source: '/docs/v0.4.0/query_classifiermd',
        destination: '/usage/v0.4.0/query-classifier',
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
        source: '/docs/v0.4.0/tutorial8md',
        destination: '/tutorials/v0.4.0/preprocessing',
      },
      {
        source: '/docs/v0.4.0/tutorial9md',
        destination: '/tutorials/v0.4.0/train-dpr',
      },
      {
        source: '/docs/v0.4.0/tutorial10md',
        destination: '/tutorials/v0.4.0/knowledge-graph',
      },
      {
        source: '/docs/v0.4.0/tutorial11md',
        destination: '/tutorials/v0.4.0/pipelines',
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
        source: '/docs/v0.4.0/apisummarizermd',
        destination: '/reference/v0.4.0/summarizer',
      },
      {
        source: '/docs/v0.4.0/apitranslatormd',
        destination: '/reference/v0.4.0/translator',
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
        source: '/docs/v0.4.0/apipipelinesmd',
        destination: '/reference/v0.4.0/pipelines',
      },
      {
        source: '/docs/v0.4.0/apiknowledgegraphmd',
        destination: '/reference/v0.4.0/knowledge-graph',
      },
      {
        source: '/docs/v0.4.0/apigraphretrievermd',
        destination: '/reference/v0.4.0/graph-retriever',
      },
    ];
  },
};
