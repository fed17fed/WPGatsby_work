module.exports = {
	siteMetadata: {
		title: "Olympweb Webgenerator",
		titleTemplate: "%s · Olympweb",
		description:
		  "Turnkey website development.",
		url: "https://optimistic-cray-9639bf.netlify.app/", // No trailing slash allowed!
		image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
		twitterUsername: "@occlumency",
	  },	
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Turnkey website development`,
				short_name: `Olympweb`,
				start_url: `/`,
				background_color: `#eaeaea`,
				theme_color: `#1e5663`,
				display: `minimal-ui`,
				icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `hwgraphql`,
				// This is field under which it's accessible
				fieldName: `HWGraphQL`,
				// Url to query from
				url: `https://qwpwg.wg-al.site/graphql`,
				refetchInterval: 6000,
			},
		},
		{
			resolve: 'gatsby-plugin-graphql-image',
			options: {
				schemaName: "hwgraphql",
				imageFieldName: "sourceUrl"
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
}
