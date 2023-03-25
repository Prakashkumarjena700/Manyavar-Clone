import React from 'react'
import styles from './Register.module.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function Register() {
    return (
        <div className={styles.RegisterMainContainer}>
            <div className={styles.waveBG_img_div}>
                <img className={styles.register_waveImg} src="https://static01.manyavar.com/uploads/images/orderprocess_header_bg.png" alt="" />
                <img className={styles.register_Logo_img} src="https://static01.manyavar.com/uploads/images/Manvayar-Crest-Mohey_Horizontal_3D_logo%201.png" alt="" />
            </div>
            <div>

            </div>

        </div>
    )
}

