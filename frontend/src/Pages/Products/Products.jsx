import React from 'react'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Products.module.css'
import Logo from '/Users/saikhmirsat/Desktop/Manyavar/Manyavar-Clone/frontend/src/Assets/productsTopLogo.jpg'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import { IoIosArrowDown } from 'react-icons/io'
import Card from './Card'



export default function Products() {
    const [read, setRead] = useState(false)
    console.log(read)

    const [image, setImage] = useState("")




    return (
        <div>
            <Navbar />
            <div className={styles.products_container_1}>
                <div className={styles.container_1_child_1}>
                    <img src={Logo} alt="" />
                </div>
                <div className={styles.container_1_child_2}>
                    <h1>Men</h1>
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
            <div className={styles.products_container_2}>
                <div className={styles.container_2_child_1}>
                    <p className={styles.products_root}>Home / Men</p>
                    <p>1275 TOTAL ITEMS</p>
                    <div className={styles.grid_filter}>
                        <div className={styles.single_grid}>
                            <div></div>
                        </div>
                        <div className={styles.double_grid}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p>FILTER</p>
                    <hr />
                    <details>
                        <summary><p>CATEGORIES</p><IoIosArrowDown color='grey' size='20px' /></summary>
                        <div><input type="checkbox" /> <p>Blazer for Men</p></div>
                        <div><input type="checkbox" /> <p>Formal</p></div>
                        <div><input type="checkbox" /> <p>Indo Western </p></div>
                        <div><input type="checkbox" /> <p>Kids Kurta</p></div>
                        <div><input type="checkbox" /> <p>Kids Kurta Jacket </p></div>
                        <div><input type="checkbox" /> <p>kurta dhoti collection</p></div>
                        <div><input type="checkbox" /> <p>Kurta Jacket Set</p></div>
                        <div><input type="checkbox" /> <p>Kurta Pajama</p></div>
                        <div><input type="checkbox" /> <p>Lower</p></div>
                        <div><input type="checkbox" /> <p>Men Blazers Suits</p></div>
                        <div><input type="checkbox" /> <p>Only Jacket</p></div>
                        <div><input type="checkbox" /> <p>Only Kurta </p></div>
                        <div><input type="checkbox" /> <p>Sherwani </p></div>
                    </details>
                    <hr />
                    <details>
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
                    <details>
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
                <div className={styles.container_2_child_2}>
                    {
                        data.map((ele) =>
                            <div>
                                <div>
                                    <Card image1={ele.image1} image2={ele.image2} />
                                </div>

                                <div>
                                    <p>{ele.name}</p>
                                    <p>R 200030</p>
                                    <p>S M L XL XXL 03XL</p>
                                </div>
                            </div>
                        )}


                </div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat voluptate tenetur, eum aut doloremque architecto debitis porro dolorem, molestiae consequatur libero labore perspiciatis repellat veniam? Facilis quibusdam blanditiis hic.
            </div>
        </div >
    )
}


const data = [
    {
        name: "nnnn sherwani",
        image1: "https://static01.manyavar.com/uploads/dealimages/14463/listimages/CPSH223D-319_02.JPG",
        image2: "https://static01.manyavar.com/uploads/dealimages/15553/listimages/SHOS256D-303_01.JPG"
    },
    {
        name: "nnnn",
        image1: "https://static01.manyavar.com/uploads/dealimages/14463/listimages/CPSH223D-319_02.JPG",
        image2: "https://static01.manyavar.com/uploads/dealimages/15553/listimages/SHOS256D-303_01.JPG"
    },
    {
        name: "nnnn",
        image1: "https://static01.manyavar.com/uploads/dealimages/14463/listimages/CPSH223D-319_02.JPG",
        image2: "https://static01.manyavar.com/uploads/dealimages/15539/listimages/ODES973-303_01.JPG"
    },
]
