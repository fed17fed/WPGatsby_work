/**
 * External dependencies.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/**
 * Internal dependencies.
 */
import SEO from "../seo";
import { HeaderEn } from "./header-static";

/**
 * Default Header Component Export.
 *
 * @return {*}
 */
export default ( props ) => {

	return (
		<StaticQuery
			query={ graphql`
				    query HeaderEnQuery {
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
						          id
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
					<SEO title="Phoenix: Gatsby WordPress Theme" header={ data.HWGraphQL.header }/>
					<HeaderEn data={ data }/>
				</>
			) }
		/>
	)
}

HeaderEn.propTypes = {
	siteTitle: PropTypes.string,
};

HeaderEn.defaultProps = {
	siteTitle: 'Phoenix: Gatsby WordPress Theme',
	data: {
		HWGraphQL: {}
	},
};
