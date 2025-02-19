import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar =()=>
{
    return(
        <header>
            <nav>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skill'>Contact</Link></li>
                
                <div class="hov">
                <span>Hooks</span>
                    <ol class="hoverapp"> 
                    <li><Link to='/use-state'>Usestate</Link></li>
                    <li><Link to='/use-effect'>UseEffect</Link></li>
                </ol>
                </div>
                <li><Link to='/signup'>Signup</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;