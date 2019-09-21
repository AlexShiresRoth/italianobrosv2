import React from "react"
import Header from "./Header"
import AboutInfo from "./AboutInfo"
const AboutLayout = () => {
  const employees = [
    {
      name: "Guy Italiano",
      content: `Owner Guy Italiano is a well renowned drywall and plaster craftsman with over 40 yrs of experience.
            He grew by taking on challenging projects and creating his own custom work. Guy, being a self taught artisan, 
            became known for his plaster custom finishes, colors, textures and mouldings.  He continues today to create
            original work for clients looking for something that is timeless.`,
      image:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1569023889/italianobros/about/guy__italiano_jbgpxv.jpg",
      positionOne: "left",
      positionTwo: "right",
    },
    {
      name: "Marc Italiano",
      content: `Partner and owner, Marc was known for his commitment to excellence.  
            He was a tremendous businessman, brother, and human being, he leaves with us 
            an accomplished reputation.  Marc’s guiding hand, spirit and passion continues to
            live on with Italiano Bros. Enterprise, and all those who knew him.`,
      image:
        "https://res.cloudinary.com/snackmanproductions/image/upload/v1569023884/italianobros/about/marc__italiano_lqdjj2.jpg",
      positionOne: "right",
      positionTwo: "left",
    },
  ]
  return (
    <>
      <Header />
      <AboutInfo employees={employees} />
    </>
  )
}

export default AboutLayout
