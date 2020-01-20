import React from "react"
import ImageGrid from "./ImageGrid"
import { images } from "./images"
import layoutStyles from "./styles/GallerySection.module.scss"

export default class GallerySection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reduced: false,
      imagesArray: [],
    }
  }

  reduceImageArray = () => {
    let shortArr = images.slice(0, 6)
    this.setState({ imagesArray: shortArr, reduced: true })
  }

  addMoreImages = () => {
    let imagesFull = images.slice(6, images.length)

    if (this.state.reduced) {
      this.setState({
        imagesArray: [...this.state.imagesArray, ...imagesFull],
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
