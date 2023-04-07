import React, { useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react'

import mehelLogo from "../Assets/mehelLogo.webp"




export default function AddProduct() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [gender, setGender] = useState('')
  const [occasion, setOccasion] = useState('')
  const [collections, setCollections] = useState('')
  const [checkedItems, setCheckedItems] = useState([]);
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [features, setFeauters] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')


  const handleCheckboxChange = (event) => {
    const checkedValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedItems([...checkedItems, checkedValue]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== checkedValue));
    }
  };

  const AddProduct = () => {
    const obj = {
      name,
      category,
      gender,
      occasion,
      collections,
      size: checkedItems,
      price: Number(price),
      color,
      quentity: 1,
      features: features.split(','),
      description,
      address,
      email,
      img1,
      img2,
      img3,
      img4,
      img5
    }
    console.log(obj)
  }


  return (
    <div className={styles.AddProductContainer}>
      <img src={mehelLogo} alt="" />
      <div className={styles.FormContainer} >
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <select onChange={(e) => setCategory(e.target.value)} >
          <option value="">Category</option>
          <option value="Kurta">Kurta</option>
          <option value="Kurta Sets">Kurta Sets</option>
          <option value="Kurta Jacket Set">Kurta Jacket Set</option>
          <option value="Jackets">Jackets</option>
          <option value="Indo-Western">Indo-Western</option>
          <option value="Sherwani">Sherwani</option>
          <option value="Kurta Dhoti">Kurta Dhoti</option>
          <option value="Safas">Safas</option>
          <option value="Malas">Malas</option>
          <option value="Footwear">Footwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Lehenga">Lehenga</option>
          <option value="Gown">Gown</option>
          <option value="Saree">Saree</option>
          <option value="Stitched Suits">Stitched Suits</option>
          <option value="Kurti / Suit">Kurti / Suit</option>
          <option value="Kurta Jacket">Kurta Jacket</option>
          <option value="Juti">Juti</option>
          <option value="Brooch">Brooch</option>
          <option value="Pocket Square">Pocket Square</option>
          <option value="Safa">Safa</option>
          <option value="Mala">Mala</option>
          <option value="Bandanna">Bandanna</option>
          <option value="Sherwani Inner Kurta">Sherwani Inner Kurta</option>
          <option value="Socks">Socks</option>
        </select>
        <select onChange={(e) => setGender(e.target.value)} >
          <option value="">Whome</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <select onChange={(e) => setOccasion(e.target.value)} >
          <option value="">Occassion</option>
          <option value="Wedding">Wedding</option>
          <option value="Reception">Reception</option>
          <option value="Engagement">Engagement</option>
          <option value="Sangeet">Sangeet</option>
          <option value="Haldi">Haldi</option>
        </select>
        <select onChange={(e) => setCollections(e.target.value)} >
          <option value="">Collection</option>
          <option value="Festive">Festive</option>
          <option value="Formal">Formal</option>
          <option value="Classic">Classic</option>
        </select>
        <Popover placement='top-start'>
          <PopoverTrigger>
            <button className='sizeChat' >Size</button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Size Chart</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody className={styles.sizeContainer} >
              <label >S<input type="checkbox" value="S" checked={checkedItems.includes("S")} onChange={handleCheckboxChange} /></label>
              <label >M<input type="checkbox" value="M" checked={checkedItems.includes("M")} onChange={handleCheckboxChange} /></label>
              <label >L<input type="checkbox" value="L" checked={checkedItems.includes("L")} onChange={handleCheckboxChange} /></label>
              <label >XL<input type="checkbox" value="XL" checked={checkedItems.includes("XL")} onChange={handleCheckboxChange} /></label>
              <label >XXL<input type="checkbox" value="XXL" checked={checkedItems.includes("XXL")} onChange={handleCheckboxChange} /></label>
              <label >XXXL<input type="checkbox" value="XXXL" checked={checkedItems.includes("XXXL")} onChange={handleCheckboxChange} /></label>
              <label >6<input type="checkbox" value="6" checked={checkedItems.includes("6")} onChange={handleCheckboxChange} /></label>
              <label >7<input type="checkbox" value="7" checked={checkedItems.includes("7")} onChange={handleCheckboxChange} /></label>
              <label>8<input type="checkbox" value="8" checked={checkedItems.includes("8")} onChange={handleCheckboxChange} /></label>
              <label>9<input type="checkbox" value="9" checked={checkedItems.includes("9")} onChange={handleCheckboxChange} /></label>
              <label>10<input type="checkbox" value="10" checked={checkedItems.includes("10")} onChange={handleCheckboxChange} /></label>
              <label>11<input type="checkbox" value="11" checked={checkedItems.includes("11")} onChange={handleCheckboxChange} /></label>
              <label>12<input type="checkbox" value="12" checked={checkedItems.includes("12")} onChange={handleCheckboxChange} /></label>
              <label>13<input type="checkbox" value="13" checked={checkedItems.includes("13")} onChange={handleCheckboxChange} /></label>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <input type="number" placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Color' onChange={(e) => setColor(e.target.value)} />
        <input type="text" placeholder='Features' onChange={(e) => setFeauters(e.target.value)} />
        <input type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Image1' onChange={(e) => setImg1(e.target.value)} />
        <input type="text" placeholder='Image2' onChange={(e) => setImg2(e.target.value)} />
        <input type="text" placeholder='Image3' onChange={(e) => setImg3(e.target.value)} />
        <input type="text" placeholder='Image4' onChange={(e) => setImg4(e.target.value)} />
        <input type="text" placeholder='Image5' onChange={(e) => setImg5(e.target.value)} />
        <button className={styles.addBtn} onClick={AddProduct} >Add Product</button>
      </div>
    </div>
  )
}
