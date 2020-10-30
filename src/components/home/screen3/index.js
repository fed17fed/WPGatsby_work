import React from 'react';
//import config from '../../../../client-config';
//import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import './style.scss';
//import '../../../images/home/mountain-illustration.png';
//import Img from "gatsby-image";
//import heroDefaultImgUrl from '../../../images/home/mountain-illustration.png';

const Screen3 = ( props ) => {

	const { title, subtitle, siteType } = props.data;

	return ! isEmpty( props.data ) ? (
	<div>		
		<div className="container screen3">
			<div className="screen3-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
                { subtitle ? (
					<p className="screen3-subtitle">
						{ subtitle }
					</p>
				) : null }
			</div>	
            <div className="row screen3-blocks">
               {siteType.map((term, index) => (
                <div className="col-md-4 ">    
                    <div className="screen3-block">                    
                        {!isEmpty(term.iconSite.sourceUrl) ? (
                            <div className="screen3-block__icon">
                               <img src={term.iconSite.sourceUrl}
                                    alt={term.iconSite.altText}
                            />  
                            </div>                      
                        ) : null }
                    {term.titleType ? 
                    <div className="screen3-titletype">
                        {term.titleType}
                    </div> 
                    : null }
                    {term.nameSite ? 
                    <div className="screen3-namesite">
                        {term.nameSite}
                    </div> 
                    : null }          
                    </div>
                </div>
            ))}                
            </div> 
		  </div>
	</div>
	) : null;
};

export default Screen3;
