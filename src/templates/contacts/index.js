import React from "react";
import Layout from "../../components/layout";
import Contacts from '../../components/contacts';
import SEO from "../../components/seo";

const ContactsTemplate = ( props ) => {

	return (
		<Layout>
			<SEO title={ props.pageContext.title } description={ props.pageContext.metaDesc } />
			<Contacts data={ props.pageContext }/>
		</Layout>
	)
};
export default ContactsTemplate;
