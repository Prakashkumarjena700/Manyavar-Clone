import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Register from '../Pages/RegisterAndLogin/Register'



export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
        </Routes>
    )
}
