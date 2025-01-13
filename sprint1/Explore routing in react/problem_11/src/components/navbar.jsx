import { NavLink } from "react-router-dom";
import '../styles/navbar.css'
export const Navbar = ()=>{
    
    return(
        <div className="navbar">
            <NavLink className="navlist" style={{textDecoration:"None"}} to='/'>Home</NavLink>
            <NavLink className="navlist" style={{textDecoration:"None"}} to='/about'>About</NavLink>
            <NavLink className="navlist" style={{textDecoration:"None"}} to='/contact'>Contact</NavLink>
            <NavLink className="navlist" style={{textDecoration:"None"}} to='/services'>Services</NavLink>
        </div>
    )
}