import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaHeart} from "react-icons/fa"
import Button from "./Button";
import "../styles/adopt.css"
import {api} from "./api";

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
                    {dogImg.map((setDogImage)=>(
                        <li key={setDogImage.id}>
                            <img src={setDogImage.url} alt={setDogImage.name} className="randomImgs"/>
                        </li>
                    ))}
                </ul>
                

                <div className="adoptItems">
                    <h2>Deseja adotar um amor? <FaHeart/></h2>
                    
                    <h3>Responda nosso formulário de adoção
                        clicando no botão abaixo!
                    </h3>
                    
                    <Link to="/Form"><button type="submit" name="submit" className="subButton">Formulário!</button></Link>
                </div>
            </div>
        )
}

export default Adopt;
