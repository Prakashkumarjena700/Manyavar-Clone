import React, { useContext, useEffect, useState } from 'react'

import logo from '../../Assets/manyavarFullLogo.webp'
import styles from './Cart.module.css'
import { LoggerContext } from '../../Context/LoggerContex'

import { RiSubtractLine } from 'react-icons/ri'
import { MdOutlineAdd } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'

export default function Cart() {

    const { token } = useContext(LoggerContext)
    const [cartArr, setCartArr] = useState([])
    const [sum, setSum] = useState(0)
    const [incLoad, setIncLoad] = useState(false)
    const [decLoad, setDecLoad] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/cart/usercart`, {
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then(res => {
                setCartArr(res)
                allTotal(res)
            })
            .catch(err => console.log(err))

    }


    const allTotal = (arr) => {
        const totalAmount = arr.reduce((accumulator, item) => {
            return accumulator + item.price * item.quentity
        }, 0)
        setSum(totalAmount)
    }

    const DecressQuentity = async (id, quentity) => {
        setDecLoad(true)
        let obj = {
            quentity: quentity - 1
        }

        await fetch(`https://proud-lamb-suspenders.cyclic.app/cart/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => {
                setDecLoad(false)
                getCart()
            })
            .catch(err => {
                setDecLoad(false)
                console.log(err)
            })
    }

    const IncreasingQuentity = async (id, quentity) => {
        setIncLoad(true)
        let obj = {
            quentity: quentity + 1
        }

        await fetch(`https://proud-lamb-suspenders.cyclic.app/cart/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => {
                setIncLoad(false)
                getCart()
            })
            .catch(err => {
                setIncLoad(false)
                console.log(err)
            })
    }

    return (
        <div style={{ backgroundColor: '#FFFBF2' }} >
            <img onClick={() => navigate('/')} className={styles.cartPageLogo} src={logo} alt="" />
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
                            <div key={ele._id} className={styles.TotalcartCard} >
                                <div className={styles.cartCard} >
                                    <div>
                                        <img src={ele.img} alt="" />
                                    </div>
                                    <div>
                                        <b>{ele.name}</b>
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
                                            <button onClick={() => DecressQuentity(ele._id, ele.quentity)} className={decLoad && styles.processingforDE}  ><RiSubtractLine style={{ color: '#A98F58' }} /></button>
                                            <button>{ele.quentity}</button>
                                            <button className={incLoad && styles.processing} onClick={() => IncreasingQuentity(ele._id, ele.quentity)} ><MdOutlineAdd /></button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>₹ {ele.quentity * ele.price}</p>
                                    </div>
                                </div>
                                <div className={styles.cardForMidScreen} >
                                    <div>
                                        <img src={ele.img} alt="" />
                                    </div>
                                    <div>
                                        <b>{ele.name}</b><br />
                                        <p>{ele.size}</p>
                                        <div>
                                            <button onClick={() => DecressQuentity(ele._id, ele.quentity)} className={decLoad && styles.processingforDE}  ><RiSubtractLine style={{ color: '#A98F58' }} /></button>
                                            <button>{ele.quentity}</button>
                                            <button className={incLoad && styles.processing} onClick={() => IncreasingQuentity(ele._id, ele.quentity)} ><MdOutlineAdd /></button>
                                        </div>
                                        <p>₹ {ele.quentity * ele.price}</p>
                                        <p>Unit Price : ₹ {ele.price}.00</p>
                                        <p>SKU : {ele._id.substring(0, 15)}...</p>
                                        <p>Colour : {ele.color}</p>
                                        <p>Size : {ele.size}</p>
                                        <p>Net Quantity : 1 N</p>

                                    </div>

                                </div>
                                <div>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                        )}
                </div>
                <div className={styles.paymentContainer}  >
                    <h2>ORDER SUMMARY</h2>
                    <div>
                        <p>SUBTOTAL</p>
                        <p>₹ {sum}.00</p>
                    </div>
                    <div>
                        <p>SHIPPING</p>
                        <p>Free</p>
                    </div>
                    <h2>APPLY PROMO</h2>
                    <div>
                        <h2>ORDER TOTAL</h2>
                        <div>
                            <h2>₹ {sum}.00</h2>
                            <span>Inclusive of all taxes</span>
                        </div>
                    </div>
                    <button>
                        <p>CHECKOUT</p>
                        <p>₹ {sum}.00</p>
                    </button>
                </div>
            </div>
        </div >
    )
}
