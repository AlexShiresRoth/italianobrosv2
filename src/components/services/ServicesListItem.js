import React from "react"
import { ReadMoreButton } from "./ReadMoreButton"

const ServicesListItem = props => {
  const renderServices = props.services.map((service, i) => {
    const renderImages = service.images.map((img, i) => {
      return (
        <figure className={props.styles.image__container} key={i}>
          <img
            className={props.styles.image__container__img}
            src={img}
            alt="architecture"
          />
        </figure>
      )
    })
    return (
      <div className={props.styles.servicesList__item} id={service.id} key={i}>
        <div className={props.styles.image__background}>
          <div className={props.styles.container}>{renderImages}</div>
        </div>
        <div className={props.styles.servicesList__item__heading}>
          <h3>{service.title}</h3>
          <hr />
        </div>
        {service.button ? (
          <div className={props.styles.paragraph}>
            <ReadMoreButton
              contentSize={props.contentSize}
              read={props.read}
              content={service.content}
              reduced={props.reduced}
            />
          </div>
        ) : (
          <div className={props.styles.paragraph}>
            <p>
              {service.content}
              {""}
            </p>
          </div>
        )}
      </div>
    )
  })

  return <>{renderServices}</>
}

export default ServicesListItem
