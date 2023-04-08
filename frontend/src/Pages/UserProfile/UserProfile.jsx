import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../UserProfile/UserProfile.module.css'

export default function UserProfile() {

    const [user, setUser] = useState({})

    const [profile, setProfile] = useState(true)
    const [address, setAddress] = useState(false)
    const [order, setOrder] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [password, setPassword] = useState(false)

    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [avatar, setAvatar] = useState("")


    const [edit, setEdit] = useState(false)

    const userID = JSON.parse(localStorage.getItem('user'))

    // console.log(user)
    useEffect(() => {
        GetData()
    }, [])

    const GetData = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/users/${userID._id}`)
            .then((res) => res.json())
            .then((res) => {
                setUser(res[0])
                console.log(res[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const editBTNFunc = () => {
        setEdit(true)

    }
    const editSaveFunc = async () => {
        const formData = new FormData();
        formData.append('file', avatar);
        formData.append('upload_preset', 'manyavar');

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/drijzhqfp/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();
        console.log(data);
        console.log(data.secure_url)

        let obj = {
            firstname: firstname || user.firstname,
            lastname: lastname || user.lastname,
            email: email || user.email,
            mobile: mobile || user.mobile,
            avatar: data.secure_url
        }
        await fetch(`https://proud-lamb-suspenders.cyclic.app/users/edit/${user._id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => {
                setEdit(false)
                alert('Updated')
                GetData()
                console.log(res)
            })
            .catch(err => console.log(err))
    }



    return (
        <div className={styles.profile_main_container}>
            <Navbar />
            <p className={styles.profile_root_name}>HOME / MY ACCOUNT</p>
            <div className={styles.profile_container_1}>
                <h1>My Account</h1>
                <p>HELLO, {user.firstname}</p>
                <p>From your My Account you have the ability to view your recent account activity and update your account information.</p>
            </div>
            <div className={styles.profile_container_2}>
                <div className={styles.profile_con2_child_1}>
                    <button onClick={() => {
                        setProfile(true)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(false)
                        setEdit(false)
                    }}>PROFILE</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(true)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(false)
                    }}>MY ADDRESS</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(true)
                        setWishlist(false)
                        setPassword(false)
                    }}>MY ORDERS</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(true)
                        setPassword(false)
                    }}>MY WISHLIST</button>

                    <button onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(true)
                    }}>CHANGE PASSWORD</button>

                </div>
                <div className={styles.profile_con2_child_2}>
                    {/* ========Profile======== */}
                    {profile ? <div className={styles.profile_container}>
                        {!edit ? <h1>MY PROFILE</h1> : <h1>EDIT MY PROFILE</h1>}

                        {
                            !edit ?
                                <div className={styles.profile_container_grid}>
                                    <div className={styles.profile_image_con}>
                                        <img src={user.avatar} alt="" />
                                    </div>
                                    <div >
                                        <div className={styles.profile_detail_heading}>
                                            <p>FIRST NAME</p>
                                            <p>LAST NAME</p>
                                        </div>
                                        <div className={styles.profile_detail}>
                                            <p>{user.firstname}</p>
                                            <p>{user.lastname}</p>
                                        </div>
                                        <div className={styles.profile_detail_heading}>
                                            <p>Email</p>
                                            <p>Mobile No.</p>
                                        </div>
                                        <div className={styles.profile_detail}>
                                            <p>{user.email}</p>
                                            <p>{user.mobile}</p>
                                        </div>
                                    </div>
                                </div> :
                                <div className={styles.profile_edit_container}>
                                    <input type="text" placeholder={user.firstname} onChange={(e) => setFname(e.target.value)} />
                                    <input type="text" placeholder={user.lastname} onChange={(e) => setLname(e.target.value)} />
                                    <input type="text" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="text" placeholder={user.mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
                                </div>
                        }



                        {edit ? <button className={styles.editBtn_profile} onClick={editSaveFunc}>SAVE</button> : <button className={styles.editBtn_profile} onClick={editBTNFunc}>EDIT</button>}
                    </div> : ""}
                    {/* ========Profile-End======== */}

                    {address ? <div>
                        address
                        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
                        {/* <button onClick={imageUpload}>Upload</button> */}

                    </div> : ""}
                    {order ? <div>ORDERS</div> : ""}
                    {wishlist ? <div>WISHLIST</div> : ""}
                    {password ? <div>PASSWORD</div> : ""}
                </div>
            </div>
        </div>
    )
}
