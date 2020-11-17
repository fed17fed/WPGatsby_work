
import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Img from "gatsby-image";
import Taxonomies from "../widgets/taxonomies";
import Taxonomiestwo from "../widgets/taxonomiestwo";
import { Tabs, Tab } from 'react-bootstrap';

const Portfolio = ( props ) => {

	const { data } = props;

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="container wrapper portfolio">
					
					<div className="row">
					    <aside className="col-md-3 aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={data.menuItems} category={data.categories}/>
							<Taxonomiestwo taxonomies={data.menuItemstwo} />
						</aside>
						<section className="col-md-9">	
						{ ! isEmpty( data.title )  ? (
						   <h2>{ data.title }</h2>
					    ) : null }						
						<div className="screen4-blocks">
        <Tabs defaultActiveKey="tab1">
          <Tab eventKey="tab1" title={ data.allPortfolio.siteType.nameSiteType1 ? (
				    	<span>{ data.allPortfolio.siteType.nameSiteType1 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="row screen4-slider">               
                  {data.allPortfolio.siteType.landPage.map((term, index) => (                   
                    <div className="col-xl-4 col-sm-6 screen4-block">
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
               
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab2" title={ data.allPortfolio.siteType.nameSiteType2 ? (
				    	<span>{ data.allPortfolio.siteType.nameSiteType2 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="row screen4-slider">               
                  {data.allPortfolio.siteType.businessCardwebsite.map((term, index) => (                   
                    <div className="col-md-4 screen4-block">
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
                
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab3" title={ data.allPortfolio.siteType.nameSiteType3 ? (
				    	<span>{ data.allPortfolio.siteType.nameSiteType3 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="row screen4-slider">               
                  {data.allPortfolio.siteType.corporateWebsites.map((term, index) => (                   
                    <div className="col-md-4 screen4-block">
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
                
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab4" title={ data.allPortfolio.siteType.nameSiteType4 ? (
				    	<span>{ data.allPortfolio.siteType.nameSiteType4 }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="row screen4-slider">                
                  {data.allPortfolio.siteType.onlineShops.map((term, index) => (                   
                    <div className="col-md-4 screen4-block">
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
               
                </div>
              </div>
          </Tab>
        </Tabs>            
                            
        </div> 
							
						</section>						
					</div>
				</div>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Portfolio;
