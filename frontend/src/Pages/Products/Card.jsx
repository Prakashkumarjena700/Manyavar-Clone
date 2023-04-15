import React from 'react'
import { useState } from 'react'
import styles from './Products.module.css'

export default function Card({ image1, image2 }) {
    const [hover, setHover] = useState(false)
    // console.log(hover)

    const hoverIMG = () => {
        setHover(true)
    }
    const normalIMG = () => {
        setHover(false)
    }

    return (
        // <div className={styles.product_card}>
        //     <img src={hover ? image2 : image1} alt="" onMouseEnter={hoverIMG} onMouseLeave={normalIMG} />
        // </div>
        <div className={styles.HomeCardImg_Div}>
            <img src={hover ? image2 : image1} alt="" onMouseEnter={hoverIMG} onMouseLeave={normalIMG} />
        </div>
    )
}




