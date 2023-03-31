import React from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import mehelLogo from "../Assets/mehelLogo.webp"

export default function AddProduct() {
  return (
    <div className={styles.AddProductContainer}>
      <img src={mehelLogo} alt="" />
      AddProduct
    </div>
  )
}
