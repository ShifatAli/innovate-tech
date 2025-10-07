import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sign Up', path: '/signup' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 bg-white dark:bg-black px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Innovate Tech
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-indigo-600">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-white font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`transition-colors duration-200 hover:text-indigo-500 ${
                  location.pathname === path ? 'text-indigo-500' : ''
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-4 px-4 py-3 text-gray-700 dark:text-white font-medium bg-white dark:bg-black rounded-md shadow-md">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className={`transition-colors duration-200 hover:text-indigo-500 ${
                    location.pathname === path ? 'text-indigo-500' : ''
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
