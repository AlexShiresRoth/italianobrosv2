import React, { Fragment } from "react"
import axios from "axios"
import Media from "react-media"

import { Modal } from "./Modal"
import layoutStyles from "./Contact.module.scss"

//TODO dry up this component
export default class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobile: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      sent: "",
      openModal: "hidden",
    }
  }

  //will display a modal once user sends email
  modalClose = () => {
    if (this.state.openModal === "show") {
      this.setState({ openModal: "hidden" })
      this.props.onClick()
    }
  }

  handleNameInput = event => {
    let firstName = event.target.value
    if (firstName === "") {
      this.setState({ firstName: null })
    } else {
      this.setState({ firstName })
    }
  }
  handleLastNameInput = event => {
    let lastName = event.target.value
    if (lastName === "") {
      this.setState({ lastName: null })
    } else {
      this.setState({ lastName })
    }
  }
  handleEmailInput = event => {
    let email = event.target.value
    if (email === "") {
      this.setState({ email: null })
    } else {
      this.setState({ email })
    }
  }
  handlePhoneInput = event => {
    let phone = event.target.value
    if (phone === "") {
      this.setState({ phone: null })
    } else {
      this.setState({ phone })
    }
  }
  handleMessageInput = event => {
    let message = event.target.value
    if (message === "") {
      this.setState({ message: null })
    } else {
      this.setState({ message })
    }
  }

  formSubmit = async e => {
    e.preventDefault()

    const info = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    }

    return await axios({
      method: "post",
      url: `http://www.italianobrosenterprise.com/api/send-email?&email=${info.email}&firstName=${info.firstName}&lastName=${info.lastName}&phone=${info.phone}&message=${info.message}`,
      data: {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
    })
      .then(res => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          sent: "success",
          openModal: "show",
          response: res,
        })
        console.log(res)
      })
      .catch(err => {
        this.setState({
          sent: "error",
          openModal: "show",
          response: err.message,
        })
        console.log(err.message)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isMobile !== prevProps.isMobile) {
      this.setState({ isMobile: this.props.isMobile })
    }
  }

  render() {
    return (
      <Fragment>
        <Media query="(max-width: 600px)">
          {matches =>
            matches ? (
              <div className={layoutStyles.cf__top__tier}>
                <div
                  className={layoutStyles.cf__bottom}
                  onClick={this.props.onClick}
                >
                  <div className={layoutStyles.cf__heading}>
                    <h2 className={layoutStyles.cf__heading__h2}>
                      Get A Quote
                    </h2>
                  </div>
                </div>
                <Modal
                  status={this.state.sent}
                  onClick={this.modalClose}
                  modalCase={this.state.openModal}
                  closeContact={this.props.onClick}
                  response={this.state.response}
                />
                <div
                  className={`
              ${
                !this.props.toggled
                  ? layoutStyles.hidden
                  : layoutStyles.contact__form
              }`}
                >
                  <form
                    className={` 
                ${
                  !this.props.toggled
                    ? layoutStyles.hidden
                    : layoutStyles.cf__form
                }`}
                    onSubmit={this.formSubmit}
                  >
                    <div className={layoutStyles.cf__input__column}>
                      <label
                        className={layoutStyles.cf__label}
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className={layoutStyles.cf__input}
                        name="firstName"
                        id="first-name"
                        type="text"
                        placeholder="Enter First Name"
                        required
                        value={this.state.firstName}
                        onChange={this.handleNameInput}
                      />
                    </div>
                    <div className={layoutStyles.cf__input__column}>
                      <label
                        className={layoutStyles.cf__label}
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className={layoutStyles.cf__input}
                        name="lastName"
                        id="last-name"
                        type="text"
                        placeholder="Enter Last Name"
                        value={this.state.lasttName}
                        onChange={this.handleLastNameInput}
                        required
                      />
                    </div>
                    <div className={layoutStyles.cf__input__column}>
                      <label className={layoutStyles.cf__label} htmlFor="email">
                        Email
                      </label>
                      <input
                        className={layoutStyles.cf__input}
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleEmailInput}
                        required
                      />
                    </div>
                    <div className={layoutStyles.cf__input__column}>
                      <label className={layoutStyles.cf__label} htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className={layoutStyles.cf__input}
                        name="phone"
                        id="phone"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Enter Phone"
                        value={this.state.phone}
                        onChange={this.handlePhoneInput}
                        required
                      />
                    </div>
                    <div className={layoutStyles.cf__input__column}>
                      <label
                        className={layoutStyles.cf__label}
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <input
                        className={layoutStyles.cf__input}
                        name="message"
                        id="message"
                        type="text"
                        placeholder="Enter Message"
                        value={this.state.message}
                        onChange={this.handleMessageInput}
                        required
                      />
                    </div>
                    <div className={layoutStyles.cf__input__column}>
                      <button
                        className={layoutStyles.cf__button}
                        onSubmit={this.formSubmit}
                      >
                        Get A Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="navbar__container--top-tier--desktop">
                <Modal
                  status={this.state.sent}
                  onClick={this.modalClose}
                  modalCase={this.state.openModal}
                  closeContact={this.props.onClick}
                  response={this.state.response}
                />
                <div className="navbar__container--top-tier--desktop--left">
                  <div className="navbar__container--top-tier--desktop--left--inner">
                    <h2>Broad Vision.</h2>
                    <h2>Careful Thought.</h2>
                    <h2>Handcrafted Design.</h2>
                  </div>
                </div>
                <div className="navbar__container--top-tier--desktop--right">
                  <form
                    className="contact__form--form"
                    onSubmit={this.formSubmit}
                  >
                    <div className="contact__form--form--left">
                      <div className="input-column">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          name="firstName"
                          id="first-name"
                          type="text"
                          placeholder="Enter First Name"
                          required
                          value={this.state.firstName}
                          onChange={this.handleNameInput}
                        />
                      </div>
                      <div className="input-column">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          name="lastName"
                          id="last-name"
                          type="text"
                          placeholder="Enter Last Name"
                          value={this.state.lasttName}
                          onChange={this.handleLastNameInput}
                          required
                        />
                      </div>
                      <div className="input-column">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          id="email"
                          type="text"
                          placeholder="Enter Email"
                          value={this.state.email}
                          onChange={this.handleEmailInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="contact__form--form--right">
                      <div className="input-column">
                        <label htmlFor="phone">Phone</label>
                        <input
                          name="phone"
                          id="phone"
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="555-555-5555"
                          value={this.state.phone}
                          onChange={this.handlePhoneInput}
                          required
                        />
                      </div>
                      <div className="input-column">
                        <label htmlFor="message">Message</label>
                        <input
                          name="message"
                          id="message"
                          type="text"
                          placeholder="Enter Message"
                          value={this.state.message}
                          onChange={this.handleMessageInput}
                          required
                        />
                      </div>
                      <div className="input-column">
                        <button onSubmit={this.formSubmit}>Get A Quote</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )
          }
        </Media>
      </Fragment>
    )
  }
}
