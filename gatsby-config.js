/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Devsvalley",
    author: "Devsvalley",
    email: "devsvalley.xvi@gmail.com",
    socials: {
      twitter: "https://twitter.com/devsvalley",
      github: "https://github.com/devs-valley",
      gitlab: "https://gitlab.com/devsvalley",
      bitbucket: "https://bitbucket.com/devsvalley",
    },
    siteUrl: "https://devsvalley.com",
    description: "Blazing fast modern site generator for React",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // postCssPlugins: [somePostCssPlugin()],
        // precision: 6,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },
  ],
}
