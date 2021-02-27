import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/blog.module.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "tech.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="tech" />
}

const BlogPage = () => (
  <Layout>
    <SEO title="Блог" />
    <main className={styles.container}>
      <h1>Добро пожаловать на страницу блога.</h1>
      <p>Блог находится в техническом процессе</p>
      <div>
        <Image />
      </div>
    </main>
  </Layout>
)

export default BlogPage
