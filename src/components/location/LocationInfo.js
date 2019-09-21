import React from "react"

const LocationInfo = () => {
  return (
    <section className="address__container">
      <div className="mobile__heading-center">
        <h2>Contact Us</h2>
        <div className="paragraph__section--center">
          <p>Looking to schedule an appointment? Have any questions?</p>
        </div>
      </div>
      <div className="address__container--address">
        <div className="address__container--address-column">
          <h3>Address</h3>
          <hr />
          <p>20 Jules CT. Bohemia, NY</p>
        </div>
        <div className="address__container--address-column">
          <h3>Phone</h3>
          <hr />
          <p>
            <a href="tel:+1-631.218.3641">631.218.3641</a>
          </p>
        </div>
        <div className="address__container--address-column">
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
