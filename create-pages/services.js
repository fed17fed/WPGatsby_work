const { slash } = require( `gatsby-core-utils` );
const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const singlePageTemplate = require.resolve(`../src/templates/page/index.js`);

// Get all the pages.
const GET_SERVICES = `
query GET_SERVICES {
	HWGraphQL {
		pageBy(pageId: 141) {
		  title
		  content
		  slug
		  id
		  date
		  uri
		  pageId
		  frontPageMetaServices {
			block1
			block2
			block3
		  }
		}
		categories(where: {name: "Сайты и интернет-магазины"}) {
		  edges {
			node {
			  id
			  name
			  slug
			  uri
			}
		  }
		}
		menuItems(where: {location: MENU_1}) {
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

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_SERVICES )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy, categories, menuItems } } = data;

				return { page: pageBy, categories: categories.edges, menuItems: menuItems.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { page, categories, menuItems } ) => {

				createPage( {
					path: `${ page.uri }`,
					component: slash( singlePageTemplate ),
					context: { ...page, categories, menuItems }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );
		

	} )

};
