import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Slider from "react-slick";
import Img from "gatsby-image";

const Screen6 = ( props ) => {

  const { title, subtitle, reviewsTable } = props.data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

	return ! isEmpty( props.data ) ? (
	<div>
		<div className="container screen6">
			<div className="screen6-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
				{ subtitle ? (
					<p className="screen6-subtitle">
						{ subtitle }
					</p>
				) : null }                
      </div>
      <div className="screen6-blocks">            
              <div className="screen6-slider">
                <Slider {...settings}>
                  {reviewsTable.map((term, index) => (                   
                    <div className="screen6-block">
                      <div className="screen6-block__show">               
                        {!isEmpty(term.iconSite) ? (
                          <div className="block6-img">                      
                               <Img fluid={ term.iconSite.sourceUrlSharp.childImageSharp.fluid }
                                    alt={term.iconSite.altText}
                               />                               		     
                          </div>                                                
                        ) : null } 
                            <div className="screen6-titlename">
                                  { term.titleName ? (
			      	                    <div>{ term.titleName }</div>
			                           	) : null }
                            </div>
                            <div className="screen6-situation">
                                  { term.situation ? (
			      	                    <div>{ term.situation }</div>
			                           	) : null }
                            </div>	 
                            <div className="screen6-reviewtext">
                                  { term.reviewText ? (
			      	                    <div>{ term.reviewText }</div>
			                           	) : null }
                            </div>	 	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
              </div>
          </div>     
		  </div>	
	</div>
	) : null;
};

export default Screen6;
