import React from "react"
import "../../style/main.css"

//TODO create a background div that contains all these divs so user can't access part of page until modal is closed
export const Modal = props => {
  const styles = {
    height: "5rem",
    margin: "2rem",
  }

  if (props.status === "success" && props.modalCase === "show") {
    return (
      <div className="modal__container">
        <div className="modal__container--contact--sent">
          <figure style={styles}>
            <img
              style={{ height: "100%" }}
              src={'https://res.cloudinary.com/snackmanproductions/image/upload/v1568323268/italianobros/logos/Black_s394t0.png'}
              alt="Logo"
            />
          </figure>
          <h2 style={{ "font-size": "2em" }}>
            Thank you! your message has been sent, and someone will be in
            contact with you soon.
          </h2>
          <button className="btn__modal" onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    )
  } else if (props.status === "error" && props.modalCase === "show") {
    return (
      <div className="modal__container">
        <div className="modal__container--contact--error">
          <figure style={styles}>
            <img
              style={{ height: "100%" }}
              src={'https://res.cloudinary.com/snackmanproductions/image/upload/v1568323268/italianobros/logos/Black_s394t0.png'}
              alt="Logo"
            />
          </figure>
          <h2 style={{ "font-size": "2em" }}>{props.response}.</h2>
          <h2 style={{ "font-size": "2em" }}>
            Please retry sending the email.
          </h2>
          <button className="btn__modal" onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    )
  } else if (props.modalCase === "hidden") {
    return <div className="modal__container--contact--closed" />
  }
}
