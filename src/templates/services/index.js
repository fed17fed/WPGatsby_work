import React from "react";
import Layout from "../../components/layout";
import Services from '../../components/services';

const ServicesTemplate = ( props ) => {

	return (
		<Layout>
			<Services data={ props.pageContext }/>
		</Layout>
	)
};
export default ServicesTemplate;
