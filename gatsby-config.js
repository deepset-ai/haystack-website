module.exports = {
  siteMetadata: {
    title: `Haystack`,
    titleTemplate: "%s - Qestion Answering",
    siteUrl: `https://haystack.deepset.ai`,
    description: `Haystack enables Question Answering at Scale`,
    author: "deepset",
    twitterUsername: "@deepset_ai",
  },
  plugins: [
    'gatsby-plugin-cname',
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`,
    //`gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        //develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/i18n/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/docs/versions`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/pages/docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: `100`,
              maintainCase: true,
              enableCustomId: true,
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/HaystackIcon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/haystack-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        //exclude: [`/category/*`, `/path/to/page`],
        query: `
          {  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site, allSitePage}) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return `https://haystack.deepset.ai`
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `https://haystack.deepset.ai${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "4561480",
          respectDNT: true,
          productionOnly: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
