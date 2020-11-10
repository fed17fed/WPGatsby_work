const { slash } = require( `gatsby-core-utils` );
const singlePostPageTemplate = require.resolve(`../src/templates/post/index.js`);

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
  HWGraphQL {
    posts(first: 5000, where: {categoryId: 2}) {
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
                fluid(maxWidth: 1920) {
                  base64
                  aspectRatio
                  src
                  srcSet
				  sizes
				  srcWebp
                  srcSetWebp
                }
              }
		    }
		  }
		}
		AcfRubricSites {
			titlePortfolio
			subtitlePortfolio
			title
			subtitle
			text
			textBottom
			button
			butoonSee
			tab1 {
			  title
			  text
			  button
			}
			tab2 {
			  title
			  text
			  button
			}
			blockExample {
			  title
			  images {
				altText
				sourceUrl
				sourceUrlSharp {
				  childImageSharp {
					fluid {
					  base64
					  aspectRatio
					  srcSet
					  src
					  sizes
					  srcSetWebp
					  srcWebp
					}
				  }
				}
			  }
			}
		} 
      }
    }
    categories(first: 5) {
	    edges {
	      node {
	        id
	        name
	        slug
	        uri
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

				const { HWGraphQL: { posts, categories } } = data;

				return { posts: posts.nodes, categories: categories.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts, categories} ) => {

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( ( page ) => {

			let pageuri = page.uri;				
				pageuri = pageuri.replace("-en", "");			

			createPage( {
				path: `${ pageuri }`,
				component: slash( singlePostPageTemplate ),
				context: { ...page, categories }, // pass single post page data in context, so its available in the singlePagetTemplate in props.pageContext.
			} );

		} );

	} )

};
