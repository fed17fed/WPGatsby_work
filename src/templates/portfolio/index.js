import React from "react";
import Layout from "../../components/layout";
import Portfolio from '../../components/portfolio';
import SEO from "../../components/seo";

const PortfolioTemplate = ( props ) => {

	return (
		<Layout>
			<SEO title={ props.pageContext.title } description={ props.pageContext.metaDesc } />
			<Portfolio data={ props.pageContext }/>
		</Layout>
	)
};
export default PortfolioTemplate;
