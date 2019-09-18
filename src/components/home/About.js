import React, { Fragment } from "react"
import { Link } from "gatsby"

import layoutStyles from "./aboutstyles/About.module.scss"

const About = _ => {
  const aboutImgs = [
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1568244365/italianobros/home/marc__italiano_udqcdu.jpg",
  ]

  return (
    <Fragment>
      <section className={layoutStyles.about__section}>
        <div>
          <img
            src={aboutImgs[0]}
            alt="Marc Italiano"
            className={layoutStyles.about__img}
          />
        </div>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.heading}>
            <h3 className={layoutStyles.about__h3}>Family Owned &amp; Operated</h3>
            <hr className={layoutStyles.about__hr} />
          </div>
          <div className={layoutStyles.paragraph__section}>
            <p className={layoutStyles.paragraph}>
              Founded by Guy and Marc Italiano in 1979, while continuing today
              to be a leader in the industry and growing to achieve the creative
              demands of the future. As artisans, we are passionate about
              excellence with each new project.
            </p>
          </div>

          <div className={layoutStyles.button__container}>
            <Link
              to={"/About"}
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <button className={layoutStyles.button}>
                Discover our history
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About
