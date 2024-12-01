import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-3xl font-bold'>I am about us page</h1>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={()=>navigate("/contactUs")}>Contact Us</button>
      <button onClick={()=> navigate(-1)} className='border-2 border-black p-2 ml-4'>Go back</button>
    </div>
  )
}

export default About
