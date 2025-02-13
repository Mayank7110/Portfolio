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
          className="hidden md:inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-6 py-2 rounded-full shadow-md 
          transform transition-transform duration-300 hover:scale-110"
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
          className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800 text-white shadow-xl rounded-lg 
          absolute top-16 right-4 w-48 z-50 border border-gray-600"
        >
          <a href="#home" className="block w-full text-center py-2 hover:bg-gray-700 rounded-md transition duration-300" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="block w-full text-center py-2 hover:bg-gray-700 rounded-md transition duration-300" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
          <a href="#service" className="block w-full text-center py-2 hover:bg-gray-700 rounded-md transition duration-300" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#project" className="block w-full text-center py-2 hover:bg-gray-700 rounded-md transition duration-300" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="block w-full text-center py-2 hover:bg-gray-700 rounded-md transition duration-300" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
