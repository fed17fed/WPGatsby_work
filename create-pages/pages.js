const { slash } = require( `gatsby-core-utils` );
//const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const singlePageTemplate = require.resolve(`../src/templates/page/index.js`);

// Get all the pages.
const GET_PAGES = `
query GET_PAGES {
  HWGraphQL {
    pages( first: 5000, where: {parent: "21"} ) {
      nodes {
        id
        title
        content
		date
		slug
		uri
		AcfRubricServices {
			blok2
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
	 menuItems(where: {location: HCMS_MENU_TOP, parentId: "9"}) {
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
		return await graphql( GET_PAGES )
			.then( ( { data } ) => {

				const { HWGraphQL: { pages, categories, menuItems } } = data;

				return { pages: pages.nodes , categories: categories.edges, menuItems: menuItems.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { pages, categories, menuItems } ) => {

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( ( page ) => {

			// If its not a custom template, create the page.			

				let pageuri = page.slug;				
				pageuri = pageuri.replace("-en", "");

				createPage( {
					path: `${ page.uri }`,
					component: slash( singlePageTemplate ),
					context: { ...page, categories, menuItems }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );

			

		} );

	} )

};
