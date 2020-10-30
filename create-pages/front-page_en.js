const { slash } = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve(`../src/templates/front-page/index.js`);

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
	HWGraphQL {
		pageBy(pageId: 13) {
		  title
		  content
		  uri
		  AcfHome {
			screen1 {
			  title
			  subtitle
			  orderButtonBlock1
			  siteType {
				iconSite {
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
				nameSite {
				  site1
				  site2
				}
			  }
			}
		  }
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
		posts(first: 3) {
		  nodes {
			id
			title
			excerpt
			date
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
		allPosts: posts( first: 5000 ) {
			nodes {
			  id
			  title
			  excerpt
			  content
			  date
			  uri	        
			  categories {
				edges {
				  node {
					name
				  }
				}
			  }
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
	  }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy, posts, allPosts } } = data;

				let allThePosts = [];
				allPosts.nodes && allPosts.nodes.map( post => {					

				

					// Push the categories data in form of an array, to make it searchable
					let postData = post;
					postData.categoriesData = [];

					postData.categories.edges.map( category => {
						postData.categoriesData.push( category.node.name );
					} );

					allThePosts.push( postData );

				} );

				return { page: pageBy, posts: posts.nodes, allPosts: allThePosts };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page, posts, allPosts } ) => {  

		createPage( {
			path: `/en/`,
			component: slash( frontPageTemplate ),
			context: {
				page,
				posts,
				postSearchData: {
					allPosts: allPosts,
					options: {
						indexStrategy: `Prefix match`,
						searchSanitizer: `Lower Case`,
						TitleIndex: true,
						AuthorIndex: true,
						CategoryIndex: true,
						SearchByTerm: true,
					},
				},
			},
		} );

	} )

};

