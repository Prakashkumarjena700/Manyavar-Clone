import React, { useState } from 'react'
import styles from './Register.module.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { style } from '@mui/system';
import { Link } from 'react-router-dom'

import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

export default function Register() {


    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                    <input type="text" placeholder='FIRST NAME*' />
                    <input type="text" placeholder='LAST NAME*' />
                    <select name="" id="">
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="text" placeholder='EMAIL*' />
                    <div className={styles.register_password}>
                        <input type={showPassword ? 'text' : 'password'}
                            onChange={handleInputChange} placeholder='PASSWORD* (minimum in 8 charecters)' />

                        <button onClick={handleShowPassword}>
                            {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                        </button>
                    </div>
                </div>

                <div className={styles.register_agree_btn}>
                    <input type="checkbox" />
                    <p>I agree to the <Link>Terms of Use</Link>  and <Link>Privacy Policy</Link> of www.manyavar.com
                    </p>
                </div>

                <div className={styles.signup_btn}>
                    <button>SIGNUP</button>
                </div>
                <div className={styles.Register_login_btn}>
                    <p>Already a member?</p><Link>LOGIN</Link>
                </div>
            </div>

        </div>
    )
}

