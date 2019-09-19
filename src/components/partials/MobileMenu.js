import React from "react"

import { NavLink } from "./NavLink"
import layoutStyles from "./navstyles/MobileMenu.module.scss"

const MobileMenu = ({ toggled }) => {
  return (
    <div className={toggled ? layoutStyles.mb__menu : layoutStyles.hidden}>
      <div className={layoutStyles.mb__body}>
        <ul className={layoutStyles.mb__ul}>
          <NavLink />
        </ul>
      </div>
      <div className={layoutStyles.mb__footer}>
        <ul className={layoutStyles.mb__footer}>
          <li className={layoutStyles.mb__li}>
            <a
              href="https://www.facebook.com/italianobros.enterprise/"
              target="_blank"
              className={layoutStyles.mb__anchor}
            >
              <img
                src={
                  "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330392/italianobros/icons/Facebook_kcgpqx.png"
                }
                alt="facebook"
                className={layoutStyles.mb__img}
              />
            </a>
          </li>
          <li className={layoutStyles.mb__li}>
            <a
              href="https://www.instagram.com/italianobros.enterprise/"
              target="_blank"
              className={layoutStyles.mb__anchor}
            >
              <img
                href="https://www.instagram.com/italianobros.enterprise/"
                src={
                  "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330393/italianobros/icons/Instagram_hp37l4.png"
                }
                alt="Instagram"
                className={layoutStyles.mb__img}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
