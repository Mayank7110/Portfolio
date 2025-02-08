import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-r from-gray-900 to-black text-white px-6 md:px-16 lg:px-24 shadow-lg'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <div className='text-3xl font-extrabold tracking-wide'>Mayank Wankhede</div>
        
        <div className='hidden md:flex space-x-8 text-lg font-medium'>
          <a href="#home" className='hover:text-green-400 transition duration-300'>Home</a>
          <a href="#about" className='hover:text-green-400 transition duration-300'>About Me</a>
          <a href="#service" className='hover:text-green-400 transition duration-300'>Services</a>
          <a href="#project" className='hover:text-green-400 transition duration-300'>Projects</a>
          <a href="#contact" className='hover:text-green-400 transition duration-300'>Contact</a>
        </div>
        
        <a 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-6 py-2 rounded-full shadow-md 
          transform transition-transform duration-300 hover:scale-110 hidden md:inline-block' 
          href='https://www.linkedin.com/in/mayank-wankhede-b5534b283/' target='blank'>
          Connect Me
        </a>
        
        <button className='md:hidden text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
