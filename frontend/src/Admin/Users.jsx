import React from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import mehelLogo from "../Assets/mehelLogo.webp"

export default function Users() {
    return (
        <div className={styles.UsersContainer} >
            <img src={mehelLogo} alt="" />
            Users
        </div>
    )
}
