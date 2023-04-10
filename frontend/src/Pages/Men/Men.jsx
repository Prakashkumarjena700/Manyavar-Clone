import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import styles from './Men.module.css'
import Footer from '../../Components/Footer/Footer'

export default function Men() {
    return (
        <div style={{ backgroundColor: '#FFFBF2' }} >
            <Navbar />
            <div className={styles.IntroDiv} >
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/RS%20Kurta%20Jacket%20Hero%20Banner_Desktop%20jpg?$Desktop%20HP%20Carousel$" alt="" />
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/RS%20Kurta%20Jacket%20Hero%20Banner%20_Mobile%20JPG?$Mobile%20HP%20Carousel$" alt="" />
            </div>
            <div className={styles.menDiffCat} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-jacket-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/indo-western-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/sherwani-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-pajama-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/only-kurta-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/accessories-card-option.jpg" alt="" />
            </div>
            <h1>From Engagement to Reception</h1>
            <div className={styles.engagementToreception} >
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/engagement-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/sangeet-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/wedding-men-2022.jpg" alt="" />
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/reception-men-2022.jpg" alt="" />
            </div>
            <div className={styles.collectiblesTitle} >
                <h2>Collectibles</h2>
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/bottom_strip.png" alt="" />
                <p>ATTENDING A WEDDING? #TAIYAARHOKARAIYE</p>
            </div>
            <div className={styles.collectibles} >
                <div>
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20the%20Groom_Desktop%20revised%20dimension%20jpg?$Desktop%20Collectible$" alt="" />
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20a%20groom_New%20Mobile%20Dimension%20jpg?$Mobile%20Collectible$" alt="" />
                </div>
                <div>
                    <h2>Collectibles</h2>
                    <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/bottom_strip.png" alt="" />
                    <p>ATTENDING A WEDDING? #TAIYAARHOKARAIYE</p>
                </div>
                <div>
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20the%20Guest_Desktop%20revised%20dimension%20jpg?$Desktop%20Collectible$" alt="" />
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20a%20guest_New%20Mobile%20Dimension%20jpg?$Mobile%20Collectible$" alt="" />
                </div>
            </div>
            <div className={styles.wedCollection} >
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/LP%20Bottom%20Banner_Desktop%20jpg?$Men%20Desktop%20Footer%20Banner$" alt="" />
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/LP%20Bottom%20Banner%20option_Mobile%20jpg?$Men%20Mobile%20Footer%20Banner$" alt="" />
            </div>
            <div className={styles.taiyaarHokarAiyeBackground} >
                <h1>#TaiyaarHokarAiye</h1>
            </div>
            <img className={styles.taiyaarHokarAiyeImg} src="https://static01.manyavar.com/uploads/homepagetemplates/images/mny-rs-yt.jpg" alt="" />
            <Footer />
        </div>

    )
}
