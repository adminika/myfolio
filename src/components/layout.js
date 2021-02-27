import React, { useState } from "react"
import PropTypes from "prop-types"

import "../styles/globals.css"
import styles from "../styles/layout.module.css"
import Sidebar from "./Sidebar/Sidebar"
import Menu from "./Sidebar/Menu/Menu"

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.row}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
          <Menu active={menuActive} setActive={setMenuActive} mobile />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
