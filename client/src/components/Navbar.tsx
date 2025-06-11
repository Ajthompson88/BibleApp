import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <nav className="bg-blue-700 text-white p-4 flex space-x-4">
            <Link to= "/" className= "hover:underline">Home</Link>
            <Link to= "/reading" className="hover:underline">Reading Plan</Link>
            <Link to= "/qna" className="hover:underline">Q&A</Link>
        </nav>
    );

}
export default NavBar;