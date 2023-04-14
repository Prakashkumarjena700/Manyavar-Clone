import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Admin/AdminDashboard'

import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import Login from '../Pages/RegisterAndLogin/Login'
import Register from '../Pages/RegisterAndLogin/Register'
import UserProfile from '../Pages/UserProfile/UserProfile'
import Men from '../Pages/Men/Men'
import Women from '../Pages/Women/Women'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'



export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/admindashboard' element={<AdminDashboard />} ></Route>
            <Route path='/userprofile' element={<UserProfile />} ></Route>
<<<<<<< HEAD
            <Route path='/products' element={<Products />} ></Route>
=======
            <Route path='/men' element={<Men />} ></Route>
            <Route path='/women' element={<Women />} ></Route>
            <Route path='/singleproduct' element={<SingleProduct />} ></Route>
>>>>>>> 5b8f69c86382848807276a66aeefd89f4f4dd8b5
        </Routes>
    )
}
