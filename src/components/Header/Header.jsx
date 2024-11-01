import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                <span>My Website</span><br></br>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <NavLink to='/posts'>Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;