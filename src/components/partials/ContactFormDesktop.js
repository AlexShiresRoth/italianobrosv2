import React from "react"

import wideScreenLayoutStyles from "./contactstyles/ContactDesktop.module.scss"

const ContactFormDesktop = props => {
  const renderInputs = props.inputs.map((input, i) => {
    return (
      <div className={wideScreenLayoutStyles.cf__input__column}>
        <label
          className={wideScreenLayoutStyles.cf__dt__label}
          htmlFor={input.title}
        >
          {input.label}
        </label>
        <input
          className={wideScreenLayoutStyles.cf__dt__input}
          name={input.title}
          id={input.title}
          key={i}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={e => props.handleInputs(e)}
          required
        />
      </div>
    )
  })

  return (
    <div className={wideScreenLayoutStyles.nb__dt__right}>
      <form
        className={wideScreenLayoutStyles.cf__dt__form}
        onSubmit={props.formSubmit}
      >
        {renderInputs}
        <button
          className={wideScreenLayoutStyles.cf__dt__button}
          onSubmit={props.formSubmit}
        >
          Get A Quote
        </button>
      </form>
    </div>
  )
}

export default ContactFormDesktop
