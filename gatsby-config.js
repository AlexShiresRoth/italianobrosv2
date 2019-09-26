module.exports = {
  siteMetadata: {
    title: `Italiano Bros. Enterprise`,
    description: `Custom drywall, plaster and architectural concrete services, throughout Long Island and Manhattan`,
    author: `@ASRproductions`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#CEB862`,
        theme_color: `#CEB862`,
        display: `minimal-ui`,
        icon:
          "https://res.cloudinary.com/snackmanproductions/image/upload/v1569460921/italianobros/icons/Knife_vhronj.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
