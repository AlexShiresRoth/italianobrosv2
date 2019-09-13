import React from "react"
import { Link } from "gatsby"

import Social from "./Social"

import "../../style/main.css"

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
      isMobile: false,
    }
  }

  getWindowSize = () => {
    return window.innerWidth
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 600 })
  }

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener("resize", this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }

  render() {
    if (this.state.isMobile) {
      return (
        <footer className="footer__section">
          <div className="footer__section--container">
            <div className="footer__section--container--column--left">
              <p>Follow Us</p>
              <Social icons={this.state.gallery} />
              <p>Contact Us</p>
              <a href="tel:+1-631.218.3641">631.218.3641</a>
              <a href="mailto:italianoenterprise@gmail.com">
                italianoenterprise@gmail.com
              </a>
            </div>
            <div className="footer__section--container--column--right">
              <ul>
                <Link
                  to="/"
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  <li className="links">Home</li>
                </Link>
                <Link
                  to="/services"
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  <li className="links">Services</li>
                </Link>
                <Link
                  to="/showcase"
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  <li className="links">Our Work</li>
                </Link>
                <Link
                  to="/ourstory"
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  <li className="links">About</li>
                </Link>

                <Link
                  to="/location"
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  <li className="links">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="logo-copyright__container">
            <div className="logo-copyright__container--footer-logo">
              <img
                src={
                  "https://res.cloudinary.com/snackmanproductions/image/upload/v1568323260/italianobros/logos/White_jbjrkt.png"
                }
                alt="logo"
              />
            </div>
            <p>&copy; italiano bros enterprise</p>
          </div>
        </footer>
      )
    }

    //desktop layout
    else {
      return (
        <footer className="footer__section--desktop">
          <div className="logo-copyright__container--desktop">
            <div className="logo-copyright__container--desktop--footer-logo">
              <img
                src={
                  "https://res.cloudinary.com/snackmanproductions/image/upload/v1568323260/italianobros/logos/White_jbjrkt.png"
                }
                alt="logo"
              />
            </div>
            <p>&copy; italiano bros enterprise</p>
          </div>
          <div className="footer__section--desktop--column--middle">
            <div className="footer__section--desktop--column--middle--top">
              <h5>Follow Us</h5>
              <Social icons={this.state.gallery} />
            </div>
            <div className="footer__section--desktop--column--middle--bottom">
              <h5>Contact Us</h5>
              <p>
                <a href="tel:+1-631.218.3641">631.218.3641</a>
              </p>
              <p>
                <a href="mailto:italianoenterprise@gmail.com">
                  italianoenterprise@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="footer__section--desktop--column--right">
            <ul>
              <Link
                to="/"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
              >
                <li className="links">Home</li>
              </Link>
              <Link
                to="/services"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
              >
                <li className="links">Services</li>
              </Link>
              <Link
                to="/showcase"
                style={{ textDecoration: "none", fontSize: "1.1rem" }}
              >
                <li className="links">Our Work</li>
              </Link>
              <Link
                to="/ourstory"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
              >
                <li className="links">About</li>
              </Link>
              <Link
                to="/location"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
              >
                <li className="links">Contact</li>
              </Link>
            </ul>
          </div>
        </footer>
      )
    }
  }
}
