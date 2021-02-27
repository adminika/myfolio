import React from "react"
import styles from "./header.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <Link to="/">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="аватар Пономарёв Николай"
          />
        </Link>
      </div>
      <h5 className={styles.name}>Пономарёв Николай</h5>
    </header>
  )
}

export default Header
