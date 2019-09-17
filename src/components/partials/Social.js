import React from "react"

import layoutStyles from "./footerstyles/Footer.module.scss"

const Social = props => {
  const renderSocialImages = props.icons.map((img, i) => {
    return (
      <a href={img.url} target="_blank" rel="noopener noreferrer" key={i}>
        <img
          className={layoutStyles.f__img}
          src={img.image}
          href={img.url}
          alt="social media icons"
        ></img>
      </a>
    )
  })

  return <div className={layoutStyles.f__icons}>{renderSocialImages}</div>
}

export default Social
