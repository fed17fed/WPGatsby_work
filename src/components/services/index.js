
import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";
import Taxonomiestwo from "../widgets/taxonomiestwo";

const Services = ( props ) => {

	const { data } = props;

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="container wrapper services">					
					<div className="row">
					    <aside className="col-md-3 aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={data.menuItems} category={data.categories}/>
							<Taxonomiestwo taxonomies={data.menuItemstwo} />
						</aside>
						<section className="col-md-9 serv-cont">							

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

export default Services;
