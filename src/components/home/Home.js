import React, { Fragment } from "react"

import About from "./About"
import Gallery from "./Gallery"
import Header from "./Header"
import Services from "./Services"


const Home = () => {
  return (
    <Fragment>
      <Header />
      <Services />
      <Gallery />
      <About />
    </Fragment>
  )
}

export default Home
