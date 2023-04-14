import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Admin/AdminDashboard'

import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import Login from '../Pages/RegisterAndLogin/Login'
import Register from '../Pages/RegisterAndLogin/Register'
import UserProfile from '../Pages/UserProfile/UserProfile'



export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/admindashboard' element={<AdminDashboard />} ></Route>
            <Route path='/userprofile' element={<UserProfile />} ></Route>
            <Route path='/products' element={<Products />} ></Route>
        </Routes>
    )
}
