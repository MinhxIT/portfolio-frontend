import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }}
`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Toi la Minh</h1>
          <h4>Frontend developer</h4>
          <Link to="/contact" className="btn">Contact</Link>
          <SocialLinks className="nav-links"/>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
