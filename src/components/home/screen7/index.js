import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';

const Screen7 = ( props ) => {

	const { title, subtitle, tekstONas } = props.data;

	return ! isEmpty( props.data ) ? (
	<div>		
		<div className="container screen7">
			<div className="screen7-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
				{ subtitle ? (
					<p className="screen7-subtitle">
						{ subtitle }
					</p>
				) : null }
            </div>    
            <div className="row screen7-blocks">
            { ! isEmpty( tekstONas ) ? (
								<div className="screen7-tekstonas"
									dangerouslySetInnerHTML={ {
										__html: tekstONas,
									} }
								/>
					) : null }                   
            </div> 
		  </div>	
	</div>
	) : null;
};

export default Screen7;
