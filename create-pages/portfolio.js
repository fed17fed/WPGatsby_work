const { slash } = require( `gatsby-core-utils` );
const portfolioPageTemplate = require.resolve(`../src/templates/portfolio/index.js`);

// Get all the pages.
const GET_SERVICES = `
query GET_SERVICES {
	HWGraphQL {
		pageBy(pageId: 17) {
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
		allPortfolio: pageBy(pageId: 13) {
			AcfHome {
				screen4 {
					title
					subtitle
					seeAll
					orderButtonBlock1
					siteType {
					  nameSiteType1
					  nameSiteType2
					  nameSiteType3
					  nameSiteType4
					  businessCardwebsite {
						nameSite  
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
					  corporateWebsites {
						images {
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
								srcSetWebp
								srcWebp
							  }
							}
						  }
						}
					  }
					  landPage {
						images {
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
								srcSetWebp
								srcWebp
							  }
							}
						  }
						}
					  }
					  onlineShops {
						images {
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

				const { HWGraphQL: { pageBy, categories, menuItems, menuItemstwo, allPortfolio } } = data;

				return { page: pageBy, categories: categories.edges, menuItems: menuItems.edges, menuItemstwo: menuItemstwo.edges, allPortfolio: allPortfolio.AcfHome.screen4 };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { page, categories, menuItems, menuItemstwo, allPortfolio } ) => {

				createPage( {
					path: `${ page.uri }`,
					component: slash( portfolioPageTemplate ),
					context: { ...page, categories, menuItems, menuItemstwo, allPortfolio }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );
		

	} )

};
