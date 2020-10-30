import React from 'react';
//import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import './style.scss';
import '../../../images/home/mountain-illustration.png';
import Img from "gatsby-image";
import heroDefaultImgUrl from '../../../images/home/mountain-illustration.png';

const Hero = ( props ) => {

	const {  content, featuredImage } = props.data;

	return ! isEmpty( props.data ) ? (
	<div>
		<div className="hero-right">
				{ ! isEmpty( featuredImage ) ? (
					<Img fluid={ featuredImage.node.sourceUrlSharp.childImageSharp.fluid } alt={ featuredImage.node.altText ? featuredImage.node.altText : 'Banner' } />
				) : (
					<img src={ heroDefaultImgUrl } alt="Hero" />
				) }
		</div>
		<div className="hero-section wrapper">
			<div className="hero-buton">				
				{ isEmpty( content ) ? (
					<Link to="/blog/">
						<button className="button-secondary">{ content }</button>
					</Link>
				) : null }
			</div>			
		</div>
	</div>
	) : (
		''
	);
};

export default Hero;
