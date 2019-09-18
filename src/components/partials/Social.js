import React from "react"

import layoutStyles from "./footerstyles/Footer.module.scss"
import wideScreenLayoutStyles from "./footerstyles/FooterDesktop.module.scss"

const Social = ({ isMobile }) => {
  const icons = [
    {
      image:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330392/italianobros/icons/Facebook_kcgpqx.png",
      url: "https://www.facebook.com/italianobros.enterprise/",
    },
    {
      image:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330393/italianobros/icons/Instagram_hp37l4.png",
      url: "https://www.instagram.com/italianobros.enterprise/",
    },
  ]
  const renderSocialImages = icons.map((img, i) => {
    return (
      <a href={img.url} target="_blank" rel="noopener noreferrer" key={i}>
        <img
          className={
            isMobile
              ? layoutStyles.f__img
              : wideScreenLayoutStyles.f__desktop__icon
          }
          src={img.image}
          href={img.url}
          alt="social media icons"
        ></img>
      </a>
    )
  })

  return (
    <div
      className={
        isMobile
          ? layoutStyles.f__icons
          : wideScreenLayoutStyles.f__desktop__icons
      }
    >
      {renderSocialImages}
    </div>
  )
}

export default Social
