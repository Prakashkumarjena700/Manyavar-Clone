import React, { useContext, useEffect, useState } from 'react'

import logo from '../../Assets/manyavarFullLogo.webp'
import styles from './Cart.module.css'
import { LoggerContext } from '../../Context/LoggerContex'

export default function Cart() {

    const { token } = useContext(LoggerContext)
    const [cartArr, setCartArr] = useState([])
    const [sum, setSum] = useState(0)

    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/cart/usercart`, {
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then(res => setCartArr(res))
            .catch(err => console.log(err))

    }


    const allTotal = () => {
        // const totalAmount = cartArr.reduce((accumulator, item) => {
        //     return accumulator + item.price * item.quentity
        // }, 0)
        // setSum(totalAmount)
    }

    return (
        <div style={{ backgroundColor: '#FFFBF2' }} >
            <img className={styles.cartPageLogo} src={logo} alt="" />
            <h1 className={styles.heading} >Shopping Cart</h1>
            <div className={styles.cartContainer} >
                <div className={styles.cardContainer} >
                    <div className={styles.cardContainerTableHeading}  >
                        <p>ITEMS</p>
                        <p>DESCRIPTION</p>
                        <p>PRICE</p>
                        <p>SIZE</p>
                        <p>QTY</p>
                        <p>SUBTOTAL</p>
                    </div>
                    {
                        cartArr && cartArr.map((ele) =>
                            <div className={styles.cartCard} >
                                <div>
                                    <img src={ele.img} alt="" />
                                </div>
                                <div>
                                    <p>{ele.name}</p>
                                    <p>SKU : {ele._id.substring(0, 15)}...</p>
                                    <p>Colour : {ele.color}</p>
                                    <p>Size : {ele.size}</p>
                                    <p>Net Quantity : 1 N</p>
                                </div>
                                <div>
                                    <p>₹ {ele.price}.00</p>
                                </div>
                                <div>
                                    <p>{ele.size}</p>
                                </div>
                                <div>
                                    <div>
                                        <button>-</button>
                                        <button>{ele.quentity}</button>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <p>₹ {ele.quentity * ele.price}</p>
                                </div>
                            </div>
                        )}
                </div>
                <div className={styles.paymentContainer}  >
                    <p>ORDER SUMMARY</p>
                    <p>{sum}</p>
                </div>
            </div>
        </div >
    )
}
