import React, { Fragment } from "react"

import { NavLink } from "./NavLink"
import "../../style/main.css"

export default class MobileMenu extends React.Component {
  renderMobileMenu = () => {
    if (this.props.toggled) {
      return (
        <div className="mobile__menu">
          <div className="mobile__menu--body">
            <ul>
              <NavLink />
            </ul>
          </div>
          <div className="mobile__menu--footer">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/italianobros.enterprise/"
                  target="_blank"
                >
                  <img
                    src={
                      "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330392/italianobros/icons/Facebook_kcgpqx.png"
                    }
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/italianobros.enterprise/"
                  target="_blank"
                >
                  <img
                    href="https://www.instagram.com/italianobros.enterprise/"
                    src={
                      "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330393/italianobros/icons/Instagram_hp37l4.png"
                    }
                    alt="Instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="mobile__menu hidden">
          <div className="mobile__menu--body">
            <ul>
              <NavLink />
            </ul>
          </div>

          <div className="mobile__menu--footer">
            <ul>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330392/italianobros/icons/Facebook_kcgpqx.png"
                  }
                  target="_blank"
                  href="https://www.facebook.com/italianobros.enterprise/"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/snackmanproductions/image/upload/v1568330393/italianobros/icons/Instagram_hp37l4.png"
                  }
                  target="_blank"
                  href="https://www.instagram.com/italianobros.enterprise/"
                  alt="facebook"
                />
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <Fragment>{this.renderMobileMenu()}</Fragment>
    )
  }
}
