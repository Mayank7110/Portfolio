import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 mt-12 ' id="home">
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mayank Wankhede</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <a
            className='bg-gradient-to-r from-green-500 to-blue-700 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
             href='#contact'>Contact With Me</a>
            <a
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
        </div>

    </div>
  )
}

export default Hero