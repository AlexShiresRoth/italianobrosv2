import React from "react"
import { Link } from "gatsby"

import layoutStyles from "./servicestyles/Services.module.scss"

const Services = () => {
  const servicesArray = [
    { title: "custom architectural concrete", img: "c1" },
    { title: "venetian plaster", img: "c2" },
    { title: "stucco", img: "c3" },
    { title: "dryWall", img: "c4" },
  ]

  return (
    <section className={layoutStyles.services__section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.heading}>
          <h3 className={layoutStyles.services__h3}>
            Professionally Handcrafted
          </h3>
          <hr className={layoutStyles.services__hr} />
        </div>
        <div className={layoutStyles.paragraph__section}>
          <p className={layoutStyles.paragraph}>
            Our experts are highly skilled in services for high end residential,
            large volume residential, as well as commercial applications of
            sheetrock, plaster, exterior stucco systems and more.
          </p>
        </div>
        <div className={layoutStyles.button__container}>
          <Link
            to={"/Services"}
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <button className={layoutStyles.button}>Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
