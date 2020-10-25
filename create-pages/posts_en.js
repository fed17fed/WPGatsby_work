const { slash } = require( `gatsby-core-utils` );
const singlePostPageTemplate = require.resolve(`../src/templates/post/index.js`);

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
    HWGraphQL {
        posts(first: 5000, where: {language: EN}) {
          nodes {
            id
            title
            excerpt
            content
            date
            slug
            uri
            featuredImage {
              node {
                altText
                sourceUrl
                sourceUrlSharp {
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
        }
        categories(first: 5, where: {language: EN}) {
          edges {
            node {
              id
              name
              slug
              uri
            }
          }
        }
        menuItems(where: {location: MENU_1___EN}) {
          edges {
            node {
              id
              menuItemId
              label
              url
              path
            }
          }
        }
      }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {

				const { HWGraphQL: { posts, categories, menuItems } } = data;

				return { posts: posts.nodes, categories: categories.edges, menuItems: menuItems.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts, categories, menuItems } ) => {

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( ( page ) => {

			let pageuri = page.uri;				
				pageuri = pageuri.replace("-en", "");			

			createPage( {
				path: `${ pageuri }`,
				component: slash( singlePostPageTemplate ),
				context: { ...page, categories, menuItems }, // pass single post page data in context, so its available in the singlePagetTemplate in props.pageContext.
			} );

		} );

	} )

};
