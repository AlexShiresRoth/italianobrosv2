import React from "react"
import ImageGrid from "./ImageGrid"

import layoutStyles from "./styles/GallerySection.module.scss"

export default class GallerySection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reduced: false,
      imagesArray: this.images,
    }
  }

  images = [
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018609/italianobros/ourwork/works-section-img3_laaiym.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018609/italianobros/ourwork/works-section-img2_gq0ws4.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018609/italianobros/ourwork/works-section-img16_qfps3w.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018609/italianobros/ourwork/works-section-img1_uev5fp.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018609/italianobros/ourwork/works-section-img10_fq0ce1.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018608/italianobros/ourwork/works-section-img11_uxtvws.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018608/italianobros/ourwork/works-section-img15_zzurjm.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018608/italianobros/ourwork/works-section-img14_xyishd.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018608/italianobros/ourwork/works-section-img12_mlslun.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018606/italianobros/ourwork/works-section-img18_tgi2dn.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018607/italianobros/ourwork/works-section-img13_j9uyoi.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018607/italianobros/ourwork/works-section-img5_uvg66j.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018606/italianobros/ourwork/works-section-img6_prqs7s.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018606/italianobros/ourwork/works-section-img17_trepty.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018606/italianobros/ourwork/works-section-img8_rtqkma.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018606/italianobros/ourwork/works-section-img7_cp3i1k.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018605/italianobros/ourwork/works-section-img4_svhtm9.jpg",
    "https://res.cloudinary.com/snackmanproductions/image/upload/v1569018605/italianobros/ourwork/works-section-img9_rdwbeq.jpg",
  ]

  reduceImageArray = () => {
    let shortArr = this.state.imagesArray.slice(0, 6)
    this.setState({ imagesArray: shortArr, reduced: true })
  }
  addMoreImages = () => {
    let images = this.images.slice(6, this.images.length)

    if (this.state.reduced) {
      this.setState({
        imagesArray: [...this.state.imagesArray, ...images],
        reduced: false,
      })
    }
    if (!this.state.reduced) {
      this.reduceImageArray()
      this.setState({ reduced: true })
    }
  }

  componentDidMount() {
    this.reduceImageArray()
  }

  render() {
    return (
      <section className={layoutStyles.gallery__section}>
        <div className={layoutStyles.heading}>
          <h2>Best In Class</h2>
          <p>
            Being the forerunner in complete interior wall and exterior stucco
            systems for over 30 years, we give you our gallery of past projects
            &amp; experience.
          </p>
        </div>
        <ImageGrid images={this.state.imagesArray} />
        <button className={layoutStyles.button} onClick={this.addMoreImages}>
          {this.state.reduced ? `Show More` : `Show Less`}
        </button>
      </section>
    )
  }
}
