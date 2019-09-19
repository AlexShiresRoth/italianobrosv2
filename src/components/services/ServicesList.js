import React from "react"

import layoutStyles from "./servicestyles/ServicesList.module.scss"

import ServicesListItem from "./ServicesListItem"
import ServicesListItemDesktop from "./ServicesListItemDesktop"

export default class ServicesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobile: false,
      servicesArray: this.content,
      reduced: true,
      read: `Read More`,
      service: this.content[0],
      serviceTitle: "Venetian Plaster",
      animation: false,
      location: "",
    }
    this.changeContentSize = this.changeContentSize.bind(this)
  }

  content = [
    {
      title: "Venetian Plaster",
      content: `Venetian plaster uses natural materials to create an aesthetic wall coating.
            Plaster is applied by hand and in multiple layers to walls or ceilings to create the illusion of depth, texture and color.
            We use natural materials to achieve desired results, we consider each process and finish an original. Lime plaster is 100% green
            material with many health beneficial properties. Due to high absorbency and high PH, walls finished with lime plasters control air quality
            by absorbing carbon dioxide and stabilizing humidity at a comfortable level. Lime plasters are naturally resistant to mold and fungus. It's an 
            ideal architectural wall finish for high humidity areas like bathrooms or houses by the ocean.`,
      images: [
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/vp1_ll2lrr.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/vp2_nhpriw.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840312/italianobros/services/vp3_ljljot.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840312/italianobros/services/vp4_spjl4w.jpg",
      ],
      id: "venetian-plaster",
      button: true,
      display1: "left",
      display2: "right",
    },
    {
      title: "Plaster Mouldings",
      content: `The beauty of plaster is like no other.
            Each mold is hand poured and made to architectural specifications, from ceiling moldings, crown, and fireplace mouldings.   
            Plaster mouldings allows creative freedom with line and form to achieve soft curves, supple texture, and chalky/milky finishes.  
            `,
      images: [
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/pm1_ruw9hg.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/pm2_uafifi.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/pm3_nls7zu.jpg",
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/pm4_ik3gqx.jpg",
      ],
      id: "plaster-mouldings",
      button: false,
      display1: "right",
      display2: "left",
    },
    {
      title: "Stucco",
      content: `Speciality and conventional exterior stucco finishes for masonry or frame walls, usually composed of cement, 
            sand, and hydrated lime mixed with water and laid on wet. Stucco creates a modern  smooth flat finish or a more textual finish for architectural interest. `,
      images: [
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/s1_xw6crn.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/s2_enrtzt.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/s3_y2rn61.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/s4_xk1vhg.jpg",
      ],
      id: "stucco",
      button: false,
      display1: "left",
      display2: "right",
    },
    {
      title: "Drywall",
      content: `Filling the need of our customers from easy basic to complicated; Z beads, curved walls, tray ceilings, sound proofing, double layer..etc. `,
      images: [
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840312/italianobros/services/dw1_ehyc7z.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/dw2_n3sof7.jpg",
      ],
      id: "drywall",
      button: false,
      display1: "right",
      display2: "left",
    },
    {
      title: "Architectural Concrete",
      content: `We create original, site-specific works for our clients.  Our projects include architectural concrete countertops, fireplaces, pavers, furniture and more.   
            Architectural concrete surfaces are in great demand both as a stylistic means as well as a design form of modern architecture. `,
      images: [
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/c1_yf0njl.jpg",
        ,
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/c2_vcjr8d.jpg",
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840311/italianobros/services/c3_yrsp2s.jpg",
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1568840312/italianobros/services/c4_aji7ck.jpg",
      ],
      id: "concrete",
      button: false,
      display1: "left",
      display2: "right",
    },
  ]

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 600 })
  }

  componentDidMount() {
    this.handleWindowResize()
    this.setState({ location: window.location.href })
    window.addEventListener("resize", this.handleWindowResize)
    this.getPathName()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }
  //Change button and info based on page location
  componentDidUpdate(prevProps, prevState) {
    if (window.location.href !== prevState.location) {
      this.setState({ location: window.location.href })
      this.getPathName()
    }
  }

  //function for read more and read less button
  changeContentSize() {
    if (this.state.reduced) {
      this.setState({
        reduced: false,
        read: `Show Less`,
      })
    } else {
      this.setState({
        reduced: true,
        read: `Read More`,
      })
    }
  }

  //Set which content to render based on title
  renderService(title) {
    return this.content.map((service, i) => {
      return title === service.title
        ? this.setState({
            service: this.content[i],
            serviceTitle: service.title,
          })
        : null
    })
  }

  getPathName() {
    return this.content.map(content => {
      if (
        window.location.href.match(content.id) ||
        this.state.location.match(content.id)
      ) {
        return this.renderService(content.title)
      }
    })
  }

  render() {
    return (
      <div className={layoutStyles.servicesList__section}>
        <div className={layoutStyles.heading}>
          <h2>Professionally handcrafted</h2>
          <p>
            Plaster Wall Finishes, Plaster Mouldings, Stucco, Drywall,
            Architectural Concrete, and more.
          </p>
        </div>

        {this.state.isMobile ? (
          <ServicesListItem
            services={this.state.servicesArray}
            contentSize={this.changeContentSize}
            read={this.state.read}
            reduced={this.state.reduced}
            styles={layoutStyles}
          />
        ) : (
          <div className={layoutStyles.container__column}>
            <div className={layoutStyles.panel}>
              {this.content.map((title, i) => {
                return (
                  <button
                    key={i}
                    className={
                      this.state.serviceTitle === title.title
                        ? `${layoutStyles.button} ${layoutStyles.active__button}`
                        : layoutStyles.button
                    }
                    onClick={() => this.renderService(title.title)}
                  >
                    {title.title}
                  </button>
                )
              })}
            </div>
            <ServicesListItemDesktop
              service={this.state.service}
              contentSize={this.changeContentSize}
              read={this.state.read}
              reduced={this.state.reduced}
              styles={layoutStyles}
            />
          </div>
        )}
      </div>
    )
  }
}
