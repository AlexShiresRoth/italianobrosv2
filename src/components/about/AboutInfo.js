import React from "react"
import EmployeeMap from "./EmployeeMap.js"
import layoutStyles from "./styles/AboutInfo.module.scss"

const AboutInfo = ({ employees }) => {
  return (
    <section className={layoutStyles.about__section}>
      <div className={layoutStyles.heading}>
        <h2>Family Owned &amp; Operated</h2>
        <p>
          Started by two brothers in 1979, Italiano Bros. Enterprise has become
          the most recognized leader in wall finishes on Long Island.
        </p>
      </div>
      <EmployeeMap employees={employees} />
    </section>
  )
}

export default AboutInfo
