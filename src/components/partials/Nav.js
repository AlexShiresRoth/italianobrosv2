import React, { Fragment } from "react"
import { Link } from "gatsby"
import Media from "react-media"

import NavMenu from "./NavMenu"
import Contact from "./Contact"
import MobileMenu from "./MobileMenu"
import { ServiceMenu } from "./ServiceMenu"

import layoutStyles from "./Nav.module.scss"
import wideScreenLayoutStyles from "./NavDesktop.module.scss"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      contactToggled: false,
      serviceToggle: false,
      isMobile: false,
    }
  }

  //handles when service menus are toggled to stop background scrolling
  handleScrolling = () => {
    if (this.state.toggled || this.state.contactToggled) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }
  // if nav menu is open on resize, close out
  handleWindowResizeWithToggledMenu() {
    if (this.state.toggled && !this.state.isMobile) {
      this.setState({ toggled: !this.state.toggled })
    }
  }
  toggleNav = () => {
    this.state.toggled
      ? this.setState({ toggled: false })
      : this.setState({ toggled: true, contactToggled: false })
    console.log(this.state.toggled)
  }

  contactToggle = () => {
    this.state.contactToggled
      ? this.setState({ contactToggled: false })
      : this.setState({ contactToggled: true, toggled: false })
  }
  renderServicesHoverMenu() {
    if (!this.state.serviceToggle) {
      this.setState({ serviceToggle: true })
    }
  }
  removeServicesHoverMenu() {
    if (this.state.serviceToggle) {
      this.setState({ serviceToggle: false })
    }
  }
  //sets state to mobile view
  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 600 })
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize)
    this.handleWindowResize()
    this.handleScrolling()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
    this.handleScrolling()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.toggled !== prevState.toggled ||
      this.state.contactToggled !== prevState.contactToggled
    ) {
      this.handleScrolling()
    }
    if (this.state.isMobile !== prevState.isMobile) {
      this.handleWindowResizeWithToggledMenu()
    }
  }

  render() {
    return (
      <Fragment>
        <Media query={{ maxWidth: "600px" }}>
          {matches =>
            matches ? (
              <nav
                className={layoutStyles.navbar__container}
                style={{ height: "0vh" }}
              >
                <div className={layoutStyles.nb__top}>
                  <NavMenu
                    onClick={this.toggleNav}
                    toggled={this.state.toggled}
                  />

                  <div className={layoutStyles.nb__logo__nav}>
                    <Link to="/">
                      <img
                        src={
                          "https://res.cloudinary.com/snackmanproductions/image/upload/v1568323268/italianobros/logos/Black_s394t0.png"
                        }
                        alt="italiano bros logo"
                        className={layoutStyles.nb__image}
                      />
                    </Link>
                  </div>
                  <div />
                </div>

                <Contact
                  onClick={this.contactToggle}
                  toggled={this.state.contactToggled}
                  isMobile={this.state.isMobile}
                />

                <MobileMenu toggled={this.state.toggled} />
              </nav>
            ) : (
              <nav className={wideScreenLayoutStyles.dt__navbar__container}>
                <div className={wideScreenLayoutStyles.dt__top}>
                  <div className={wideScreenLayoutStyles.dt__top__tier}>
                    <div>
                      <ul className={wideScreenLayoutStyles.dt__ul}>
                        <div className={wideScreenLayoutStyles.dt__nav__item}>
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <li className={wideScreenLayoutStyles.dt__li}>
                              Home
                            </li>
                          </Link>
                        </div>
                        <div
                          className={wideScreenLayoutStyles.dt__nav__item}
                          onMouseEnter={() => this.renderServicesHoverMenu()}
                          onMouseLeave={() => this.removeServicesHoverMenu()}
                          style={{ position: "relative" }}
                        >
                          <Link
                            to="/Services"
                            style={{ textDecoration: "none" }}
                          >
                            <li className={wideScreenLayoutStyles.dt__li}>
                              Services
                            </li>
                          </Link>
                          {this.state.serviceToggle ? (
                            <ServiceMenu toggled={this.state.serviceToggle} />
                          ) : null}
                        </div>
                        <div className={wideScreenLayoutStyles.dt__nav__item}>
                          <Link
                            to="/OurWork"
                            style={{ textDecoration: "none" }}
                          >
                            <li className={wideScreenLayoutStyles.dt__li}>
                              Our Work
                            </li>
                          </Link>
                        </div>
                        <div className={wideScreenLayoutStyles.dt__nav__item}>
                          <Link to="/About" style={{ textDecoration: "none" }}>
                            <li className={wideScreenLayoutStyles.dt__li}>
                              About
                            </li>
                          </Link>
                        </div>
                        <div className={wideScreenLayoutStyles.dt__nav__item}>
                          <Link
                            to="/Location"
                            style={{ textDecoration: "none" }}
                          >
                            <li className={wideScreenLayoutStyles.dt__li}>
                              Contact
                            </li>
                          </Link>
                        </div>
                      </ul>
                    </div>
                    <div className={wideScreenLayoutStyles.dt__logo__nav}>
                      <Link to="/">
                        <img
                          src={
                            "https://res.cloudinary.com/snackmanproductions/image/upload/v1568323268/italianobros/logos/Black_s394t0.png"
                          }
                          alt="italiano bros logo"
                          className={wideScreenLayoutStyles.dt__logo__nav}
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        className={wideScreenLayoutStyles.dt__button}
                        onClick={this.contactToggle}
                      >
                        {!this.state.contactToggled ? `Get A Quote` : `Close`}
                      </button>
                    </div>
                  </div>
                </div>
                <Contact
                  onClick={this.contactToggle}
                  toggled={this.state.contactToggled}
                  isMobile={this.state.isMobile}
                />
              </nav>
            )
          }
        </Media>
      </Fragment>
    )
  }
}
