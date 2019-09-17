import React, { Fragment } from "react"
import Media from "react-media"

import { NavLink } from "./NavLink"
import layoutStyles from "./navstyles/MobileMenu.module.scss"

export default class MobileMenu extends React.Component {
  render() {
    return (
      <Media query="(max-width: 600px)">
        {matches =>
          matches ? (
            <div
              className={
                this.props.toggled ? layoutStyles.mb__menu : layoutStyles.hidden
              }
            >
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
          ) : (
            <Fragment></Fragment>
          )
        }
      </Media>
    )
  }
}
