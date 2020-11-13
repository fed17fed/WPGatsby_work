const { slash } = require( `gatsby-core-utils` );
const aboutPageTemplate = require.resolve(`../src/templates/about_us/index.js`);

// Get all the pages.
const GET_SERVICES = `
query GET_SERVICES {
	HWGraphQL {
		pageBy(pageId: 19) {
		  title
		  content
		  slug
		  id
		  date
		  uri
		  pageId
		  seo {
			title
			metaDesc
		  }		  
		}
		categories(where: {name: "Websites and online stores"}) {
		  edges {
			node {
			  id
			  name
			  slug
			  uri
			}
		  }
		}
		menuItems(where: {location: HCMS_MENU_SIDEBAR, parentId: "6"}) {
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
		menuItemstwo: menuItems(where: {location: HCMS_MENU_TOP, parentId: "9"}) {
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
		allReviews: pageBy(pageId: 13) {
			AcfHome {
			  screen6 {
				title
				subtitle
				reviewsTable {
				  iconSite {
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
				  titleName
				  situation
				  reviewText
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

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_SERVICES )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy, categories, menuItems, menuItemstwo, allReviews } } = data;

				return { page: pageBy, categories: categories.edges, menuItems: menuItems.edges, menuItemstwo: menuItemstwo.edges, allReviews: allReviews.AcfHome.screen6 };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { page, categories, menuItems, menuItemstwo, allReviews } ) => {

				createPage( {
					path: `${ page.uri }`,
					component: slash( aboutPageTemplate ),
					context: { ...page, categories, menuItems, menuItemstwo, allReviews }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );
		

	} )

};
