import React from "react";
import { isEmpty } from 'lodash';
import Link from 'gatsby-link';
import './style.scss';
import Img from 'gatsby-image';
import Popapp from '../popapp';
import { Tabs, Tab } from 'react-bootstrap';
import Slider from "react-slick";
import Screen6 from "../home/screen6";

const Single = ( { data } ) => {

	if ( isEmpty( data ) ) {
		return null;
	}
    
	const { id, postId, title, featuredImage, AcfRubricSites, pageBy} = data;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,          
			  }
			},
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  };

	return (
		<div className="post-container">
			<div className="post-img">
			{/* Featured Image */}
			{ ( undefined !== featuredImage && null !== featuredImage ) ? <Img fluid={featuredImage.node.sourceUrlSharp.childImageSharp.fluid} alt={ featuredImage.altText } />  : null }
			<div className="container">
			    <div className="entry-header">
				   <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
				   <Popapp namebutton='Order a website'/>
			    </div> 
			</div>   		
			    <div className="post-img__masck"></div>
			</div>
		  <div className="wrapper">	
	<article
			data-id={id}
			id={`post-${postId}`}
			className={`post-${postId} post-content`}>
					{/* .entry-content */}					
					{ ! isEmpty( AcfRubricSites.title )  ? (
						<div className="post-title">
						   { AcfRubricSites.title }
						</div>
					) : null }
					{ ! isEmpty( AcfRubricSites.subtitle )  ? (
						<div className="post-subtitle">
						   { AcfRubricSites.subtitle }
						</div>
					) : null }
					{ ! isEmpty( AcfRubricSites.text )  ? (
						<div className="post-text" dangerouslySetInnerHTML={{ __html: AcfRubricSites.text }} />						
					) : null }
					{ ! isEmpty( AcfRubricSites.button )  ? (
						<div className="post-but">
						   <Link className="post-button" to="/portfolio/">					
						      { AcfRubricSites.button }						
						   </Link>
						</div>
					) : null }

        <section className="section1">
        <Tabs defaultActiveKey="tab1">
          <Tab eventKey="tab1" title={ AcfRubricSites.tab1.title ? (
				    	<span>{ AcfRubricSites.tab1.title }</span>
			      	) : null }>
              <div className="-item-wrapper">
                <div className="post-tab">
				    { ! isEmpty( AcfRubricSites.tab1.text )  ? (
						<div className="post-text" dangerouslySetInnerHTML={{ __html: AcfRubricSites.tab1.text }} />						
					) : null }
                </div>
              </div>
          </Tab>
          <Tab eventKey="tab2" title={ AcfRubricSites.tab2.title ? (
				    	<span>{ AcfRubricSites.tab2.title }</span>
			      	) : null }>
              <div className="tab-item-wrapper">
                <div className="post-tab">
				    { ! isEmpty( AcfRubricSites.tab2.text )  ? (
						<div className="post-text" dangerouslySetInnerHTML={{ __html: AcfRubricSites.tab2.text }} />						
					) : null }
                </div>
              </div>
          </Tab>
		</Tabs>
		            <div className="post-popapp">
		                <Popapp namebutton='Order a website'/>
		            </div>
		</section>	
		<section className="section2">
		            { ! isEmpty( AcfRubricSites.titlePortfolio )  ? (
						<div className="post-title">
						   { AcfRubricSites.titlePortfolio }
						</div>
					) : null }
					{ ! isEmpty( AcfRubricSites.subtitlePortfolio )  ? (
						<div className="post-subtitle">
						   { AcfRubricSites.subtitlePortfolio }
						</div>
					) : null }
					{ ! isEmpty( AcfRubricSites.typeSite )  ? (
						<div className="section2-typeSite">
						   { AcfRubricSites.typeSite }
						</div>
					) : null }
					<div className="screen4-seeall">
                            { AcfRubricSites.butoonSee ? (
			                	<Link to='/portfolio/'>{ AcfRubricSites.butoonSee }</Link>
			            	) : null }
                    </div>					
		</section>	
		<section className="section3">
		        <Slider {...settings}>
                  {AcfRubricSites.blockExample.map((term, index) => (                   
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
                                  { term.title ? (
			      	                    <div>{ term.title }</div>
			                           	) : null }
                            </div>	 
                      </div>                           
                    </div>                
                  ))}
                </Slider> 
		</section>		
		<section className="section4">
		            { ! isEmpty( AcfRubricSites.textBottom )  ? (
						<div className="post-text" dangerouslySetInnerHTML={{ __html: AcfRubricSites.textBottom }} />						
					) : null }
		</section>	
		<section className="section5">
		   <Screen6 data={ pageBy }/>	
		</section>		
	</article>
		  </div>
		</div>
	)
};

export default Single;
