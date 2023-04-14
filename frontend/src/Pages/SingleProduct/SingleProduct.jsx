import React, { useState } from 'react'

import styles from './SingleProduct.module.css'

import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Images from './ZoomIn'

import { GrShareOption, GrFormSubtract } from 'react-icons/gr'
import { CiRuler } from 'react-icons/ci'
import { MdOutlineAdd } from 'react-icons/md'
import { AiFillHeart, AiTwotoneAlert } from 'react-icons/ai'
import { TbPhoneCall } from 'react-icons/tb'

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'

export default function SingleProduct() {

    const [selSize, setSelSize] = useState('')
    const [quentity, setQuentity] = useState(1)
    const [sizealert, setSizealert] = useState(false)

    const img1 = 'https://static01.manyavar.com/uploads/dealimages/14021/zoomimages/SDES528-311_02.JPG'
    const img2 = 'https://static01.manyavar.com/uploads/dealimages/14021/zoomimages/SDES528-311_03.JPG'
    const img3 = 'https://static01.manyavar.com/uploads/dealimages/14021/zoomimages/SDES528-311_04.JPG'
    const img4 = 'https://static01.manyavar.com/uploads/dealimages/14021/zoomimages/SDES528-311_02.JPG'
    const img5 = 'https://static01.manyavar.com/uploads/dealimages/14021/zoomimages/SDES528-311_03.JPG'

    const name = 'Pale Pink and Pista Green Patterned Kurta Set'
    const pcode = '3242jbs7q57jahahrqsfakh6yq6'
    const price = 2999
    const size = ['S', 'M', 'L', 'XL', 'XXL']


    const QuentityInc = () => {
        if (selSize != '') {
            setSizealert(false)
        }
        if (selSize == '') {
            setSizealert(true)
        } else if (quentity < 10) {
            setQuentity(quentity + 1)
        }
    }

    const QuentityDec = () => {
        if (quentity > 1) {
            setQuentity(quentity - 1)
        }
    }

    const selectSize = (ele) => {
        if (sizealert) {
            setSizealert(false)
        }
        setSelSize(ele)
    }

    const AddtoCart = () => {
        if (selSize == '') {
            setSizealert(true)
        } else {
            console.log(selSize, quentity)
        }
    }

    return (
        <div>
            <Navbar />
            <div className={styles.twoFlex} >
                <Images
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    img4={img4}
                    img5={img5}
                />
                <div className={styles.ProductDiscription} >
                    <div>
                        <p>MANYAVAR COLLECTION</p>
                        <div><h2>{name}</h2> <GrShareOption /> </div>
                        <p>Product Code : {pcode}</p>
                        <h3>₹ {price}.00</h3>
                        <p>inclusive of all taxes</p>
                    </div>
                    <div>
                        <div><p>Select Size</p> <p><CiRuler /> Size Guide</p> </div>
                        {
                            size.map((ele) => <button key={ele} className={selSize == ele && styles.selectedSize} onClick={() => selectSize(ele)} >{ele}</button>)
                        }
                        <h2>{sizealert && 'Please select the size'}</h2>
                    </div>
                    <div>
                        <p>Select Quantity</p>
                        <div>
                            <button onClick={QuentityDec} ><GrFormSubtract /></button>
                            <button>{quentity}</button>
                            <button onClick={QuentityInc} ><MdOutlineAdd /></button>
                        </div>
                    </div>
                    <div>
                        <button onClick={AddtoCart} >ADD TO CART</button>
                        <AiFillHeart />
                    </div>
                    <div>
                        <p>Check Delivery Availability</p>
                        <input type="text" placeholder='Enter Pincode' />
                    </div>
                    <div>
                        <h2>STILL CONFUSED? SPEAK TO OUR STYLIST</h2>
                        <button><AiTwotoneAlert />BOOK AN APPOINTMENT</button>
                        <button><TbPhoneCall />1800 120 500</button>
                    </div>
                    <div>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h3>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' >
                                            FEATURES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            DESCRIPTION
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h3>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            MANUFACTURE DETAILS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
