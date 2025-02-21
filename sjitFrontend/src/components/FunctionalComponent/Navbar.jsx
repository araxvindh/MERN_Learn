import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar =()=>
{
    var[dropdown,showDropDown] = useState(false)
    var[dropdown1,showDropDown1] = useState(false)
    return( 
        <header>
            <nav>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skill'>Contact</Link></li>
                <li><Link to='/hoc'>HOC</Link></li>
            
                <div class="dropdown" onMouseEnter={()=> showDropDown1(!dropdown1)} onMouseLeave={()=>showDropDown1(!dropdown1)}>
                <span>Memoziation</span>
                    {( dropdown1  && <ol class="dropdown-link"> 
                    <li className='dropdown-list'><Link to='/memo'>Memo</Link></li>
                    <li className='dropdown-list'><Link to='/lazy'>LazyAndSuspense</Link></li>
                </ol> )}

                </div>
                <div class="dropdown" onMouseEnter={()=> showDropDown(!dropdown)} onMouseLeave={()=>showDropDown(!dropdown)}>
                <span>Hooks</span>
                    {( dropdown  && <ol class="dropdown-link"> 
                    <li className='dropdown-list'><Link to='/use-state'>Usestate</Link></li>
                    <li className='dropdown-list'><Link to='/use-effect'>UseEffect</Link></li>
                    <li className='dropdown-list'><Link to='/use-effect-api'>UseEffectApi</Link></li>
                    <li className='dropdown-list'><Link to='/use-ref'>UseRef</Link></li>
                    <li className='dropdown-list'><Link to='/use-memo'>UseMemo</Link></li>
                    <li className='dropdown-list'><Link to='/use-callback'>UseCallBack</Link></li>
                    <li className='dropdown-list'><Link to='/use-memoiz'>UseMemoize</Link></li>

                </ol> )}

                </div>
                <li><Link to='/signup'>Signup</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;