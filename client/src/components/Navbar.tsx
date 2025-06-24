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
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 text-black dark:text-white px-4 sm:px-6 py-3 fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === '/' ? 'text-blue-500 dark:text-blue-400 underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/reading-plan"
            className={`hover:underline ${
              location.pathname === '/reading-plan' ? 'text-blue-500 dark:text-blue-400 underline' : ''
            }`}
          >
            Reading Plan
          </Link>
          <Link
            to="/qna"
            className={`hover:underline ${
              location.pathname === '/qna' ? 'text-blue-500 dark:text-blue-400 underline' : ''
            }`}
          >
            Q & A
          </Link>
          <Link
            to="/questions"
            className={`hover:underline ${
              location.pathname === '/questions' ? 'text-blue-500 dark:text-blue-400 underline' : ''
            }`}
          >
            Asked Questions
          </Link>
          <Link
            to="/verse-lookup"
            className={`hover:underline ${
              location.pathname === '/verse-lookup' ? 'text-blue-500 dark:text-blue-400 underline' : ''
            }`}
          >
            Lookup
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${
              location.pathname === '/about' ? 'text-blue-500 dark:text-blue-400 underline' : ''
            }`}
          >
            About
          </Link>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 rounded-md border text-sm sm:text-base transition 
            border-gray-400 dark:border-gray-600 
            bg-gray-100 dark:bg-gray-800 
            text-gray-800 dark:text-gray-100 
            hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}
