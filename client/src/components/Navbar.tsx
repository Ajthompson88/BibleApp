import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
if (darkMode) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
}, [darkMode]);

return (
<nav className="bg-gray-900 text-white p-4">
    <div className="flex justify-between items-center">
            <div className="flex space-x-4">
            <Link to="/" className="hover:underline px-2 py-1">Home</Link>
            <Link to="/reading" className="hover:underline px-2 py-1">Reading Plan</Link>
            <Link to="/qna" className="hover:underline px-2 py-1">Q & A</Link>
            </div>
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
</nav>
);
}

export default Navbar;
