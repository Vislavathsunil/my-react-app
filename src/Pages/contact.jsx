import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-3xl font-bold'>Welcome to Contact Us page</h1>
            <button onClick={() => navigate("/")} className='border-2 border-black p-2 '>Home</button>
            <button onClick={() => navigate("/aboutUs")} className='border-2 border-black p-2 ml-2'> About Us</button>
            <button onClick={() => navigate(-1)} className='border-2 border-black p-2 ml-4'>Go back</button>
        </div>
    )
}

export default Contact
