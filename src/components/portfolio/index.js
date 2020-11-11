
import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";
import Taxonomiestwo from "../widgets/taxonomiestwo";

const Portfolio = ( props ) => {

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
							<Taxonomiestwo taxonomies={data.menuItemstwo} />
						</aside>
						<section className="col-md-9">							

							
						</section>						
					</div>
				</div>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Portfolio;
