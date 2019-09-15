import React from "react"
import { Link } from "gatsby"
import Media from "react-media"

import Social from "./Social"

import layoutStyles from "./Footer.module.scss"
import wideScreenLayoutStyles from "./FooterDesktop.module.scss"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: [
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
      ],
    }
  }

  render() {
    return (
      <>
        <Media query={{ maxWidth: "600px" }}>
          {matches =>
            matches ? (
              <footer className={layoutStyles.footer__section}>
                <div className={layoutStyles.f__container}>
                  <div className={layoutStyles.f__left}>
                    <p className={layoutStyles.f__left__p}>Follow Us</p>
                    <Social icons={this.state.gallery} />
                    <p className={layoutStyles.f__left__p}>Contact Us</p>
                    <a
                      className={layoutStyles.f__left__anchor}
                      href="tel:+1-631.218.3641"
                    >
                      631.218.3641
                    </a>
                    <a
                      className={layoutStyles.f__left__anchor}
                      href="mailto:italianoenterprise@gmail.com"
                    >
                      italianoenterprise@gmail.com
                    </a>
                  </div>
                  <div className={layoutStyles.f__right}>
                    <ul className={layoutStyles.f__right__ul}>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", fontSize: "1.1rem" }}
                      >
                        <li className={layoutStyles.f__right__li}>Home</li>
                      </Link>
                      <Link
                        to="/Services"
                        style={{ textDecoration: "none", fontSize: "1.1rem" }}
                      >
                        <li className={layoutStyles.f__right__li}>Services</li>
                      </Link>
                      <Link
                        to="/OurWork"
                        style={{ textDecoration: "none", fontSize: "1.1rem" }}
                      >
                        <li className={layoutStyles.f__right__li}>Our Work</li>
                      </Link>
                      <Link
                        to="/About"
                        style={{ textDecoration: "none", fontSize: "1.1rem" }}
                      >
                        <li className={layoutStyles.f__right__li}>About</li>
                      </Link>

                      <Link
                        to="/Location"
                        style={{ textDecoration: "none", fontSize: "1.1rem" }}
                      >
                        <li className={layoutStyles.f__right__li}>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className={layoutStyles.f__logo__copyright__container}>
                  <div className={layoutStyles.f__logo}>
                    <img
                      src={
                        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568323260/italianobros/logos/White_jbjrkt.png"
                      }
                      alt="logo"
                      className={layoutStyles.f__logo__img}
                    />
                  </div>
                  <p className={layoutStyles.f__logo__p}>
                    &copy; italiano bros enterprise
                  </p>
                </div>
              </footer>
            ) : (
              <footer className={wideScreenLayoutStyles.footer__desktop}>
                <div
                  className={wideScreenLayoutStyles.f__logo__copyright__desktop}
                >
                  <div
                    className={
                      wideScreenLayoutStyles.f__logo__copyright__desktop__container
                    }
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568323260/italianobros/logos/White_jbjrkt.png"
                      }
                      alt="logo"
                      className={wideScreenLayoutStyles.f__logo__desktop}
                    />
                  </div>
                  <p
                    className={
                      wideScreenLayoutStyles.f__logo__copyright__desktop__p
                    }
                  >
                    &copy; italiano bros enterprise
                  </p>
                </div>
                <div className={wideScreenLayoutStyles.f__desktop__middle}>
                  <div
                    className={wideScreenLayoutStyles.f__desktop__middle__top}
                  >
                    <h5
                      className={wideScreenLayoutStyles.f__desktop__middle__h5}
                    >
                      Follow Us
                    </h5>
                    <Social icons={this.state.gallery} />
                  </div>
                  <div
                    className={
                      wideScreenLayoutStyles.f__desktop__middle__bottom
                    }
                  >
                    <h5
                      className={wideScreenLayoutStyles.f__desktop__bottom__h5}
                    >
                      Contact Us
                    </h5>
                    <p className={wideScreenLayoutStyles.f__desktop__bottom__p}>
                      <a
                        className={wideScreenLayoutStyles.f__desktop__bottom__a}
                        href="tel:+1-631.218.3641"
                      >
                        631.218.3641
                      </a>
                    </p>
                    <p className={wideScreenLayoutStyles.f__desktop__bottom__p}>
                      <a
                        className={wideScreenLayoutStyles.f__desktop__bottom__a}
                        href="mailto:italianoenterprise@gmail.com"
                      >
                        italianoenterprise@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className={wideScreenLayoutStyles.f__desktop__right}>
                  <ul className={wideScreenLayoutStyles.f__desktop__right__ul}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", fontSize: "1.5rem" }}
                    >
                      <li
                        className={wideScreenLayoutStyles.f__desktop__right__li}
                      >
                        Home
                      </li>
                    </Link>
                    <Link
                      to="/services"
                      style={{ textDecoration: "none", fontSize: "1.5rem" }}
                    >
                      <li
                        className={wideScreenLayoutStyles.f__desktop__right__li}
                      >
                        Services
                      </li>
                    </Link>
                    <Link
                      to="/showcase"
                      style={{ textDecoration: "none", fontSize: "1.1rem" }}
                    >
                      <li
                        className={wideScreenLayoutStyles.f__desktop__right__li}
                      >
                        Our Work
                      </li>
                    </Link>
                    <Link
                      to="/ourstory"
                      style={{ textDecoration: "none", fontSize: "1.5rem" }}
                    >
                      <li
                        className={wideScreenLayoutStyles.f__desktop__right__li}
                      >
                        About
                      </li>
                    </Link>
                    <Link
                      to="/location"
                      style={{ textDecoration: "none", fontSize: "1.5rem" }}
                    >
                      <li
                        className={wideScreenLayoutStyles.f__desktop__right__li}
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
              </footer>
            )
          }
        </Media>
      </>
    )
  }
}
