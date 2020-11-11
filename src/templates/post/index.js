
import React from 'react';
import Layout from '../../components/layout';
import SEO from "../../components/seo"
import Single from '../../components/single';

const Post = ( props ) => {

	const { pageContext } = props;

	return (
		<Layout>
			<SEO title={ pageContext.title } description={pageContext.metaDesc} />
			<Single data={ pageContext }/>
		</Layout>
	)
};

export default Post;
