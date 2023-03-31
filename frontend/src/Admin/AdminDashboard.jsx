import React, { useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import maleUserLogo from "../Assets/maleUserLogo.webp"
import manyavarFullLogo from "../Assets/manyavarFullLogo.webp"

import AddProduct from './AddProduct'
import Inventory from './Inventory'
import Users from './Users'
import Dashboard from './Dashboard'

import { MdOutlineDashboard, MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'

export default function AdminDashboard() {

  const [dashBoard, setDashBoard] = useState(true)
  const [addProduct, setAddProduct] = useState(false)
  const [inventory, setInventory] = useState(false)
  const [users, setUsers] = useState(false)

  return (
    <div className={styles.AdminDashboardContainer} >
      <div className={styles.ADMenueContainer}  >
        <img src={manyavarFullLogo} alt="" />
        <div>
          <div>
            <img src={maleUserLogo} alt="" />
          </div>
          <div>
            <h4><b>First Name</b></h4>
            <h4>admin@gmail.com</h4>
          </div>
        </div>
        <div>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(true)
            setInventory(false)
            setUsers(false)
          }}
            className={dashBoard && styles.activeonAdmin}
          ><p>Dashboard</p><span><MdOutlineDashboard /></span> </button>
          <button onClick={() => {
            setAddProduct(true)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
          }}
            className={addProduct && styles.activeonAdmin}
          ><p>Add Product</p><span><MdOutlineDashboardCustomize /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(true)
            setUsers(false)
          }}
            className={inventory && styles.activeonAdmin}
          ><p>Inventory</p><span><FaList /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(true)
          }}
            className={users && styles.activeonAdmin}
          ><p>Users</p><span><HiOutlineUsers /></span> </button>
        </div>
      </div>
      {
        dashBoard ? <Dashboard /> :
          addProduct ? <AddProduct /> :
            inventory ? <Inventory /> :
              users ? <Users /> :
                <div></div>
      }
    </div>
  )
}
