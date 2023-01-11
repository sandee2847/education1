import './App.css';
import './Style.css'
function Nav() {
    return (
        // fragmentation
        <nav className='nav'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Nav;