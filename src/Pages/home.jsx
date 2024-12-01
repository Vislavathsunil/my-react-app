import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-3xl font-bold'> WelCome to my home</h1>
            <button onClick={() => navigate("/aboutUs")} className='border-2 border-black p-2 '>About Us</button>
            <button onClick={() => navigate("/contactUs")} className='border-2 border-black p-2 ml-4'>Contact Us</button>
 
        </div>
    )
}

export default Home
