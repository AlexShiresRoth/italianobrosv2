import React from "react"

import layoutStyles from "./contactstyles/Contact.module.scss"

const ContactForm = ({
  inputs,
  toggled,
  formSubmit,
  handleInputs,
  loading,
}) => {
  const renderInputs = inputs.map((input, i) => {
    return (
      <div key={i} className={layoutStyles.cf__input__column}>
        <label className={layoutStyles.cf__label} htmlFor={input.title}>
          {input.label}
        </label>
        <input
          className={layoutStyles.cf__input}
          name={input.title}
          id={input.title}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={e => handleInputs(e)}
          required
        />
      </div>
    )
  })

  return (
    <form
      className={toggled ? layoutStyles.cf__form : layoutStyles.hidden}
      onSubmit={formSubmit}
    >
      <div className={layoutStyles.cf__input__column}>
        {renderInputs}
        <button className={layoutStyles.cf__button} onSubmit={formSubmit}>
          {loading ? "Sending..." : "Get A Quote"}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
