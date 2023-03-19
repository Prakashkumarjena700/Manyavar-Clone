import React from "react"
import { Men, Women, Kids, Accessories } from "./NavItem"

import styles from "./Navbar.module.css"

export const MenDropDown = () => {

    const [dropDown, setDropdown] = React.useState(false)


    return (
        <div className={styles.subMenue} onClick={() => setDropdown(!dropDown)} >
            {
                Men.map((ele) => <p key={ele.id} className={ele.type === 'heading' ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/rs-kurta-jacket-megamenu-creative.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/meer-kurta-set-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const WomenDropDown = () => {

    const [dropDown, setDropdown] = React.useState(false)


    return (
        <div className={styles.subMenue} id={styles.PaddingForWomenSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Women.map((ele) => <p key={ele.id} className={ele.type === 'heading' ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/lehenga-mega-menu.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/saree-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const KidsDropDown = () => {

    const [dropDown, setDropdown] = React.useState(false)


    return (
        <div className={styles.subMenue} id={styles.PaddingForKidsSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Kids.map((ele) => <p key={ele.id} className={ele.id === 1 ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-jacket-megamenu-creative.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-set-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const AccessoriesDropDown = () => {

    const [dropDown, setDropdown] = React.useState(false)


    return (
        <div className={styles.subMenue}  id={styles.PaddingForAccessoriesSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Accessories.map((ele) => <p key={ele.id} className={ele.id === 1 ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/mala-megamenu-creative.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/safa-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}