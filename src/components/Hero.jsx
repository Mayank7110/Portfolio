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
        <div className="mt-8 space-x-4 flex flex-wrap justify-center">
            <a
              className="relative px-6 py-3 font-semibold text-white text-lg rounded-full transition-all duration-300 
                        bg-gradient-to-r from-green-500 to-blue-700 shadow-lg shadow-green-400/50 
                        hover:scale-110 hover:shadow-xl hover:shadow-blue-500/60"
              href="#contact"
            >
              Contact With Me
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
            </a>

            <a
              className="relative px-6 py-3 font-semibold text-white text-lg rounded-full transition-all duration-300 
                        bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg shadow-pink-400/50 
                        hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60"
              href="https://drive.google.com/file/d/1PXbGa14NIusxxgYqxq0Yh5YBz_I0kzGi/view?usp=drive_link" 
              target="_blank"
            >
              Resume
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-yellow-500 opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
            </a>
          </div>



    </div>
  )
}

export default Hero