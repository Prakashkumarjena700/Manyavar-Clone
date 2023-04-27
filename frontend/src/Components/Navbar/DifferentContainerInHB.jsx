import React, { useContext } from 'react'

import styles from "./Navbar.module.css"
import { SearchContext } from '../../Context/SearchContext'
import { useNavigate } from 'react-router-dom'

export const MenContainer = () => {

    const navigate = useNavigate()

    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

    const goToProductwithCat = (gen, cat) => {
        setGender(gen)
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3(cat)
        setHeading('Men' + ' ' + cat)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }
    const gotoProductwithOcc = (occ) => {
        setGender('men')
        setCategory('')
        setOccasion(occ)
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3(occ)
        setHeading('Men' + ' ' + occ)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }
    const gotoProductwithColl = (coll) => {
        setGender('men')
        setCategory('')
        setOccasion('')
        setCollection(coll)
        setBreadCrum2('Men')
        setBreadCrum3(coll)
        setHeading('Men' + ' ' + coll)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }

    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3>New Arrivals</h3>
            <h3>Shop by Product</h3>
            <p onClick={() => goToProductwithCat('men', 'Kurta')} >Kurta</p>
            <p onClick={() => goToProductwithCat('men', 'Kurta Sets')} >Kurta Sets</p>
            <p onClick={() => goToProductwithCat('men', 'Kurta Jacket Set')} >Kurta Jacket Set</p>
            <p onClick={() => goToProductwithCat('men', 'Jackets')} >Jacket</p>
            <p onClick={() => goToProductwithCat('men', 'Indo-Western')} >Indo-Western</p>
            <p onClick={() => goToProductwithCat('men', 'Sherwani')} >Sherwani</p>
            <p onClick={() => goToProductwithCat('men', 'Kurta Dhoti')} >Kurta Dhoti</p>
            <h3>Shop by Occasion</h3>
            <p onClick={() => gotoProductwithOcc('Wedding')} >Wedding</p>
            <p onClick={() => gotoProductwithOcc('Reception')} >Reception</p>
            <p onClick={() => gotoProductwithOcc('Engagement')} >Engagement</p>
            <p onClick={() => gotoProductwithOcc('Sangeet')} >Sangeet</p>
            <p onClick={() => gotoProductwithOcc('Haldi')} >Haldi</p>
            <h3>Accessories</h3>
            <p onClick={() => goToProductwithCat('men', 'Safas')} >Safas</p>
            <p onClick={() => goToProductwithCat('men', 'Malas')} >Malas</p>
            <p onClick={() => goToProductwithCat('men', 'Footwear')} >Footwear</p>
            <h3>Bottomwear</h3>
            <h3>Celebrity Style</h3>
            <p onClick={() => goToProductwithCat('men', 'Ranveer Singh Collection')} >Ranveer Singh Collection</p>
            <h3>Shop By Collection</h3>
            <p onClick={() => gotoProductwithColl('Festive')}  >Festive</p>
            <p onClick={() => gotoProductwithColl('Formal')} >Formal</p>
            <p onClick={() => gotoProductwithColl('Classic')} >Classic</p>

        </div>
    )
}

export const WomenContainer = () => {
    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3> Shop by Product</h3>
            <p>View All</p>
            <p>Lehenga</p>
            <p>Gown</p>
            <p>Saree</p>
            <p>Stitched Suits</p>
            <p>Kurti / Suit</p>
            <h3>Shop by Collection</h3>
            <p>Bridal</p>
            <p>Casual</p>
            <p>Festive</p>
        </div>
    )
}


export const KidsContainer = () => {
    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3>View All</h3>
            <p>Kurta</p>
            <p>Kurta Jacket</p>
            <p>Indo-Western</p>
            <p>Juti</p>
            <h3>Occasion</h3>
        </div>
    )
}

export const AccessoriesContainer = () => {
    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3>Shop by Product</h3>
            <p>View All</p>
            <p>Juti</p>
            <p>Brooch</p>
            <p>Pocket Square</p>
            <p>Safa</p>
            <p>Mala</p>
            <p>Bandanna</p>
            <p>Sherwani Inner Kurta</p>
            <p>Socks</p>
        </div>
    )
}
