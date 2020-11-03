import React from 'react';
import { isEmpty } from 'lodash';
import  Link from 'gatsby-link';
import './style.scss';
import { Tabs, Tab } from 'react-bootstrap';
import Slider from "react-slick";
import Popapp from '../../popapp';
import Img from "gatsby-image";

const Screen4 = ( props ) => {

  const { title, subtitle, seeAll, siteType } = props.data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

	return ! isEmpty( props.data ) ? (
	<div>
		<div className="container screen4">
			<div className="screen4-title">
				{ title ? (
					<h2>{ title }</h2>
				) : null }
				{ subtitle ? (
					<p className="screen4-subtitle">
						{ subtitle }
					</p>
				) : null }                
      </div>
      <div className="screen4-blocks">
            <div className="screen4-seeall">
              { seeAll ? (
			      	<Link to='/services/'>{ seeAll }</Link>
			      	) : null }
            </div>

        <Tabs defaultActiveKey="tab1">
          <Tab eventKey="tab1" title={ siteType.nameSiteType1 ? (
				    	<span>{ siteType.nameSiteType1 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="screen4-slider">
                <Slider {...settings}>
                  {siteType.landPage.map((term, index) => (                   
                    <div className="screen4-block">
                      <div className="screen4-block__show">               
                        {!isEmpty(term.images) ? (
                          <div className="block-img">                      
                               <Img fluid={ term.images.sourceUrlSharp.childImageSharp.fluid }
                                    alt={term.images.altText}
                               />                               		     
                          </div>                                                
                        ) : null } 
                            <div className="screen4-namesite">
                                  { term.nameSite ? (
			      	                    <div>{ term.nameSite }</div>
			                           	) : null }
                            </div>	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab2" title={ siteType.nameSiteType2 ? (
				    	<span>{ siteType.nameSiteType2 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="screen4-slider">
                <Slider {...settings}>
                  {siteType.businessCardwebsite.map((term, index) => (                   
                    <div className="screen4-block">
                      <div className="screen4-block__show">               
                        {!isEmpty(term.images) ? (
                          <div className="block-img">                      
                               <Img fluid={ term.images.sourceUrlSharp.childImageSharp.fluid }
                                    alt={term.images.altText}
                               />                               		     
                          </div>                                                
                        ) : null } 
                            <div className="screen4-namesite">
                                  { term.nameSite ? (
			      	                    <div>{ term.nameSite }</div>
			                           	) : null }
                            </div>	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab3" title={ siteType.nameSiteType3 ? (
				    	<span>{ siteType.nameSiteType3 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="screen4-slider">
                <Slider {...settings}>
                  {siteType.corporateWebsites.map((term, index) => (                   
                    <div className="screen4-block">
                      <div className="screen4-block__show">               
                        {!isEmpty(term.images) ? (
                          <div className="block-img">                      
                               <Img fluid={ term.images.sourceUrlSharp.childImageSharp.fluid }
                                    alt={term.images.altText}
                               />                               		     
                          </div>                                                
                        ) : null } 
                            <div className="screen4-namesite">
                                  { term.nameSite ? (
			      	                    <div>{ term.nameSite }</div>
			                           	) : null }
                            </div>	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab4" title={ siteType.nameSiteType4 ? (
				    	<span>{ siteType.nameSiteType4 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="screen4-slider">
                <Slider {...settings}>
                  {siteType.onlineShops.map((term, index) => (                   
                    <div className="screen4-block">
                      <div className="screen4-block__show">               
                        {!isEmpty(term.images) ? (
                          <div className="block-img">                      
                               <Img fluid={ term.images.sourceUrlSharp.childImageSharp.fluid }
                                    alt={term.images.altText}
                               />                               		     
                          </div>                                                
                        ) : null } 
                            <div className="screen4-namesite">
                                  { term.nameSite ? (
			      	                    <div>{ term.nameSite }</div>
			                           	) : null }
                            </div>	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
                </div>
              </div>
          </Tab>
        </Tabs>            
                <div className="screen4-button">
                <Popapp namebutton='Order a website'/>
                </div>                    
            </div> 
		  </div>	
	</div>
	) : null;
};

export default Screen4;
