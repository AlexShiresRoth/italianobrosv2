import React, { Fragment } from "react"

import Header from "./Header"
import ServicesList from "./ServicesList"

const ServicesLayout = () => {
  return (
    <Fragment>
      <Header />
      <ServicesList />
    </Fragment>
  )
}

export default ServicesLayout
