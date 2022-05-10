import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import adopt from "../styles/adopt.css"
import api from "./api";

    function Adopt(){

        const [dogImg, setDogImage] = useState([]);

        useEffect(()=>{
            api.get("/v1/images/search")
            .then((response)=> setDogImage(response.data))
            .catch((err)=>{
                console.error("Algum erro " + err)
            })
        }, [])
            

        return(
            <div className="adoptBox">
                <ul>
                    {dogImg.map((setDogImage, index)=>(
                        <li key={setDogImage.id}>
                            <img src={setDogImage.url} alt={setDogImage.name} className="cat1"/>
                        </li>
                    ))}
                </ul>
                

                <div className="adoptItems">
                    <h2>Deseja adotar um animal?</h2>
                    
                    <h3>Responda nosso formulário de adoção
                        clicando no botão abaixo!
                    </h3>
                    
                    <Link to="/Form"><button className="toForm">Formulário!</button></Link>
                </div>
            </div>
        )
}

export default Adopt;
