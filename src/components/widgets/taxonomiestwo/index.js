import React from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'gatsby';
import './style.scss';

const Taxonomiestwo = ( { taxonomies, category } ) => {
    
	if ( isEmpty( taxonomies ) ) {
		return null;
	}
	
	const websitesname = 'Website support and development';	  
	return (
		<div className="taxonomies-widget">
			<h2>{websitesname}</h2>
			<ul className="taxonomies-widget-lists">
				{ taxonomies.map( term => (					 
					<li key={ term.node.menuItemId } className="taxonomies-widget-list">
						<Link to={ term.node.path.replace("-en", "") } className="taxonomies-widget-link">{ term.node.label }</Link>
					</li>
				) ) }
			</ul>
		</div>
	);
};

export default Taxonomiestwo;
