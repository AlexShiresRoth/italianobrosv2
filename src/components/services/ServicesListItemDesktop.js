import React from "react"

import { ReadMoreButton } from "./ReadMoreButton"

const ServicesListItemDesktop = props => {
  return (
    <div className={props.styles.container__column} id={props.service.id}>
      <div
        className={`${props.styles.servicesList__item} ${
          props.animate ? "fadeIn" : ""
        }`}
      >
        <div className={props.styles.servicesList__item__heading}>
          <h1>{props.service.title}</h1>
          <hr />
        </div>
        {props.service.button ? (
          <div className={props.styles.paragraph}>
            <ReadMoreButton
              contentSize={props.contentSize}
              read={props.read}
              content={props.service.content}
              reduced={props.reduced}
            />
          </div>
        ) : (
          <div className={props.styles.paragraph}>
            <p>
              {props.service.content}
              {""}
            </p>
          </div>
        )}
        <div className={props.styles.services__image__grid}>
          {props.service.images.map((img, i) => {
            return (
              <figure className={props.styles.services__image} key={i}>
                <img
                  src={img}
                  alt={img}
                  className={props.styles.services__img}
                />
              </figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServicesListItemDesktop
