import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationLayout from "../components/location/LocationLayout"

const Location = () => {
  return (
    <Layout>
      <SEO title="Contact page" />
      <LocationLayout />
    </Layout>
  )
}

export default Location
