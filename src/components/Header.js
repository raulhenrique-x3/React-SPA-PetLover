import React from "react";
import {FaPaw, FaUserCircle} from "react-icons/fa"
import { Link } from "react-router-dom";
import header from "../styles/header.css"

function Header(){
    return(
        <div className="Header">
            <h1>
                PetLover
                <FaPaw className={"faPaw"}/>
            </h1>
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">Sobre nós</Link></li>
                <li><Link to="/Adopt">Adote</Link></li>
                <li>Login ou cadastro</li>
                <FaUserCircle className={"faUser"}/>
            </ul>
            
        </div>
    )
}

export default Header;