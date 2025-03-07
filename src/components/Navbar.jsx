import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 to-black text-white px-6 md:px-16 lg:px-24 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide font-serif text-gradient-to-bl from-cyan-800 to-sky-900">
          Mayank Wankhede
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-green-400 transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-green-400 transition duration-300">
            About Me
          </a>
          <a href="#service" className="hover:text-green-400 transition duration-300">
            Services
          </a>
          <a href="#project" className="hover:text-green-400 transition duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400 transition duration-300">
            Contact
          </a>
        </div>

        {/* Connect Button */}
        <a
          className="hidden md:inline-block relative px-6 py-3 font-semibold text-white text-lg 
             rounded-full transition-all duration-300 bg-gradient-to-r from-green-500 to-blue-700 
             shadow-lg shadow-green-400/50 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/60"
          href="https://www.linkedin.com/in/mayank-wankhede-b5534b283/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col items-center space-y-4 py-6 bg-gray-800 text-white shadow-xl rounded-lg absolute top-16 right-2 w-48 z-50 border border-gray-600 backdrop-blur-md"
        >
          {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="block w-full text-center py-3 font-bold text-lg uppercase bg-gray-700 rounded-md transition duration-300 hover:bg-green-500 hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/mayank-wankhede-b5534b283/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 font-bold text-lg uppercase bg-blue-600 rounded-md transition duration-300 hover:bg-blue-800 hover:scale-105"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
