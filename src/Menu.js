import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css'

const Menu=()=>{
   return(
       <div>
         <div className="navlink-data">
           <NavLink exact to="/" style={{textDecoration:"none"}} >API DATA</NavLink>
           <NavLink to="/about" style={{textDecoration:"none"}}>ABOUT US</NavLink>
           <NavLink to="/profile" style={{textDecoration:"none"}} >PROFILE</NavLink>
          </div>
       </div>
   )
}
export default Menu;