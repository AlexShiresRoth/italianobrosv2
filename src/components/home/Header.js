import React from "react"
import { Link } from "gatsby"

import layoutStyles from "./headerstyles/Header.module.scss"
import wideScreenLayoutStyles from "./headerstyles/HeaderDesktop.module.scss"

const Header = () => (
  <header className={layoutStyles.header__section}>
    <div className={layoutStyles.overlay} />
    <div className={layoutStyles.herobox}>
      <h1
        className={`${layoutStyles.heading} ${wideScreenLayoutStyles.desktop__heading}`}
      >
        Broad Vision. Careful Thought. Handcrafted Design.
      </h1>
      <Link to={"/Services"}>
        <button
          className={`${layoutStyles.button} ${wideScreenLayoutStyles.desktop__button}`}
        >
          Learn More
        </button>
      </Link>
    </div>
  </header>
)

export default Header
