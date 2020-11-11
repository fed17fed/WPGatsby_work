import React from "react";
import Layout from "../../components/layout";
//import SEO from "../../components/seo"
import Hero from "../../components/home/hero";
import Screen1 from "../../components/home/screen1";
import Screen2 from "../../components/home/screen2";
import Screen3 from "../../components/home/screen3";
import Screen4 from "../../components/home/screen4";
import Screen5 from "../../components/home/screen5";
import Screen6 from "../../components/home/screen6";
import Screen7 from "../../components/home/screen7";
import Screen8 from "../../components/home/screen8";
import Error from "../../components/error";
import { isEmpty } from 'lodash';

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      page: { AcfHome: { screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8 } },
				  page			      
		      }
	      } = props;


	return (
		<Layout>
			 
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Hero data={ page }/>	
						<Screen1 data={ screen1 }/>	
						<Screen2 data={ screen2 }/>	
						<Screen3 data={ screen3 }/>	
						<Screen4 data={ screen4 }/>			
						<Screen5 data={ screen5 }/>	
						<Screen6 data={ screen6 }/>	
						<Screen7 data={ screen7 }/>
						<Screen8 data={ screen8 }/>					
					</>
				) : (
					<Error message="Something Went Wrong"/>
				)
			}
		</Layout>
	)
};
export default FrontPage;

