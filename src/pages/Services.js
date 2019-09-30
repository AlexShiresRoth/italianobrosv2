import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ServicesLayout from "../components/services/ServicesLayout"

const Services = () => {
  return (
    <Layout>
      <SEO title="Services Page" />
      <ServicesLayout />
    </Layout>
  )
}

export default Services
