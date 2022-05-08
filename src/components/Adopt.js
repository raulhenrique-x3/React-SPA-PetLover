import React from "react";
import { Link } from "react-router-dom";
import adopt from "../styles/adopt.css"

    function Adopt(){
        return(
            <div className="adoptBox">
                <img src={require('../assets/cat1.jpg')} alt="cat1" className="cat1"/>

                <div className="adoptItems">
                    <h2>Deseja adotar um animal?</h2>
                    
                    <h3>Responda nosso formulário de adoção
                        clicando no botão abaixo!
                    </h3>
                    
                    <button className="toForm"><Link to="/Form">Formulário!</Link></button>
                </div>
            </div>
        )
}

export default Adopt;
