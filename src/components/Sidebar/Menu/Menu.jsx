import React from "react"
import { Link } from "gatsby"

import styles from "./menu.module.css"

const menuLink = [
  { id: 1, value: "Главная", href: "/" },
  { id: 2, value: "Портфолио", href: "/portfolio" },
  { id: 3, value: "Блог", href: "/blog" },
]

const listItems = menuLink.map(item => (
  <li key={item.id}>
    <Link to={item.href}>{item.value}</Link>
  </li>
))

function Menu({ mobile, active, setActive }) {
  const MobileActive = styles.mobile + " " + styles.active
  const LineTop = styles.line + " " + styles.lineTop
  const LineBottom = styles.line + " " + styles.lineBottom
  if (mobile) {
    return (
      <div className={active ? MobileActive : styles.mobile}>
        <nav className={styles.menu}>
          <ul>{listItems}</ul>
          <button className={styles.button} onClick={() => setActive(!active)}>
            <span className={active ? LineTop : styles.line}></span>
            <span className={active ? LineBottom : styles.line}></span>
          </button>
        </nav>
        <div className={styles.circle}></div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <ul>{listItems}</ul>
      </nav>
    </div>
  )
}

export default Menu
