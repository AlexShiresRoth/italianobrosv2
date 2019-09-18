import React from "react"

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
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568774332/italianobros/gallery/c1_wkedca.jpg",
    },
    {
      title: "venetian plaster",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568774332/italianobros/gallery/c1_wkedca.jpg",
    },
  ]

  const imgMap = imgs.map((img, i) => {})
  return (
    <div>
      <div className="services__section--container">
        <div className="service-box">
          <div className="img__container">
            <div className="img__container--images">{imgMap}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryImgs
