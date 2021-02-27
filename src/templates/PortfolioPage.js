import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout.js"
import styles from "../styles/portfolioPage.module.css"

export const query = graphql`
  query($slug: String!) {
    portfolioJson(slug: { eq: $slug }) {
      title
      desc
      imageBig {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      path
    }
  }
`

const PortfolioPage = ({ data }) => {
  const portfolio = data.portfolioJson

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{portfolio.title}</h1>
        <h2>{portfolio.desc}</h2>
        <a href={portfolio.path} rel="noopener noreferrer" target="_blank">
          Перейти на сайт
        </a>
        <Img
          fluid={portfolio.imageBig.childImageSharp.fluid}
          alt={portfolio.title}
        />
      </div>
    </Layout>
  )
}

export default PortfolioPage
