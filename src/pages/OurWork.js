import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OurWorkLayout from "../components/ourwork/OurWorkLayout"
const OurWork = () => {
  const seoStr =
    "Gallery of various concrete, plaster mouldings and venetian plaster."

  return (
    <Layout>
      <SEO title={seoStr} />
      <OurWorkLayout />
    </Layout>
  )
}

export default OurWork
