import React, { useEffect, useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"
import { CChart } from '@coreui/react-chartjs'

import mehelLogo from "../Assets/mehelLogo.webp"
import { getProducts, getUser, getAdmin } from '../Redux/admin/action'

import { RiAdminLine } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { BsListCheck } from "react-icons/bs"
import { MdShoppingCartCheckout } from 'react-icons/md'
import { HiOutlineUsers } from 'react-icons/hi'

import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard() {
    const [usersCount, setUserCount] = useState(0)
    const [adminCount, setAdminCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const [wishListCount, setWishListCount] = useState(0)

    const adminList = useSelector((store) => store.adminManager)

    const dispatch = useDispatch()

    useEffect(() => {
        getProducts(dispatch)
        getUser(dispatch)
        getAdmin(dispatch)
    }, [])

    return (
        <div className={styles.DashboardContainer} >
            <img style={{ marginTop: '20px' }} src={mehelLogo} alt="" />

            <div className={styles.DashboardContainerFirstDiv} >
                <div>
                    <div>
                        <h2>Users <HiOutlineUsers /></h2>
                        <p>{adminList.usersList.length}</p>
                    </div>
                    <div>
                        <h2>Admin<RiAdminLine /></h2>
                        <p>{adminList.adminList.length}</p>
                    </div>
                    <div>
                        <h2>Produts<BsListCheck /></h2>
                        <p>{adminList.productsList.length}</p>
                    </div>
                    <div>
                        <h2>Cart<AiOutlineShoppingCart /></h2>
                        <p>{cartCount}</p>
                    </div>
                    <div>
                        <h2>Wish List<AiOutlineHeart /></h2>
                        <p>{wishListCount}</p>
                    </div>
                    <div>
                        <h2>Check out<MdShoppingCartCheckout /></h2>
                        <p>{wishListCount}</p>
                    </div>

                </div>
                <div>
                    <CChart className={styles.chart}
                        type="polarArea"
                        data={{
                            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue', 'Pink'],
                            datasets: [
                                {
                                    data: [11, 9, 7, 3, 14, 10],
                                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB', 'pink'],
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
