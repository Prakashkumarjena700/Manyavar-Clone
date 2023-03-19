import React from 'react'
import styles from "./Navbar.module.css"

import { FiSearch, FiShoppingCart } from 'react-icons/fi';

export default function HamburgerNavbar() {
    return (
        <div className={styles.hamburderNavbarContainer} >
            <div><button>=</button></div>
            <div><img src="https://static01.manyavar.com/uploads/images/Manvayar-Crest-Mohey_Horizontal_3D_logo%201.png" alt="" /></div>
            <div> <FiSearch /><FiShoppingCart /></div>
        </div>
    )
}
