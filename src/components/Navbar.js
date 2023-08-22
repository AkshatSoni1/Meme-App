import React from 'react'
import logo from '../ghost1.gif'
export default function Navbar() {
    return (
        <>
{/* <nav className="navbar fixed-top" style={{background:"linear-gradient(160deg, #6b40b8, #f452b3)",padding:"0px"}}> */}
<nav className="navbar fixed-top" style={{background:"linear-gradient(120deg,#7b4397 , #dc2430)",padding:"0px"}}>
<div className="container ">
  
  <a className="navbar-brand ms-2" href="/">
  <img src={logo} alt="Logo" width="43" height="40" style={{borderRadius:"7px"}}/>
  <span className='ms-2' style={{color:"white"}}>Memost</span>
 </a>
  </div>
</nav>
</>
    )
}
