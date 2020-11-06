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
		  featuredImage {
			node {
			  altText
			  sourceUrl
			  sourceUrlSharp {
				childImageSharp {
				  fluid(maxWidth: 1920) {
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
		  AcfHome {
			screen1 {
			  title
			  subtitle
			  orderButtonBlock1
			  siteType {
				titleType
				iconSite {
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
				nameSite {
				  site1
				  site2
				}
			  }
			}
			screen2 {
			  title
			  orderButtonBlock2
			  stagesCreation {
				titleType
				descSite
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
			  }
			}
			screen3 {
			  title
			  subtitle
			  siteType {
				titleType
				nameSite
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
						srcWebp
						srcSetWebp
					  }
					}
				  }
				}
			  }
			}
			screen5 {
				title
				subtitle
				contText
				telephone
			}
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
			  screen7 {
				title
				subtitle
				tekstONas
			  }
			  screen8 {
				client {
				  images {
					altText
					sourceUrl
					sourceUrlSharp {
					  childImageSharp {
						fluid(maxWidth: 185) {
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
	  }
   }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy } } = data;				

				return { page: pageBy };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {  

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: { page	},
		} );

	} )

};

