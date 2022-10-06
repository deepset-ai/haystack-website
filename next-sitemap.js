module.exports = {
    siteUrl: process.env.SITE_URL || 'https://haystack.deepset.ai',
    generateRobotsTxt: true, 
    exclude: ['/tutorials/v*','/overview/v*', '/overview/glossary', '/overview/faq', '/overview/migration', '/overview/installation', '/overview/telemetry', '/components/*', '/usage/*', '/reference/*', '/guides/*', '/pipeline_nodes/*', '/benchmarks/v*', '/docs/'],
    robotsTxtOptions: {
      policies: [
                 { userAgent: "*", disallow:['/tutorials/v*','/overview/v*', '/overview/glossary', '/overview/faq', '/overview/migration', '/overview/installation', '/overview/telemetry', '/components/*', '/usage/*', '/reference/*', '/guides/*', '/pipeline_nodes/*', '/benchmarks/v*', '/docs/']},
        ]
  }
}