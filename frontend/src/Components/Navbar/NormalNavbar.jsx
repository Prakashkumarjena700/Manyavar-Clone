import React, { useState } from 'react'
import styles from "./Navbar.module.css"

import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

import { MenDropDown, WomenDropDown, KidsDropDown, AccessoriesDropDown } from "./DropDown"
import { mainItem } from './NavItem';

export default function NormalNavbar() {
    const [menDropdown, setMenDropdown] = useState(false)
    const [womenDropdown, setWomenDropdown] = useState(false)
    const [kidsDropdown, setKidsDropdown] = useState(false)
    const [accessoriesDropDown, setAccessoriesDropDown] = useState(false)



    return (
        <div className={styles.normalNavbarContainer} >
            <div><img src="https://static01.manyavar.com/uploads/images/Manvayar-Crest-Mohey_Horizontal_3D_logo%201.png" alt="" /></div>
            <div className={styles.dropDownMainMenue} >
                {
                    mainItem.map((ele) => {
                        if (ele.title === 'MEN') {
                            return (
                                <div
                                    onMouseEnter={() => setMenDropdown(true)}
                                    onMouseLeave={() => setMenDropdown(false)}
                                    key={ele.title}
                                >   <p>{ele.title}</p>
                                    {menDropdown && <MenDropDown />}
                                </div>
                            )
                        }
                        if (ele.title === 'WOMEN') {
                            return (
                                <div
                                    onMouseEnter={() => setWomenDropdown(true)}
                                    onMouseLeave={() => setWomenDropdown(false)}
                                    key={ele.title}
                                >   <p>{ele.title}</p>
                                    {womenDropdown && <WomenDropDown />}
                                </div>
                            )
                        }
                        if (ele.title === 'KIDS') {
                            return (
                                <div
                                    onMouseEnter={() => setKidsDropdown(true)}
                                    onMouseLeave={() => setKidsDropdown(false)}
                                    key={ele.title}
                                >   <p>{ele.title}</p>
                                    {kidsDropdown && <KidsDropDown />}
                                </div>
                            )
                        }
                        if (ele.title === 'ACCESSORIES') {
                            return (
                                <div
                                    onMouseEnter={() => setAccessoriesDropDown(true)}
                                    onMouseLeave={() => setAccessoriesDropDown(false)}
                                    key={ele.title}
                                >   <p>{ele.title}</p>
                                    {accessoriesDropDown && <AccessoriesDropDown />}
                                </div>
                            )
                        }
                        return (
                            <div key={ele.id} >{ele.title}</div>
                        )
                    })
                }
            </div>
            <div>
                <FiSearch /><FiUser /><AiOutlineHeart /><FiShoppingCart />
            </div>
        </div>
    )
}
