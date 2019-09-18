import React from "react"
import { Link } from "gatsby"

import GalleryImgs from "./GalleryImgs"

const Gallery = () => {
  return (
    <section className="gallery__section">
      <GalleryImgs />
      <h3>Best in class</h3>
      <hr />
      <p>
        Experience our work from concept to creation. A forerunner in interior
        wall finishes, and exterior stucco systems serving Montauk to Manhattan,
        Italiano Bros. Enterprise has built an exceptional reputation of
        excellence and outstanding customer service
      </p>
      <div className="btn__container--center">
        <Link
          to={"/showcase"}
          style={{ textDecoration: "none", alignSelf: "center" }}
        >
          <button className="btn__transparent--small">Learn more</button>
        </Link>
      </div>
    </section>
  )
}

export default Gallery
