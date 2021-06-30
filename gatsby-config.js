/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config();

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `@imgix/gatsby`,
      options: {
        domain: "sherwinski-contentful-wf.imgix.net",
        defaultImgixParams: { auto: ["compress", "format"] },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
  ],
};
