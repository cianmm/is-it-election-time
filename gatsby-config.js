module.exports = {
  siteMetadata: {
    title: `Is it General Election time yet?`,
    description: `Ever wondered if it was time for the 2020 General Election? Now you can have your computer tell you!`,
    author: `@cianmm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `is-it-election-time`,
        short_name: `is-it-election-time`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
