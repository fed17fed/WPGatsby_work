import React from "react";
import Layout from "../../components/layout";
import Aboutus from '../../components/about_us';
import SEO from "../../components/seo";

const AboutusTemplate = ( props ) => {

	return (
		<Layout>
			<SEO title={ props.pageContext.title } description={ props.pageContext.metaDesc } />
			<Aboutus data={ props.pageContext }/>
		</Layout>
	)
};
export default AboutusTemplate;
