/**
 * Layout component contains header and footer
 *
 * @package gatsby-wordpress-theme
 */

import React from "react"
import PropTypes from "prop-types"
import ScrollTopArrow from "../scrolltoparrow";
import './../../sass/common.scss';
import Header from "../header";
import Footer from "../footer";

const Layout = ( { children, data }) => { 
  
  return (
    <>
      <Header data={ data }/> 
	    <main className="main-container">{children}</main>
      <ScrollTopArrow />      
	    <Footer data={ data }/>
    </>
  )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
