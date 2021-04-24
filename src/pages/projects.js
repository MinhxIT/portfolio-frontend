import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

export const query = graphql`
{allStrapiProjects {
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
  }}
`

const ProjectsPage = ({
  data: {
    allStrapiProjects: {
      nodes: projects
    } }
}) => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="All project" />
    </section>
  </Layout>
}

export default ProjectsPage