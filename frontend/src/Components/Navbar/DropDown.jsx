import React, { useContext } from "react"
import { Men, Women, Kids, Accessories } from "./NavItem"

import styles from "./Navbar.module.css"

import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../Context/SearchContext"


export const MenDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()


    const GoToProductPage = (ele) => {
        setGender('men')
        setBreadCrum2('Men')
        if (ele.id == 7 || ele.id == 9 || ele.id == 11 || ele.id == 13 || ele.id == 15 || ele.id == 17 || ele.id == 19 || ele.id == 5 || ele.id == 23 || ele.id == 25 || ele.id == 27 || ele.id == 29) {
            setBreadCrum3('Only ' + ele.cat)
            setCategory(ele.cat)
            setOccasion('')
            setCollection('')
            setHeading(ele.cat)
            if (ele.id == 5) {
                setHeading('Men')
            }
        } else if (ele.id == 4 || ele.id == 6 || ele.id == 8 || ele.id == 10 || ele.id == 12) {
            setBreadCrum3(ele.occasion)
            setOccasion(ele.occasion)
            setCategory('')
            setCollection('')
            setHeading(ele.occasion)
        } else if (ele.id == 20 || ele.id == 22 || ele.id == 24) {
            setBreadCrum3(ele.collections)
            setCollection(ele.collections)
            setHeading(ele.collections)
            setCategory('')
            setOccasion('')
        }
        setSize('')
        setColor('')
        navigate('/products')
    }


    return (
        <div className={styles.subMenue} onClick={() => setDropdown(!dropDown)} >
            {
                Men.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.type === 'heading' ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/rs-kurta-jacket-megamenu-creative.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/meer-kurta-set-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const WomenDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const GoToProductPage = (ele) => {
        setGender('women')
        setBreadCrum2('Women')
        if (ele.id == 5 || ele.id == 3 || ele.id == 7 || ele.id == 9 || ele.id == 11 || ele.id == 13) {
            setBreadCrum3(ele.category)
            setCategory(ele.category)
            setOccasion('')
            setCollection('')
            setHeading(ele.category)
            if (ele.id == 3) {
                setHeading('Women')
            }
        } else if (ele.id == 4 || ele.id == 6 || ele.id == 8) {
            setBreadCrum3(ele.collections)
            setCollection(ele.collections)
            setHeading(ele.collections)
            setCategory('')
            setOccasion('')
        }
        setSize('')
        setColor('')
        navigate('/products')
    }


    return (
        <div className={styles.subMenue} id={styles.PaddingForWomenSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Women.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.type === 'heading' ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/lehenga-mega-menu.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/saree-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const KidsDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setSize, setColor } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const GoToProductPage = (ele) => {
        setGender('kids')
        setBreadCrum2('Kids')
        if (ele.id == 1 || ele.id == 2) {
            setBreadCrum3('')
            setCategory('')
            setOccasion('')
            setCollection('')
            if (ele.id == 2) {
                setHeading('Kids')
            }
        } else {
            setBreadCrum3(ele.title)
            setCategory(ele.title)
            setOccasion('')
            setCollection('')
            setHeading(ele.title)
        }
        setSize('')
        setColor('')
        navigate('/products')
    }


    return (
        <div className={styles.subMenue} id={styles.PaddingForKidsSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Kids.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.id === 1 ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-jacket-megamenu-creative.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-set-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const AccessoriesDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setSize, setColor, } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const GoToProductPage = (ele) => {
        setBreadCrum2('Manyavar Accessories')
        if (ele.id !== 1) {
            setBreadCrum3(ele.title)
            setCategory(ele.title)
            setGender('')
            setOccasion('')
            setCollection('')
            setSize('')
            setColor('')
            navigate('/products')
            setHeading(ele.title)
        }

    }

    return (
        <div className={styles.subMenue} id={styles.PaddingForAccessoriesSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Accessories.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.id === 1 ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/mala-megamenu-creative.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/safa-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}