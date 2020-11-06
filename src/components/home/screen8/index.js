import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Slider from "react-slick";
import Img from 'gatsby-image';

const Screen8 = ( props ) => {

  const { client } = props.data;
  const settings = { 
      infinite: true,  
      dots: true,
      arrows: false,    
      slidesToShow: 6,
      slidesToScroll: 4,
      speed: 500
  };
  
	return ! isEmpty( props.data ) ? (
	<div>		   
      <div className="container screen8">            
              <div className="screen8-slider">
                <Slider {...settings}>
                  {client.map((term, index) => (                   
                    <div className="screen8-block">
                      <div className="screen8-block__show">               
                        {!isEmpty(term.images) ? (
                          <div className="block6-img">                      
                               <Img fluid={ term.images.sourceUrlSharp.childImageSharp.fluid }
                                    alt={term.images.altText}
                               />                               		     
                          </div>                                                
                        ) : null }                              	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
              </div>               
		  </div>	
	</div>
	) : null;
};

export default Screen8;
