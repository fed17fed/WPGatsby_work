import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'gatsby-link';
/**
 * Internal dependencies.
 */
import Nav from './nav';
import './style.scss';
import defaultSiteLogoUrl from '../../images/logowg.png';

const Header = ( { data } ) => {

	const { header: { siteTitle, siteTagLine, siteLogoUrl }, headerMenuItems } = data.HWGraphQL;
	const siteLogoURL = siteLogoUrl ? siteLogoUrl : defaultSiteLogoUrl;	

	return (
		<header className="site-header-container ">
			<div className="site-header container">
				<div className="site-brand">
					<Link to="/">
						<img className="site-brand__logo" src={ siteLogoURL } width="200" height="55"
						     alt="header logo"/>
					</Link>
					<div>
						<h2 className="screen-reader-text site-brand__title">{ siteTitle }</h2>
						<p className="site-brand__description">{ siteTagLine }</p>
					</div>
				</div>                
				<Nav headerMenuItems={ headerMenuItems }/>
			</div>
		</header>
	);
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Header };