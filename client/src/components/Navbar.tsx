import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const location = useLocation();

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 text-white px-4 sm:px-6 py-3 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === '/' ? 'text-blue-400 underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/reading-plan"
            className={`hover:underline ${
              location.pathname === '/reading-plan' ? 'text-blue-400 underline' : ''
            }`}
          >
            Reading Plan
          </Link>
          <Link
            to="/qna"
            className={`hover:underline ${
              location.pathname === '/qna' ? 'text-blue-400 underline' : ''
            }`}
          >
            Q & A
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${
              location.pathname === '/about' ? 'text-blue-400 underline' : ''
            }`}
          >
            About
          </Link>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 border border-gray-500 text-sm sm:text-base px-3 py-1 rounded-md hover:bg-gray-700 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
