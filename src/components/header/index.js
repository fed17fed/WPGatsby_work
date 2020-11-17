/**
 * External dependencies.
 */
//import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/**
 * Internal dependencies.
 */
import SEO from "../seo";
import { Header } from "./header-static";

/**
 * Default Header Component Export.
 *
 * @return {*}
 */
export default ( props ) => {

	return (
		<StaticQuery
			query={ graphql`
				    query HeaderQuery {
				        HWGraphQL {
						    header: getHeader {
						      siteLogoUrl
						      siteTagLine
						      siteTitle
						      favicon
						    }
						    headerMenuItems: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "5"}) {
						      edges {
						        node {						          
						          menuItemId
						          label
								  url
								  path
						          childItems {
						            edges {
						              node {
						                menuItemId
						                label
										url
										path
						              }
						            }
						          }
						        }
						      }
						    }
				        }
				    }
				` }
			render={ data => (
				<>
					<SEO header={ data.HWGraphQL.header }/>
					<Header data={ data }/>
				</>
			) }
		/>
	)
}



Header.defaultProps = {	
	data: {
		HWGraphQL: {}
	},
};
