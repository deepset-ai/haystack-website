module.exports = {
    siteUrl: process.env.SITE_URL || 'https://haystack.deepset.ai',
    generateRobotsTxt: true, 
    exclude: ['/tutorials/v*','/overview/v*', '/components/v*', '/usage/*', '/reference/v*', '/guides/v*', '/pipeline_nodes/v*', '/benchmarks/v*'],
    robotsTxtOptions: {
      policies: [
                 { userAgent: "*", disallow:['/tutorials/v*','/overview/v*', '/components/v*', '/usage/*', '/reference/v*', '/guides/v*', '/pipeline_nodes/v*', '/benchmarks/v*']},
        ]
  }
  }