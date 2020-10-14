/**
 * Layout component contains header and footer
 *
 * @package gatsby-wordpress-theme
 */

import React from "react"
import PropTypes from "prop-types"

import './../../sass/common.scss';
import Header from "../header";
import HeaderEn from "../headeren";
import Footer from "../footer";

const Layout = ( { children, data }) => { 
  return (
    <>
    {(window.location.pathname.indexOf("/en/") !== -1)
          ? <HeaderEn data={ data }/>
          : (
            <Header data={ data }/> 
          )
    }     
	    <main className="main-container">{children}</main>
	  <Footer data={ data }/>
    </>
  )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
