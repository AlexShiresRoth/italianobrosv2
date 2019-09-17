import React, { Fragment } from "react"
import axios from "axios"

import { Modal } from "./Modal"
import ContactForm from "./ContactForm"
import ContactFormDesktop from "./ContactFormDesktop"
import layoutStyles from "./contactstyles/Contact.module.scss"
import wideScreenStyles from "./contactstyles/ContactDesktop.module.scss"

//TODO dry up this component
//TODO render out desktop contact form component!
export default class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      sent: "",
      openModal: "hidden",
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  //will display a modal once user sends email
  modalClose = () => {
    if (this.state.openModal === "show") {
      this.setState({ openModal: "hidden" })
      this.props.onClick()
    }
  }

  handleInputs = event => {
    if (event.target.value === "") {
      this.setState({ [event.target.name]: null })
    }
    this.setState({
      [event.target.name]: [event.target.value],
    })
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

  render() {
    const inputs = [
      {
        title: "firstName",
        label: "First Name",
        placeholder: "Enter First Name",
        type: "text",
        value: this.state.firstName,
      },
      {
        title: "lastName",
        label: "Last Name",
        placeholder: "Enter Last Name",
        type: "text",
        value: this.state.lastName,
      },
      {
        title: "email",
        label: "Email",
        placeholder: "Enter Your Email",
        type: "email",
        value: this.state.email,
      },
      {
        title: "phone",
        label: "Phone #",
        placeholder: "Enter your phone #",
        type: "tel",
        value: this.state.phone,
      },
      {
        title: "message",
        label: "Message",
        placeholder: "Enter your message",
        type: "text",
        value: this.state.message,
      },
    ]
    return (
      <Fragment>
        <div
          className={
            this.props.isMobile
              ? layoutStyles.cf__top__tier
              : `${
                  this.props.toggled ? wideScreenStyles.nb__dt__top__tier : null
                }`
          }
        >
          {this.props.isMobile ? (
            <div
              className={layoutStyles.cf__bottom}
              onClick={this.props.onClick}
            >
              <div className={layoutStyles.cf__heading}>
                <h2 className={layoutStyles.cf__heading__h2}>Get A Quote</h2>
              </div>
            </div>
          ) : null}
          <Modal
            status={this.state.sent}
            onClick={this.modalClose}
            modalCase={this.state.openModal}
            closeContact={this.props.onClick}
            response={this.state.response}
          />
          {this.props.isMobile ? null : (
            <div className={wideScreenStyles.nb__dt__left}>
              <div className={wideScreenStyles.nb__dt__inner}>
                <h2 className={wideScreenStyles.nb__dt__h2}>Broad Vision.</h2>
                <h2 className={wideScreenStyles.nb__dt__h2}>
                  Careful Thought.
                </h2>
                <h2 className={wideScreenStyles.nb__dt__h2}>
                  Handcrafted Design.
                </h2>
              </div>
            </div>
          )}
          <div
            className={
              this.props.isMobile
                ? ` 
                ${
                  !this.props.toggled
                    ? layoutStyles.hidden
                    : layoutStyles.contact__form
                }`
                : `${
                    !this.props.toggled
                      ? wideScreenStyles.hidden
                      : wideScreenStyles.nb__dt__right
                  }`
            }
          >
            {this.props.isMobile ? (
              <ContactForm
                formSubmit={this.formSubmit}
                inputs={inputs}
                handleInputs={this.handleInputs}
              />
            ) : (
                <ContactFormDesktop
                  formSubmit={this.formSubmit}
                  inputs={inputs}
                  handleInputs={this.handleInputs}
                />
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}
