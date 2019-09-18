import React from "react"
import { Link } from "gatsby"

import Social from "./Social"
import FooterLinks from "./footerLinks/FooterLinks"
import FooterLinksDesktop from "./footerLinks/FooterLinksDesktop"

import layoutStyles from "./footerstyles/Footer.module.scss"
import wideScreenLayoutStyles from "./footerstyles/FooterDesktop.module.scss"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }
 
  //sets state to mobile view
  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 600 })
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize)
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }
  render() {
    return (
      <>
        {this.state.isMobile ? (
          <footer className={layoutStyles.footer__section}>
            <div className={layoutStyles.f__container}>
              <div className={layoutStyles.f__left}>
                <p className={layoutStyles.f__left__p}>Follow Us</p>
                <Social  isMobile={this.state.isMobile} />
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
                  <FooterLinks
                    isMobile={this.state.isMobile}
                  />
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
            <div className={wideScreenLayoutStyles.f__logo__copyright__desktop}>
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
              <div className={wideScreenLayoutStyles.f__desktop__middle__top}>
                <h5 className={wideScreenLayoutStyles.f__desktop__middle__h5}>
                  Follow Us
                </h5>

                <Social isMobile={this.state.isMobile} />
              </div>
              <div
                className={wideScreenLayoutStyles.f__desktop__middle__bottom}
              >
                <h5 className={wideScreenLayoutStyles.f__desktop__bottom__h5}>
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
                <FooterLinks
                  isMobile={this.state.isMobile}
                />
              </ul>
            </div>
          </footer>
        )}
      </>
    )
  }
}

export default Footer
