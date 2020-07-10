import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={headerstyle}>
            <h1>To Do List </h1>
            <Link style={linkstyle} to="/" >Home</Link> | <Link style={linkstyle} to="/about" >about</Link>
        </header>
    )
}

const headerstyle = { 
    background :'black' ,
    color : 'white'
}


const linkstyle = {
    background :'black' ,
    color : 'white' ,
   
}
export default Header 
