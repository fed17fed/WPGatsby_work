
import React from 'react';

/* eslint-disable */
import Img from 'gatsby-image';
/* eslint-enable */

import { useStaticQuery, graphql } from "gatsby";
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";

const Page = ( props ) => {

	const { data } = props;

	/* eslint-disable */
	const imgData = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "default/default.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`);
	/* eslint-enable */

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="container wrapper">
					{ ! isEmpty( data.title )  ? (
						<h2>{ data.title }</h2>
					) : null }
					<div className="row">
					    <aside className="col-md-3 aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={data.menuItems} category={data.categories}/>
						</aside>
						<section className="col-md-9">
							{/* Uncomment this if you need featured image to be displayed here*/}
							{ ! isEmpty( data.featuredImage ) ? (
								<Img fluid={data.featuredImage.node.sourceUrlSharp.childImageSharp.fluid} alt={ data.altText ? data.altText : data.title } />
							) :  null }

							{ ! isEmpty( data.content ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.content,
									} }
								/>
							) : null }
							{ ! isEmpty( data.AcfServices.block1 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfServices.block1,
									} }
								/>
							) : null }
							{ ! isEmpty( data.AcfServices.block2 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfServices.block2,
									} }
								/>
							) : null }
							{ ! isEmpty( data.AcfServices.block3 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfServices.block3,
									} }
								/>
							) : null }
						</section>						
					</div>
				</div>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Page;
