import Taxonomies from "../widgets/taxonomies";
import React from "react";
import { isEmpty } from 'lodash';
import './style.scss';
import Img from 'gatsby-image';

const Single = ( { data } ) => {

	if ( isEmpty( data ) ) {
		return null;
	}

	const { id, postId, title, content, featuredImage, menuItems } = data;

	return (
		<div className="post-container wrapper">
			<div className="entry-header">
				<h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
			</div>
			<div className="row">
			    <aside className="col-md-3 aside">
					{/* Taxonomy Widget */}
					<Taxonomies taxonomies={ menuItems }/>
				</aside>
				<article
					data-id={id}
					id={`post-${postId}`}
					className={`post-${postId} col-md-9 post-content`}
				>

					{/* Featured Image */}
					{ ( undefined !== featuredImage && null !== featuredImage ) ? <Img fluid={featuredImage.node.sourceUrlSharp.childImageSharp.fluid} alt={ featuredImage.altText } />  : null }

					<div
						className="entry-content"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					{/* .entry-content */}
				</article>
				
			</div>
		</div>
	)
};

export default Single;
