const createAllPages = require( './create-pages/pages' );
const createAboutus = require( './create-pages/about_us' );
const createContacts = require( './create-pages/contacts' );
const createPortfolio = require( './create-pages/portfolio' );
const createServices = require( './create-pages/services' );
//const createServicesen = require( './create-pages/services_en' );
const createAllPosts = require( './create-pages/posts' );
//const createAllPostsen = require( './create-pages/posts_en' );
const createFrontPage = require( './create-pages/front-page' );
//const createFrontPageen = require( './create-pages/front-page_en' );
const createBlogPage = require( './create-pages/blog' );
const createArchivePage = require( './create-pages/archive' );
const path = require( 'path' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {	
	await createAllPages( { actions, graphql } );
	await createAboutus( { actions, graphql } );
	await createContacts( { actions, graphql } );
	await createPortfolio( { actions, graphql } );
	await createServices( { actions, graphql } );
	//await createServicesen( { actions, graphql } );
	await createAllPosts( { actions, graphql } );
	//await createAllPostsen( { actions, graphql } );
	await createFrontPage( { actions, graphql } );
	//await createFrontPageen( { actions, graphql } );
	await createBlogPage( { actions, graphql } );
	await createArchivePage( { actions, graphql } );
};

/**
 * Since the node_modules ( packages ) live outside the theme directory, making an alias for them.
 *
 * So Gutenberg styles can be accessed like so `@import "~@wordpress/base-styles/colors"`
 *
 * @param stage
 * @param actions
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../../node_modules')
			}
		},
	})
};
