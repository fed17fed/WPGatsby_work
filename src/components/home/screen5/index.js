import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import ContactHome from './contacthome'

const Screen5 = ( props ) => {

	const { title, subtitle, contText, telephone } = props.data;

	return ! isEmpty( props.data ) ? (
	<div>		
		<div className="container screen5">
        <div className="row screen5-blocks">
            <div className="col-md-6 screen5-blocks">
			  <div className="screen5-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
				{ subtitle ? (
					<p className="screen5-subtitle">
						{ subtitle }
					</p>
				) : null }
                <hr/>
              </div> 
              <div className="screen5-txt">
				{ contText ? (
					<p>{ contText }</p>
				) : null }
				{ telephone ? (
					<a href='tel:380681769645' className="screen5-tel">
						{ telephone }
					</a>
				) : null }
              </div> 
            </div>   
            <div className="col-md-6 screen5-blocks">
              <ContactHome />                  
            </div> 
		  </div>
        </div>  	
	</div>
	) : null;
};

export default Screen5;
