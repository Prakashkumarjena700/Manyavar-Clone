import React from 'react'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../UserProfile/UserProfile.module.css'

export default function UserProfile() {
    const [profile, setProfile] = useState(true)
    const [address, setAddress] = useState(false)
    const [order, setOrder] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [password, setPassword] = useState(false)

    return (
        <div className={styles.profile_main_container}>
            <Navbar />
            <p className={styles.profile_root_name}>HOME / MY ACCOUNT</p>
            <div className={styles.profile_container_1}>
                <h1>My Account</h1>
                <p>HELLO, MIRSAT</p>
                <p>From your My Account you have the ability to view your recent account activity and update your account information.</p>
            </div>
            <div className={styles.profile_container_2}>
                <div className={styles.profile_con2_child_1}>
                    <button onClick={() => {
                        setProfile(true)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(false)
                    }}>PROFILE</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(true)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(false)
                    }}>MY ADDRESS</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(true)
                        setWishlist(false)
                        setPassword(false)
                    }}>MY ORDERS</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(true)
                        setPassword(false)
                    }}>MY WISHLIST</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(true)
                    }}>CHANGE PASSWORD</button>

                </div>
                <div className={styles.profile_con2_child_2}>
                    {/* ========Profile======== */}
                    {profile ? <div>
                        p
                    </div> : ""}
                    {/* ========Profile-End======== */}

                    {address ? <div>ADDRESS</div> : ""}
                    {order ? <div>ORDERS</div> : ""}
                    {wishlist ? <div>WISHLIST</div> : ""}
                    {password ? <div>PASSWORD</div> : ""}
                </div>
            </div>
        </div>
    )
}
