import React from "react"
import { Link } from "gatsby"
import Media from "react-media"

import layoutStyles from "./Header.module.scss"
import wideScreenLayoutStyles from "./HeaderDesktop.module.scss"

const Header = () => (
  <Media query="(max-width: 600px)">
    {matches =>
      matches ? (
        <header className={layoutStyles.header__section}>
          <div className={layoutStyles.overlay} />
          <div className={layoutStyles.herobox}>
            <h1 className={layoutStyles.heading}>
              Broad Vision. Careful Thought. Handcrafted Design.
            </h1>
            <Link to={"/Services"}>
              <button className={layoutStyles.button}>Learn More</button>
            </Link>
          </div>
        </header>
      ) : (
        <header className={wideScreenLayoutStyles.desktop}>
          <div className={wideScreenLayoutStyles.overlay} />
          <div className={wideScreenLayoutStyles.herobox}>
            <h1 className={wideScreenLayoutStyles.heading}>
              Broad Vision. Careful Thought. Handcrafted Design.
            </h1>
            <Link to={"/Services"}>
              <button className={wideScreenLayoutStyles.button}>
                Learn More
              </button>
            </Link>
          </div>
        </header>
      )
    }
  </Media>
)

export default Header
