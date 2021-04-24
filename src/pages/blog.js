import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({ data }) => {
  const { allStrapiBlogs: {
    nodes: blogs
  } } = data;
  return <Layout>
    <Blogs blogs={blogs} title="Blog" />
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs {
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

export default Blog
