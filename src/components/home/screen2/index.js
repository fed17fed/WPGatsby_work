import React from 'react';
//import config from '../../../../client-config';
//import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import './style.scss';
//import '../../../images/home/mountain-illustration.png';
//import Img from "gatsby-image";
//import heroDefaultImgUrl from '../../../images/home/mountain-illustration.png';

const Screen2 = ( props ) => {

	const { title, orderButtonBlock2, stagesCreation } = props.data;

	return ! isEmpty( props.data ) ? (
	<div>		
		<div className="container screen2">
			<div className="screen2-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
			</div>	
            <div className="row screen2-blocks">
               {stagesCreation.map((term, index) => (
                <div className="col-md-3 ">    
                    <div className="screen2-block">                    
                        {!isEmpty(term.iconSite.sourceUrl) ? (
                            <div className="screen2-block__icon">
                               <img src={term.iconSite.sourceUrl}
                                    alt={term.iconSite.altText}
                            />  
                            </div>                      
                        ) : null }
                    {term.titleType ? 
                    <div className="screen2-titletype">
                        {term.titleType}
                    </div> 
                    : null }
                    { ! isEmpty( term.descSite ) ? (
								<div className="screen2-descsite"
									dangerouslySetInnerHTML={ {
										__html: term.descSite,
									} }
								/>
					) : null }              
                    </div>
                </div>
            ))}
                <div className="screen2-button">
                 { orderButtonBlock2 ? (
                   <a href="/" className="screen2-but">  
                    { orderButtonBlock2 }
                    </a> 
                 ) : null }   
                </div> 
            </div> 
		  </div>
	</div>
	) : null;
};

export default Screen2;
