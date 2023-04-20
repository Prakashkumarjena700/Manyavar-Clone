import React, { useContext } from 'react'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Products.module.css'
import Logo from '../Images/productsTopLogo.jpg'


import { IoIosArrowDown } from 'react-icons/io'

import Card from './Card'
import Footer from '../../Components/Footer/Footer'
import { useEffect } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    btnRef
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../Context/SearchContext'

export default function Products() {
    const [read, setRead] = useState(false)
    // console.log(read)

    const [grid, setGrid] = useState(true)
    // console.log(grid)

    const [wish, setWish] = useState(false)
    // console.log(wish)
    const [data, setData] = useState([])
    console.log(data)

    const [proLoad, setProdLoad] = useState(false)
    console.log(proLoad)
    const [scrollbar1, setScrollbar1] = useState(false)
    const [scrollbar2, setScrollbar2] = useState(false)
    const [scrollbar3, setScrollbar3] = useState(false)

    const [selectedOption, setSelectedOption] = useState('option1');

    console.log(selectedOption)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const singleGrid = () => {
        setGrid(false)
    }
    const doubleGrid = () => {
        setGrid(true)
    }


    const { gender, setGender, category, setCategory, size, setSize, color, setColor, occasion, setOccasion, collections, setCollection, breadCrum2, setBreadCrum2, breadCrum3, setBreadCrum3, heading, setHeading } = useContext(SearchContext)

    console.log('gender', gender, 'category', category, 'occasion', occasion, 'collections', collections)

    useEffect(() => {
        getData()
    }, [gender, category, occasion, collections, size, color])

    const getData = async () => {
        setProdLoad(true)
        await fetch(`https://proud-lamb-suspenders.cyclic.app/products/?gender=${gender}&category=${category}&size=${size}&color=${color}&occasion=${occasion}&collections=${collections}`)
            .then((res) => res.json())
            .then((res) => {
                setProdLoad(false)
                setData(res)
            })
            .catch(err => {
                setProdLoad(false)
                console.log(err)
            })
    }

    let navigate = useNavigate()

    const SinglePageFunc = (id) => {
        navigate(`/singleproduct/${id}`)
    }

    // var size = ['S', 'M', 'L', 'XL', 'XXL', '03XL']

    return (
        <div className={styles.ProductMain_container}>
            <Navbar />
            <div className={styles.products_container_1}>
                <div className={styles.container_1_child_1}>
                    <img src={Logo} alt="" />
                </div>
                <div className={styles.container_1_child_2}>
                    <h1>{heading}</h1>
                    <p className={read ? styles.container_1_child_2_para : ""}>Traditional wear for men has evolved over the years, all while keeping the cultural aesthetics and roots intact. Western-inspired <span style={{ color: '#027bfe' }}>Indo-Western</span> clothing like blazers and pants are among the most preferred outfits that cater to modern sensibilities and tastes. Even traditional Indian and {read ? "regional garments such as kurtas and dhotis have transformed by leaps and bounds. Men with preferences influenced by Western wear expect fashion-forward attires that exude charm, style and sophistication. Thus, Manyavar has crafted tastefully designed traditional clothes for men. We house the best traditional dress for men by offering fine blended fabrics in poised hues, stunning cuts and silhouettes, and elaborate adornments." : ""}</p>
                    <button onClick={() => setRead(!read)}>{read ? "Read less" : "Read more"}</button>
                </div>
                <div className={styles.container_1_child_3}>
                    <div>
                        <span>Sort By</span>
                        <select name="" id="">
                            <option value="">Best Seller</option>
                            <option value="">Price Low to High</option>
                            <option value="">Price High to Low</option>
                            <option value="">New Arrival</option>
                        </select>
                    </div>
                </div>
            </div>
            <p className={styles.routes_mobile}>Home / Men</p>
            <div className={styles.filterContainer}>
                <div className={styles.filterContainer_child1} onClick={onOpen}>SORT</div>
                <Drawer
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent bg="#FEFBF2">
                        <DrawerCloseButton />
                        <DrawerHeader bg='white' textAlign='center' fontSize={['20px', '40px']}>SORT</DrawerHeader>
                        <Button fontSize={['xl', '2xl']} fontWeight='light' bg="#FEFBF2" m='10px'>Best Seller</Button>
                        <Button fontSize={['xl', '2xl']} fontWeight='light' bg="#FEFBF2" m='10px'>Price Low To High</Button>
                        <Button fontSize={['xl', '2xl']} fontWeight='light' bg="#FEFBF2" m='10px'>Price High To Low</Button>
                        <Button fontSize={['xl', '2xl']} fontWeight='light' bg="#FEFBF2" m='10px'>New Arrival</Button>
                        <DrawerBody >

                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <div className={styles.filterContainer_child2}>FILTER</div>
                <div className={styles.grid_filter}>
                    <div onClick={singleGrid} className={styles.single_grid}>
                        <div></div>
                    </div>
                    <div onClick={doubleGrid} className={styles.double_grid}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.products_container_2} >
                <div className={styles.container_2_child_1}>
                    <p className={styles.products_root}>Home / {breadCrum2} / {breadCrum3}</p>
                    <p>1275 TOTAL ITEMS</p>
                    <div className={styles.grid_filter}>
                        <div onClick={singleGrid} className={styles.single_grid}>
                            <div></div>
                        </div>
                        <div onClick={doubleGrid} className={styles.double_grid}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p>FILTER</p>
                    <hr />
                    <div className={scrollbar1 || scrollbar2 || scrollbar3 ? styles.scrollbar : ""}>
                        <details onClick={() => setScrollbar1(!scrollbar1)}>
                            <summary><p>CATEGORIES</p><IoIosArrowDown color='grey' size='20px' /></summary>
                            <div><input type="radio" name="options" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} /><p>Option 1</p></div>
                            <div><input type="radio" name="options" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} /><p>Option 2</p></div>
                          
                            <div><input type="checkbox" onChange={() => setCategory('Kurta Jackets Set')} /> <p>Kurta Jackets Set </p></div>
                            <div><input type="checkbox" onChange={() => setCategory('Jackets')} /> <p>Jackets</p></div>
                            <div><input type="checkbox" onChange={() => setCategory('Indo-Western')} /> <p>Indo-Western </p></div>
                            <div><input type="checkbox" onChange={() => setCategory('Sherwani')} /> <p>Sherwani</p></div>
                            <div><input type="checkbox" onChange={() => setCategory('Kurta Dhoti')} /> <p>Kurta Dhoti</p></div>

                        </details>
                        <hr />
                        <details onClick={() => setScrollbar2(!scrollbar2)}>
                            <summary><p>SIZE</p><IoIosArrowDown color='grey' size='20px' /></summary>
                            <div><input type="checkbox" /> <p>S</p></div>
                            <div><input type="checkbox" /> <p>M </p></div>
                            <div><input type="checkbox" /> <p>L</p></div>
                            <div><input type="checkbox" /> <p>XL</p></div>
                            <div><input type="checkbox" /> <p>XXL</p></div>
                            <div><input type="checkbox" /> <p>03XL</p></div>
                            <div><input type="checkbox" /> <p>04XL</p></div>
                            <div><input type="checkbox" /> <p>2-3 year</p></div>
                            <div><input type="checkbox" /> <p>4-5 year</p></div>
                            <div><input type="checkbox" /> <p>6-7 year</p></div>
                            <div><input type="checkbox" /> <p>9-10 year</p></div>
                            <div><input type="checkbox" /> <p>FreeSize</p></div>
                        </details>
                        <hr />
                        <details onClick={() => setScrollbar3(!scrollbar3)}>
                            <summary><p>COLOR</p><IoIosArrowDown color='grey' size='20px' /></summary>
                            <div><input type="checkbox" /> <p>Maroon</p></div>
                            <div><input type="checkbox" /> <p>Green</p></div>
                            <div><input type="checkbox" /> <p>Pink</p></div>
                            <div><input type="checkbox" /> <p>Yellow</p></div>
                            <div><input type="checkbox" /> <p>Red</p></div>
                            <div><input type="checkbox" /> <p>Grey</p></div>
                            <div><input type="checkbox" /> <p>Blue</p></div>
                            <div><input type="checkbox" /> <p>Rust</p></div>
                            <div><input type="checkbox" /> <p>Peach</p></div>
                            <div><input type="checkbox" /> <p>Brown</p></div>
                            <div><input type="checkbox" /> <p>White</p></div>
                            <div><input type="checkbox" /> <p>Black</p></div>
                            <div><input type="checkbox" /> <p>Golden</p></div>
                        </details>

                    </div>

                </div>
                <div className={grid ? styles.container_2_child_2_double : styles.container_2_child_2_single} >
                    {
                        data.map((ele) => <div key={ele._id} onClick={() => SinglePageFunc(ele._id)}>
                            <div className={styles.HomeCard}>
                                {/* <div onClick={() => setWish(!wish)} className={styles.wishlistHeart}>{wish ? <AiOutlineHeart color='white' size='25px' /> : <AiTwotoneHeart size='25px' color='red' />}</div> */}
                                <Card image1={ele.img1} image2={ele.img2} />

                                <div className={styles.HomeCardoverlay}>
                                    <div className={styles.HomeCardText}>
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.title}>{ele.name.substring(0, 30)}...</p>
                            <h5 className={styles.price}>₹ {ele.price}.00</h5>
                            <p className={styles.size}>S M L XL XXL 03XL</p>
                        </div>)
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}


