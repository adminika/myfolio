import React from "react"

import Header from "./Header/Header"
import Menu from "./Menu/Menu"
import styles from "./sidebar.module.css"

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.column}>
        <Header />
        <Menu />
        <footer>
          © {new Date().getFullYear()} Сделано на
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </aside>
  )
}

export default Sidebar
