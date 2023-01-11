import './App.css';
import './Style.css'
function Users() {
    return (
        // fragmentation
        <header className='header'>
            <ul>
                <span><a href="#">Example@gmail.com</a></span>
                <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-at"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-phone"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </header>
    );
}
export default Users;