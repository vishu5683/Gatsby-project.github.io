/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//     siteMetadata: {
//       title: `Gatsby Default Starter`,
//       description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//       author: `@gatsbyjs`,
//       siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//     },
//     plugins: [
//       `gatsby-plugin-image`,
     
//       `gatsby-transformer-sharp`,
//       `gatsby-plugin-sharp`,
//       {
//         resolve: `gatsby-plugin-manifest`,
//         options: {
//           name: `gatsby-starter-default`,
//           short_name: `starter`,
//           start_url: `/`,
//           background_color: `#663399`,
//           // This will impact how browsers show your PWA/website
//           // https://css-tricks.com/meta-theme-color-and-trickery/
//           // theme_color: `#663399`,
//           display: `minimal-ui`,
//           icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//         },
//       },
//     ],
//   }

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/screens`,
      },
      
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     // The unique name for each instance
    //     name: `pages`,
    //     // Path to the directory
    //     path: `${__dirname}/src/components`,
    //   },
    // },
    
  ],
  
}

 