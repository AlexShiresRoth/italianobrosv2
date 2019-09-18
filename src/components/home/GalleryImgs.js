import React from "react"

import layoutStyles from "./gallerystyles/Gallery.module.scss"

const GalleryImgs = () => {
  const imgs = [
    {
      title: "custom architectural concrete",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568774332/italianobros/gallery/c1_wkedca.jpg",
    },
    {
      title: "plaster moulding",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568774498/italianobros/gallery/pm1_vn5qpf.jpg",
    },
    {
      title: "venetian plaster",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568774552/italianobros/gallery/vp1_dfwgfx.jpg",
    },
  ]

  const imgMap = imgs.map((img, i) => {
    return (
      <img
        key={i}
        className={layoutStyles.gallery__img__grid__image}
        src={img.img}
        alt={img.title}
      />
    )
  })
  return <div className={layoutStyles.gallery__img__grid}>{imgMap}</div>
}

export default GalleryImgs
