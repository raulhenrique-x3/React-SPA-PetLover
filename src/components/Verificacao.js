import React from "react";
import {FaPaw} from "react-icons/fa"
import "../styles/verificacao.css"

    function Verificacao(){
        return(
            <div className="verifSect">
                <h1>Sua solicitação será verificada e em breve te daremos uma resposta!
                    <FaPaw/>
                </h1>
            </div>
        )
    }

export default Verificacao;