import React, { useState } from 'react'
import styles from './Register.module.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { style } from '@mui/system';
import { Link } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'

import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';



export default function Register() {


    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [agree, setAgree] = useState(false)

    const toast = useToast()

    // const handleInputChange = (event) => {
    //     setPassword(event.target.value);
    //     setEmail(event.target.value);
    //     setFname(event.target.value);
    //     setLname(event.target.value);
    //     setGender(event.target.value);
    // };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const SignUpFuction = async () => {
        let obj = {
            registerdate: new Date().toISOString().split('T')[0],
            avatar: "https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg",
            firstname, lastname, email, password, gender
        }

        await fetch(`https://proud-lamb-suspenders.cyclic.app/users/register`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json())
            .then((res) => {
                toast({
                    position: 'top',
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                console.log(res)
            })
            .catch((err) => {
                toast({
                    position: 'top',
                    title: 'Something went wrong!.',
                    description: "Please try again!",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
                console.log(err)
            })
    }

    return (
        <div className={styles.RegisterMainContainer}>
            <div className={styles.waveBG_img_div}>
                <img className={styles.register_waveImg} src="https://static01.manyavar.com/uploads/images/orderprocess_header_bg.png" alt="" />
                <img className={styles.register_Logo_img} src="https://static01.manyavar.com/uploads/images/Manvayar-Crest-Mohey_Horizontal_3D_logo%201.png" alt="" />
            </div>
            <div className={styles.register_main_container}>
                <p>SIGN UP USING</p>
                <div className={styles.register_social_img_con}>
                    <div>
                        <img src="https://www.manyavar.com/assets/images/fb.svg" alt="" />
                    </div>
                    <div>
                        <img src="https://static01.manyavar.com/uploads/images/gplus.png" alt="" />
                    </div>
                    <div>
                        <img src="https://www.manyavar.com/assets/images/apple.png" alt="" />
                    </div>
                </div>
                <p>- OR USE -</p>
                <p>SIGN UP WITH EMAIL</p>

                <div className={styles.Register_input_box_div}>
                    <input type="text" onChange={(e) => setFname(e.target.value)} placeholder='FIRST NAME*' />
                    <input type="text" onChange={(e) => setLname(e.target.value)} placeholder='LAST NAME*' />
                    <select name="" id="" onChange={(e) => setGender(e.target.value)}>
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL*' />
                    <div className={styles.register_password}>
                        <input type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)} placeholder='PASSWORD* (minimum in 8 charecters)' />

                        <button onClick={handleShowPassword}>
                            {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                        </button>
                    </div>
                </div>

                <div className={styles.register_agree_btn}>
                    <input type="checkbox" onChange={() => setAgree(!agree)} />
                    <p>I agree to the <Link>Terms of Use</Link>  and <Link>Privacy Policy</Link> of www.manyavar.com
                    </p>
                </div>

                <div className={agree ? styles.signup_btn : styles.signup_disable}>
                    <button disabled={!agree} onClick={SignUpFuction}>SIGNUP</button>
                </div>
                <div className={styles.Register_login_btn}>
                    <p>Already a member?</p><Link to='/login'>LOGIN</Link>
                </div>
            </div>

        </div>
    )
}