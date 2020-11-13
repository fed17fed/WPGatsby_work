
import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";
import Taxonomiestwo from "../widgets/taxonomiestwo";

const Contacts = ( props ) => {

	const { data } = props;

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="container wrapper contacts">					
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
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.content,
									} }
								/>
							) : null }
							{ ! isEmpty( data.AcfContact.addressBlock.block1 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfContact.addressBlock.block1,
									} }
								/>
							) : null }
							{ ! isEmpty( data.AcfContact.addressBlock.block2 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfContact.addressBlock.block2,
									} }
								/>
							) : null }
							{ ! isEmpty( data.AcfContact.addressBlock.block3 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfContact.addressBlock.block3,
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

export default Contacts;
