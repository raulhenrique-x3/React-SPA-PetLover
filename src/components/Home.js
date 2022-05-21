import React from "react";
import {FaPaw} from "react-icons/fa"
import "../styles/home.css"

    function Home(){
        return(
            <div className="home">
                <section>
                    <div className="sectOne">
                        <img src={require('../assets/Dog1.png')} alt="imagemCachorroPreto" className="blackDog"/>
                        <div className="sectText">
                            <h1>Lorem Ipsum <FaPaw/></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default Home;