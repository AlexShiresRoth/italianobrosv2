import React from "react"
import { Link } from "gatsby"

import GalleryImgs from "./GalleryImgs"

import layoutStyles from "./gallerystyles/Gallery.module.scss"

const Gallery = () => {
  return (
    <section className={layoutStyles.gallery__section}>
      <GalleryImgs />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.heading}>
          <h3 className={layoutStyles.gallery__h3}>Best in class</h3>
          <hr className={layoutStyles.gallery__hr} />
        </div>
        <p className={layoutStyles.paragraph}>
          Experience our work from concept to creation. A forerunner in interior
          wall finishes, and exterior stucco systems serving Montauk to
          Manhattan, Italiano Bros. Enterprise has built an exceptional
          reputation of excellence and outstanding customer service
        </p>
        <div className={layoutStyles.button__container}>
          <Link to={"/OurWork"} style={{ textDecoration: "none" }}>
            <button className={layoutStyles.button}>Learn more</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
