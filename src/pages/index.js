import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProjects: {
      nodes: projects
    },
    allStrapiBlogs: {
      nodes: blogs
    }
  } = data;
  return <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="Featured" />
    <Blogs blogs={blogs} title="Blogs" showLink />
  </Layout>
}
// ...GatsbyImageSharpFluid

export const query = graphql`
{
  allStrapiProjects(sort: {fields: strapiId, order: ASC}, filter: {featured: {eq: true}}) {
    nodes {
      description
      featured
      id
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      strapiId
      title
      url
      stack {
        id
        title
      }
    }
  }
  allStrapiBlogs(sort: {fields: date, order: DESC}) {
    nodes {
      category
      content
      date(formatString: "dd/MM/yyyy")
      description
      id
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
      slug
      strapiId
    }
  }
}
`
