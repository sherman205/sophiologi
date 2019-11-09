module.exports = {
  siteMetadata: {
    title: `Sophiologi`,
    siteUrl: `https://www.sophiologi.com`,
    description: `Personal website`,
    author: `Sophia Sherman`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sophiologi`,
        short_name: `Sophiologi`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
