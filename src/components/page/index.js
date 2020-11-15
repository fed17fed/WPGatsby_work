import React from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Img from 'gatsby-image';
import Taxonomies from "../widgets/taxonomies";
import Slider from "react-slick";
import Popapp from '../popapp';

const Page = ( props ) => {

	const { data } = props;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,            
			  }
			},
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

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="container wrapper page">					
					<div className="row">
					    <aside className="col-md-3 aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={data.menuItems} category={data.categories}/>
						</aside>
						<section className="col-md-9">
							{ ! isEmpty( data.content ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.content
									} }
								/>
							) : null }	
							<div className="post-popapp">
		                        <Popapp namebutton='Submit a request'/>
		                    </div>						
							{ ! isEmpty( data.AcfRubricServices.blok2 ) ? (
								<div className="page-block"
									dangerouslySetInnerHTML={ {
										__html: data.AcfRubricServices.blok2
									} }
								/>
							) : null }
							
		{ ! isEmpty( data.AcfRubricServices.indExample )  ? (
		<section className="section3">
		        <div className="page-nametype">
				   { data.AcfRubricServices.nameType ? (
			      	    <div>{ data.AcfRubricServices.nameType }</div>
			        ) : null }
		        </div>
		        <Slider {...settings}>
                  {data.AcfRubricServices.indExample.map((term, index) => (                   
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
		) : null }									
		</section>						
					</div>
				</div>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Page;
