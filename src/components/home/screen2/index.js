import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Popapp from '../../popapp';

const Screen2 = ( props ) => {

	const { title, stagesCreation } = props.data;

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
                <Popapp namebutton='Order a website'/>  
                </div> 
            </div> 
		  </div>
	</div>
	) : null;
};

export default Screen2;
