//import { normalizePath } from "../../utils/functions";
import FacebookIcon from "../icons/facebook-icon";
import TwitterIcon from "../icons/twitter-icon";
import InstagramIcon from "../icons/instagram-icon";
import YouTubeIcon from "../icons/youtube-icon";
import PropTypes from "prop-types";
import React from "react";

const Footer = ( { data } ) => {
	const { footer: { copyrightText, socialLinks, sidebarOne, sidebarTwo, sidebarThree, sidebarFour } } = data.HWGraphQL;	

	const staticSocialLink = [
		{ iconName: 'facebook', iconUrl: 'https://facebook.com/codeytek'  },
		{ iconName: 'twitter', iconUrl: 'https://twitter.com/codeytek'  },
		{ iconName: 'instagram', iconUrl: 'https://www.instagram.com/codeytek_academy'  },
		{ iconName: 'youtube', iconUrl: 'https://youtube.com/ImranSayedDev'  },
	];

	const socialLinksData = socialLinks.length ? socialLinks : staticSocialLink;

	return (
		<footer className="footer">

			<div className="wrapper">
				{/*Top section*/}				
				<div className="row  footer__top">				  	
					{ sidebarOne ? <div  dangerouslySetInnerHTML={ { __html: sidebarOne } } className="col-md-4 footer__sidebar-one footer-widget"/> : null }
				  <div className="col-md-8  footer2__top">
					{ sidebarTwo ? <div  dangerouslySetInnerHTML={ { __html: sidebarTwo } } className="col-md-3 footer__sidebar-two footer-widget"/> : null }
					{ sidebarOne ? <div  dangerouslySetInnerHTML={ { __html: sidebarThree } } className="col-md-3 footer__sidebar-one footer-widget"/> : null }
					{ sidebarTwo ? <div  dangerouslySetInnerHTML={ { __html: sidebarFour } } className="col-md-3 footer__sidebar-two footer-widget"/> : null }
				  </div>
				</div>

				{/*	Bottom section*/}
				<div className="footer__bottom">
					{ copyrightText ? <div className="copyright-text">{ copyrightText }</div> : <div className="copyright-text">© Copyright WebGenerator 2017</div> }
					{
						socialLinksData.length ?
							<ul className="social-links">
								{ socialLinksData.map( socialLink => (
									<li key={ socialLink.iconName }>
										<a href={ socialLink.iconUrl } target="_blank" rel="noreferrer">
											{ 'facebook' === socialLink.iconName ? <FacebookIcon/> : null }
											{ 'twitter' === socialLink.iconName ? <TwitterIcon/> : null }
											{ 'instagram' === socialLink.iconName ? <InstagramIcon/> : null }
											{ 'youtube' === socialLink.iconName ? <YouTubeIcon/> : null }
										</a>
									</li>
								) ) }
							</ul> :
							null
					}
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
};

Footer.defaultProps = {
	copyrightText: `Codeytek Academy ${ new Date().getFullYear() }`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export {
	Footer
};

