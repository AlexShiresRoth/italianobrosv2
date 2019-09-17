import React, { Fragment } from "react"
import { Link } from "gatsby"
import Media from "react-media"

import layoutStyles from "./aboutstyles/About.module.scss"
import wideScreenLayoutStyles from "./aboutstyles/AboutDesktop.module.scss"

export default class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      aboutImgs: [
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568244365/italianobros/home/marc__italiano_udqcdu.jpg",
      ],
    }
  }

  //mobile layout view
  render() {
    return (
      <Fragment>
        <Media query="(max-width: 600px)">
          {matches =>
            matches ? (
              <section className={layoutStyles.about__section}>
                <div>
                  <img
                    src={this.state.aboutImgs[0]}
                    alt="Marc Italiano"
                    className={layoutStyles.about__img}
                  />
                </div>
                <div className={layoutStyles.container}>
                  <div className={layoutStyles.heading}>
                    <h3 className={layoutStyles.about__h3}>Italiano bros.</h3>
                    <h3 className={layoutStyles.about__h3}>Enterprise</h3>
                    <hr className={layoutStyles.about__hr} />
                  </div>
                  <div className={layoutStyles.paragraph__section}>
                    <p className={layoutStyles.paragraph}>
                      Founded by Guy and Marc Italiano in 1979, while continuing
                      today to be a leader in the industry and growing to
                      achieve the creative demands of the future. As artisans,
                      we are passionate about excellence with each new project.
                    </p>
                  </div>

                  <div className={layoutStyles.button__container}>
                    <Link
                      to={"/ourstory"}
                      style={{ textDecoration: "none", alignSelf: "center" }}
                    >
                      <button className={layoutStyles.button}>
                        Discover our history
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            ) : (
              <section
                className={wideScreenLayoutStyles.about__section__desktop}
              >
                <figure>
                  <img
                    src={this.state.aboutImgs[0]}
                    alt="about img"
                    className={wideScreenLayoutStyles.about__desktop__img}
                  />
                </figure>
                <div className={wideScreenLayoutStyles.container}>
                  <div
                    className={
                      (wideScreenLayoutStyles.about__desktop__inner,
                      wideScreenLayoutStyles.center)
                    }
                  >
                    <h1 className={wideScreenLayoutStyles.about__desktop__h1}>
                      Family Owned &amp; Operated
                    </h1>
                    <hr className={wideScreenLayoutStyles.about__desktop__hr} />
                    <div
                      className={
                        wideScreenLayoutStyles.about__desktop__paragraph__container
                      }
                    >
                      <p
                        className={
                          wideScreenLayoutStyles.about__desktop__paragraph
                        }
                      >
                        Founded by Guy and Marc Italiano in 1979, while
                        continuing today to be a leader in the industry and
                        growing to achieve the creative demands of the future.
                        As artisans, we are passionate about excellence with
                        each new project.
                      </p>
                    </div>

                    <Link
                      to={"/ourstory"}
                      style={{ textDecoration: "none", alignSelf: "flex-end" }}
                    >
                      <button className={wideScreenLayoutStyles.button}>
                        Discover our history
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            )
          }
        </Media>
      </Fragment>
    )
  }
}
