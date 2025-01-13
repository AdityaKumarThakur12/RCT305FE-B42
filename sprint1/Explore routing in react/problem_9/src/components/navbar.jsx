import {Link} from 'react-router-dom'
import "../styles/navbar.css"
export const Navbar = ()=>{
    
    return(
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        
    )
}