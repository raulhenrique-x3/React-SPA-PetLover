import React from "react";
import {FaPaw} from "react-icons/fa"
import { Link } from "react-router-dom";
import "../styles/header.css"

function Header(){

    return(
        <div className="header">
            <h1>
                PetLover
                <FaPaw className={"faPaw"}/>
            </h1>
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">Sobre nós</Link></li>
                <li><Link to="/Adopt">Adotar</Link></li>
            </ul>
        </div>
    )
}

export default Header;