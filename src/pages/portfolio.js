import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/portfolio.module.css"

export const query = graphql`
  query {
    allPortfolioJson {
      nodes {
        id
        slug
        title
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Portfolio = ({ data }) => {
  const portfolio = data.allPortfolioJson

  return (
    <Layout>
      <SEO title="Портфолио" />
      <main className={styles.container}>
        <h1>Портфолио</h1>
        <div className={styles.inner}>
          {portfolio.nodes.map(product => (
            <Link to={`/portfolio/${product.slug}`} key={product.id}>
              <div className={styles.card}>
                <div className={styles.imgbox}>
                  <Img
                    fluid={product.image.childImageSharp.fluid}
                    alt={product.title}
                  />
                </div>
                <div className={styles.cardtext}>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Portfolio

/* <Link to={`/portfolio/${product.slug}`}>{product.title}</Link> */
