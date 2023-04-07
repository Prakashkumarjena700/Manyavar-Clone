import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from "./Styles/AdminDashboard.module.css"
import { getProducts } from '../Redux/admin/action'

import mehelLogo from "../Assets/mehelLogo.webp"

export default function Inventory() {

  const dispatch = useDispatch()

  const products = useSelector((store) => store.adminManager.productsList)

  useEffect(() => {
    getProducts(dispatch)
  }, [])

  console.log(products)

  return (
    <div className={styles.InventoryContainer} >
      <img src={mehelLogo} alt="" />
      <div className={styles.InventoryCardContainer} >
        <p>card</p>
        <p>card</p>
        <p>card</p>
        <p>card</p>
        <p>card</p>
      </div>
    </div>
  )
}
