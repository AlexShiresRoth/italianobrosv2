import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/home/Home"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <div style={{'padding': '20rem 0'}}><h1>Home Page</h1>
    <Link to='/Services'>Services</Link>
    <Link to='/OurWork'>OurWork</Link>
    <Link to='/About'>About</Link>
    <Link to='/Location'>Contact us</Link></div>
  </Layout>
)

export default IndexPage
