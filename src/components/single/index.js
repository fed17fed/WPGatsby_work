import React from "react";
import { isEmpty } from 'lodash';
import './style.scss';
import Img from 'gatsby-image';
import Popapp from '../popapp';

const Single = ( { data } ) => {

	if ( isEmpty( data ) ) {
		return null;
	}
    
	const { id, postId, title, featuredImage, AcfRubricSites } = data;

	return (
		<div className="post-container">
			<div className="post-img">
			{/* Featured Image */}
			{ ( undefined !== featuredImage && null !== featuredImage ) ? <Img fluid={featuredImage.node.sourceUrlSharp.childImageSharp.fluid} alt={ featuredImage.altText } />  : null }
			<div className="container">
			    <div className="entry-header">
				   <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
				   <Popapp namebutton='Order a website'/>
			    </div> 
			</div>   		
			    <div className="post-img__masck"></div>
			</div>
		  <div className="wrapper">	
				<article
					data-id={id}
					id={`post-${postId}`}
					className={`post-${postId} post-content`}>
					{/* .entry-content */}					
					{ ! isEmpty( AcfRubricSites.title )  ? (
						<div className="wrapper">
						   { AcfRubricSites.title }
						</div>
					) : null }
					{ ! isEmpty( AcfRubricSites.subtitle )  ? (
						<div className="wrapper">
						   { AcfRubricSites.subtitle }
						</div>
					) : null }
					{ ! isEmpty( AcfRubricSites.text )  ? (
						<div className="wrapper" dangerouslySetInnerHTML={{ __html: AcfRubricSites.text }} />						
					) : null }
					{ ! isEmpty( AcfRubricSites.button )  ? (
						<div className="wrapper">
						   { AcfRubricSites.button }
						</div>
					) : null }
					
				</article>
		  </div>
		</div>
	)
};

export default Single;
