import React from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import maleUserLogo from "../Assets/maleUserLogo.webp"

export default function AdminDashboard() {
  return (
    <div className={styles.AdminDashboardContainer} >
      <div className={styles.ADMenueContainer}  >
        <div>
          <img src={maleUserLogo} alt="" />
          <h2>First Name</h2>
          <p>admin@gmail.com</p>
        </div>
      </div>
      <div className={styles.ADResultContainer} >
        result
      </div>
    </div>
  )
}
