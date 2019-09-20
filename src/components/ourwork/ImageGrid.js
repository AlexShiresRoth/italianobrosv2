import React from "react"

import layoutStyles from "./styles/ImageGrid.module.scss"

const ImageGrid = ({ images }) => {
  const imageArray = images.map((image, i) => {
    return (
      <div className={layoutStyles.grid__item} key={i}>
        <img className={layoutStyles.grid__image} src={image} alt="custom concrete, venetian plaster and mouldings" />
      </div>
    )
  })

  return <div className={layoutStyles.image__grid}>{imageArray}</div>
}

export default ImageGrid
