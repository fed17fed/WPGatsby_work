
import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";
import Taxonomiestwo from "../widgets/taxonomiestwo";
import Screen6 from "../home/screen6";

const Aboutus = ( props ) => {

	const { data } = props;

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="container wrapper">
					
					<div className="row">
					    <aside className="col-md-3 aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={data.menuItems} category={data.categories}/>
							<Taxonomiestwo taxonomies={data.menuItemstwo} />
						</aside>
						<section className="col-md-9">							
						{ ! isEmpty( data.title )  ? (
					  	    <h2>{ data.title }</h2>
					    ) : null }
							{ ! isEmpty( data.content ) ? (
								<div className="about-block"
									dangerouslySetInnerHTML={ {
										__html: data.content,
									} }
								/>
							) : null }							
						</section>						
					</div>
					<section className="section5">
		                <Screen6 data={ data.allReviews }/>	
		            </section>	
				</div>

			) : (
				'Loading...'
			) }
		</>
	);
};

export default Aboutus;
