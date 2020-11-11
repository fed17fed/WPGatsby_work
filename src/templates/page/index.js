import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo"
import Page from '../../components/page';

const PageTemplate = ( props ) => {

	return (
		<Layout>
			<SEO title={ props.pageContext.title } description={ props.pageContext.metaDesc } />
			<Page data={ props.pageContext }/>
		</Layout>
	)
};
export default PageTemplate;
