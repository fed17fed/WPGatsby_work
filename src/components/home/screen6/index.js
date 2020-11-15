import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Slider from "react-slick";
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

const Screen6 = ( props ) => {

  const { title, subtitle, reviewsTable } = props.data;
  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
      responsive: [        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  };
  const imgData = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "home/right-qs.png"}) {
                childImageSharp {
                    fluid(maxWidth: 50) {
                      base64
					            aspectRatio
				            	srcSet
				            	src
					            sizes
				            	srcSetWebp
				            	srcWebp
                    }
                }
            }
            filetwo: file(relativePath: {eq: "home/left-qs.png"}) {
              childImageSharp {
                  fluid(maxWidth: 50) {
                    base64
                    aspectRatio
                    srcSet
                    src
                    sizes
                    srcSetWebp
                    srcWebp
                  }
              }
          }
        }
	`);

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
                              <div className="screen6-reviewtext__img1">                              
                                <Img fluid={imgData.filetwo.childImageSharp.fluid} alt="Default" />
                              </div> 
                                  { term.reviewText ? (
			      	                    <div>{ term.reviewText }</div>
			                           	) : null }
                              <div className="screen6-reviewtext__img2">    
                                <Img fluid={imgData.file.childImageSharp.fluid} alt="Default" />
                              </div>                                  
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
