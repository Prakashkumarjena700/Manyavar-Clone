import React from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import mehelLogo from "../Assets/mehelLogo.webp"

export default function Inventory() {
  return (
    <div className={styles.InventoryContainer} >
      <img src={mehelLogo} alt="" />
      Inventory
    </div>
  )
}
