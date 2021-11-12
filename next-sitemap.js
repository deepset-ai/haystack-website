module.exports = {
    siteUrl: process.env.SITE_URL || 'https://haystack.deepset.ai',
    generateRobotsTxt: true, 
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
    additionalSitemaps: [
      'https://haystack.deepset.ai/server-sitemap.xml', // <==== Add here
    ],
  },
  }