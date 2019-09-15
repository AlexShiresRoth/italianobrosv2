import React from "react"
import { Link } from "gatsby"
import Media from "react-media"

import layoutStyles from "./Header.module.scss"
import wideScreenLayoutStyles from "./HeaderDesktop.module.scss"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobile: false,
    }
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
    return (
      <Media query={{ maxWidth: "600px" }}>
        {matches =>
          matches ? (
            <header className={layoutStyles.header__section}>
              <div className={layoutStyles.overlay} />
              <div
                className={
                  this.state.isMobile
                    ? layoutStyles.herobox
                    : wideScreenLayoutStyles.herobox
                }
              >
                <h1
                  className={
                    this.state.isMobile
                      ? layoutStyles.heading
                      : wideScreenLayoutStyles.heading
                  }
                >
                  Broad Vision. Careful Thought. Handcrafted Design.
                </h1>
                <Link to={"/Services"}>
                  <button
                    className={
                      this.state.isMobile
                        ? layoutStyles.button
                        : wideScreenLayoutStyles.button
                    }
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </header>
          ) : (
            <header className={layoutStyles.header__section}>
              <div className={layoutStyles.overlay} />
              <div
                className={
                  this.state.isMobile
                    ? layoutStyles.herobox
                    : wideScreenLayoutStyles.herobox
                }
              >
                <h1
                  className={
                    this.state.isMobile
                      ? layoutStyles.heading
                      : wideScreenLayoutStyles.heading
                  }
                >
                  Broad Vision. Careful Thought. Handcrafted Design.
                </h1>
                <Link to={"/Services"}>
                  <button
                    className={
                      this.state.isMobile
                        ? layoutStyles.button
                        : wideScreenLayoutStyles.button
                    }
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </header>
          )
        }
      </Media>
    )
  }
}
