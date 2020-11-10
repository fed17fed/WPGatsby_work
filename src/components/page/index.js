import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";

const Page = ( props ) => {

	const { data } = props;

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
							{ ! isEmpty( data.content ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.content,
									} }
								/>
							) : null }							
							{ ! isEmpty( data.AcfRubricServices.block2 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfRubricServices.block2,
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
