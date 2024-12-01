import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../Pages/home'
import Contact from '../Pages/contact'
import About from '../Pages/about'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="contactUs" element={<Contact />}></Route>
                <Route path='aboutUs' element={<About />}></Route>
            </Routes>
        </div>
    )
}

export default Routers
