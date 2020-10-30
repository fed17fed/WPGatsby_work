import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/home/hero";
import Screen1 from "../../components/home/screen1";
import Screen2 from "../../components/home/screen2";
import Screen3 from "../../components/home/screen3";
import Screen4 from "../../components/home/screen4";
//import Search from "../../components/home/search";
//import FeaturedPosts from "../../components/home/feature-posts";
//import LatestPosts from '../../components/home/latest-posts';
import Error from "../../components/error";
import { isEmpty } from 'lodash';

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      page: { AcfHome: { screen1, screen2, screen3, screen4 } },
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
						
					</>
				) : (
					<Error message="Something Went Wrong"/>
				)
			}
		</Layout>
	)
};
export default FrontPage;

