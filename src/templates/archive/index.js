import React from 'react';

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Blog from '../../components/blog-list/blog';

const ArchiveTemplate = ( { pageContext } ) => {

	return (
		<Layout>
			<SEO title={ pageContext.node.seo.title } description={pageContext.node.seo.metaDesc } />
			<Blog pageContext={ pageContext } pageTitle={ pageContext.node.name }/>
		</Layout>
	)
}
export default ArchiveTemplate
