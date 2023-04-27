import React, { useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import { useNavigate } from 'react-router-dom'

import maleUserLogo from "../Assets/maleUserLogo.webp"
import manyavarFullLogo from "../Assets/manyavarFullLogo.webp"

import AddProduct from './AddProduct'
import Inventory from './Inventory'
import Users from './Users'
import Dashboard from './Dashboard'

import { MdOutlineDashboard, MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import { RiAdminLine } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { HiOutlineUsers } from 'react-icons/hi'
import Admins from './Admins'
import Cart from './Cart'
import Wishlist from './Wishlist'

import Cookies from 'js-cookie';

export default function AdminDashboard() {

  const user = JSON.parse(localStorage.getItem('Manyavaruser'))

  const [dashBoard, setDashBoard] = useState(true)
  const [addProduct, setAddProduct] = useState(false)
  const [inventory, setInventory] = useState(false)
  const [users, setUsers] = useState(false)
  const [admins, setAdmins] = useState(false)
  const [cart, setCart] = useState(false)
  const [wishlist, setWishlist] = useState(false)

  const navigate = useNavigate()

  const logoutAdmin = () => {
    Cookies.remove("isAuth");
    Cookies.remove("token");
    Cookies.remove("role");
    navigate('/login')
  }

  return (
    <div className={styles.AdminDashboardContainer} >
      <div className={styles.ADMenueContainer}  >
        <img onClick={() => navigate('/')} src={manyavarFullLogo} alt="" />
        <div>
          <div>
            <img style={{ borderRadius: '50%' }} src={user.avatar || maleUserLogo} alt="" />
          </div>
          <div>
            <h4><b>{user.firstname + ' ' + user.lastname}</b></h4>
            <h4>{user.email}</h4>
            <h4 className={styles.logoutBtn} onClick={logoutAdmin}>Log out</h4>
          </div>
        </div>
        <div>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(true)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
          }}
            className={dashBoard && styles.activeonAdmin}
          ><p>Dashboard</p><span><MdOutlineDashboard /></span> </button>
          <button onClick={() => {
            setAddProduct(true)
            setDashBoard(false)
            setInventory(false)
            setAdmins(false)
            setUsers(false)
            setCart(false)
            setWishlist(false)
          }}
            className={addProduct && styles.activeonAdmin}
          ><p>Add Product</p><span><MdOutlineDashboardCustomize /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(true)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
          }}
            className={inventory && styles.activeonAdmin}
          ><p>Inventory</p><span><FaList /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(true)
            setAdmins(false)
            setCart(false)
            setWishlist(false)
          }}
            className={users && styles.activeonAdmin}
          ><p>Users</p><span><HiOutlineUsers /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(true)
            setCart(false)
            setWishlist(false)
          }}
            className={admins && styles.activeonAdmin}
          ><p>Admins</p><span><RiAdminLine /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(true)
            setWishlist(false)
          }}
            className={cart && styles.activeonAdmin}
          ><p>Cart</p><span><AiOutlineShoppingCart /></span> </button>
          <button onClick={() => {
            setAddProduct(false)
            setDashBoard(false)
            setInventory(false)
            setUsers(false)
            setAdmins(false)
            setCart(false)
            setWishlist(true)
          }}
            className={wishlist && styles.activeonAdmin}
          ><p>Wish List</p><span><AiOutlineHeart /></span> </button>
        </div>
      </div>
      {
        dashBoard ? <Dashboard /> :
          addProduct ? <AddProduct /> :
            inventory ? <Inventory /> :
              users ? <Users /> :
                admins ? <Admins /> :
                  cart ? <Cart /> :
                    wishlist ? <Wishlist /> :
                      <div></div>
      }
    </div>
  )
}
