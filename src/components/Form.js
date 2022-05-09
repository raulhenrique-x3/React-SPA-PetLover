import React from "react";
import Button from "./Button"
import form from "../styles/form.css"

    function Form(){
        return(
            <div className="form">
                <section className="formSect">
                    <h1>FORMULÁRIO PARA ADOÇÃO</h1>
                    <div className="formQuests">
                        <p>
                            Nome completo
                            <br/>
                            <input type={"text"} placeholder={"Seu nome"}/>
                        </p>

                        <p>
                            CPF
                            <br/>
                            <input type={"text"} placeholder={"Seu CPF"}/>
                        </p>

                        <p>
                            Seu número
                            <br/>
                            <input type={"tel"} placeholder={"+5500987654321"}/>
                        </p>

                        <p>
                            Data de nascimento
                            <br/>
                            <input type={"date"}/>
                        </p>
                        <Button/>
                    </div>
                </section>
                
            </div>
        )
    }
export default Form;