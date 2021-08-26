module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  async rewrites() {
    return [
      {
        source: '/docs/intromd',
        destination: '/overview/intro',
      },
      {
        source: '/docs/latest/get_startedmd',
        destination: '/overview/get-started',
      },
      {
        source: '/docs/latest/use_casesmd',
        destination: '/overview/use-cases',
      },
      {
        source: '/docs/latest/roadmapmd',
        destination: '/overview/roadmap',
      },
      {
        source: '/docs/latest/faqmd',
        destination: '/overview/faq',
      },
      {
        source: '/docs/latest/termsmd',
        destination: '/overview/glossary',
      },
      {
        source: '/docs/latest/preprocessingmd',
        destination: '/usage/preprocessing',
      },
      {
        source: '/docs/latest/pipelinesmd',
        destination: '/usage/pipelines',
      },
      {
        source: '/docs/latest/documentstoremd',
        destination: '/usage/document-store',
      },
      {
        source: '/docs/latest/retrievermd',
        destination: '/usage/retriever',
      },
      {
        source: '/docs/latest/readermd',
        destination: '/usage/reader',
      },
      {
        source: '/docs/latest/generatormd',
        destination: '/usage/generator',
      },
      {
        source: '/docs/latest/summarizermd',
        destination: '/usage/summarizer',
      },
      {
        source: '/docs/latest/translatormd',
        destination: '/usage/translator',
      },
      {
        source: '/docs/latest/knowledgegraphmd',
        destination: '/usage/knowledge-graph',
      },
      {
        source: '/docs/latest/languagesmd',
        destination: '/usage/languages',
      },
      {
        source: '/docs/latest/omain_adaptationmd',
        destination: '/usage/domain-adaptation',
      },
      {
        source: '/docs/latest/optimizationmd',
        destination: '/usage/optimization',
      },
      {
        source: '/docs/latest/annotationmd',
        destination: '/usage/annotation',
      },
      {
        source: '/docs/latest/rankermd',
        destination: '/usage/ranker',
      },
      {
        source: '/docs/latest/query_classifiermd',
        destination: '/usage/query-classifier',
      },
      {
        source: '/docs/latest/tutorial1md',
        destination: '/tutorials/first-qa-system',
      },
      {
        source: '/docs/latest/tutorial2md',
        destination: '/tutorials/fine-tuning-a-model',
      },
      {
        source: '/docs/latest/tutorial3md',
        destination: '/tutorials/without-elasticsearch',
      },
      {
        source: '/docs/latest/tutorial4md',
        destination: '/tutorials/existing-faqs',
      },
      {
        source: '/docs/latest/tutorial5md',
        destination: '/tutorials/evaluation',
      },
      {
        source: '/docs/latest/tutorial6md',
        destination: '/tutorials/dense-passage-retrieval',
      },
      {
        source: '/docs/latest/tutorial7md',
        destination: '/tutorials/retrieval-augmented-generation',
      },
      {
        source: '/docs/latest/tutorial8md',
        destination: '/tutorials/preprocessing',
      },
      {
        source: '/docs/latest/tutorial9md',
        destination: '/tutorials/train-dpr',
      },
      {
        source: '/docs/latest/tutorial10md',
        destination: '/tutorials/knowledge-graph',
      },
      {
        source: '/docs/latest/tutorial11md',
        destination: '/tutorials/pipelines',
      },
      {
        source: '/docs/latest/tutorial12md',
        destination: '/tutorials/lfqa',
      },
      {
        source: '/docs/latest/apidatabasemd',
        destination: '/reference/document-store',
      },
      {
        source: '/docs/latest/apiretrievermd',
        destination: '/reference/retriever',
      },
      {
        source: '/docs/latest/apireadermd',
        destination: '/reference/reader',
      },
      {
        source: '/docs/latest/apigeneratormd',
        destination: '/reference/generator',
      },
      {
        source: '/docs/latest/apisummarizermd',
        destination: '/reference/summarizer',
      },
      {
        source: '/docs/latest/apitranslatormd',
        destination: '/reference/translator',
      },
      {
        source: '/docs/latest/apiindexingmd',
        destination: '/reference/preprocessor',
      },
      {
        source: '/docs/latest/file_convertersmd',
        destination: '/reference/file-converters',
      },
      {
        source: '/docs/latest/apicrawlermd',
        destination: '/reference/crawler',
      },
      {
        source: '/docs/latest/apievaluationmd',
        destination: '/reference/evaluation',
      },
      {
        source: '/docs/latest/apipipelinesmd',
        destination: '/reference/pipelines',
      },
      {
        source: '/docs/latest/apiknowledgegraphmd',
        destination: '/reference/knowledge-graph',
      },
      {
        source: '/docs/latest/apigraphretrievermd',
        destination: '/reference/graph-retriever',
      },
      {
        source: '/bm/benchmarks',
        destination: '/benchmarks/v0.9.0',
      },
    ]
  },
};
