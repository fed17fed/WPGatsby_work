import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Popapp from '../../popapp';

const Screen1 = ( props ) => {

	const { title, subtitle, siteType } = props.data;

	return ! isEmpty( props.data ) ? (
	<div>		
		<div className="container screen1">
			<div className="screen1-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
				{ subtitle ? (
					<p className="screen1-subtitle">
						{ subtitle }
					</p>
				) : null }
            </div>    
            <div className="row screen1-blocks">
               {siteType.map((term, index) => (
                <div className="col-md-4 ">    
                    <div className="screen1-block">                    
                        {!isEmpty(term.iconSite.sourceUrl) ? (
                            <div className="screen1-block__icon">
                               <img src={term.iconSite.sourceUrl}
                                    alt={term.iconSite.altText}
                            />  
                            </div>                      
                        ) : null }
                    {term.titleType ? 
                    <div className="screen1-titletype">
                        {term.titleType}
                    </div> 
                    : null }
                    {term.nameSite.site1 ? 
                    <div className="screen1-site1">
                        {term.nameSite.site1}
                    </div> 
                    : null }
                    {term.nameSite.site2 ? 
                    <div className="screen1-site1">
                        {term.nameSite.site2}
                    </div> 
                    : null }                    
                    </div>
                </div>
            ))}
                <div id='modalbuton' className="screen1-button">
                    <Popapp namebutton='Order a consultation'/>                   
                </div>                    
            </div> 
		  </div>	
	</div>
	) : null;
};

export default Screen1;
