import React from "react";
import Layout from "../../components/layout";
import Services from '../../components/services';
import SEO from "../../components/seo";

const ServicesTemplate = ( props ) => {

	return (
		<Layout>
			<SEO title={ props.pageContext.title } description={ props.pageContext.metaDesc } />
			<Services data={ props.pageContext }/>
		</Layout>
	)
};
export default ServicesTemplate;
