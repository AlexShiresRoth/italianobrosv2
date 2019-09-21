import React from "react"

import layoutStyles from "./styles/LocationInfo.module.scss"

const LocationInfo = () => {
  return (
    <section className={layoutStyles.address__section}>
      <div className={layoutStyles.heading}>
        <h2>Contact Us</h2>
        <p>Looking to schedule an appointment? Have any questions?</p>
      </div>
      <div className={layoutStyles.address__container}>
        <div className={layoutStyles.address__column}>
          <h3>Address</h3>
          <hr />
          <p>20 Jules CT. Bohemia, NY</p>
        </div>
        <div className={layoutStyles.address__column}>
          <h3>Phone</h3>
          <hr />
          <p>
            <a href="tel:+1-631.218.3641">631.218.3641</a>
          </p>
        </div>
        <div className={layoutStyles.address__column}>
          <h3>Email</h3>
          <hr />
          <p>
            <a href="mailto:italianoenterprise@gmail.com">
              italianoenterprise@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LocationInfo
