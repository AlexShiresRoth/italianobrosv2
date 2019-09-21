import React from "react"
import layoutStyles from "./styles/EmployeeMap.module.scss"

const EmployeeMap = ({ employees }) => {
  const employeeMap = employees.map((info, i) => {
    return (
      <div className={layoutStyles.about__info} key={i}>
        <img
          className={layoutStyles.about__image}
          src={info.image}
          alt={info.name}
        />
        <div className={layoutStyles.about__inner}>
          <div className={layoutStyles.about__title}>
            <h2>{info.name}</h2>
            <hr></hr>
          </div>
          <div className={layoutStyles.about__paragraph}>
            <p>{info.content}</p>
          </div>
        </div>
      </div>
    )
  })
  return <div className={layoutStyles.about__container}>{employeeMap}</div>
}

export default EmployeeMap
