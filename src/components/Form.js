import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../styles/form.css"
import { routes } from "../const/routes";

    const schema = yup.object({

        fullName: yup.string().min(2).required(),

        email: yup.string().email().required(),

        number: yup.number().positive().min(12).integer().required(),

        age: yup.number().positive().min(18).integer().required()
    }).required()

    function Form(){

        let navigate = useNavigate()

        const { register, handleSubmit, formState:{ errors } } = useForm({
            resolver: yupResolver(schema)
        });
        const onSubmit = data => {
            navigate(routes.Cep, {replace: true})
        };


        return(
            <div className="form">
                <section className="formSect">
                    <h1>FORMULÁRIO PARA ADOÇÃO</h1>
                        <form className="formQuests" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form2Quest">
                                <label>
                                    <p>Nome completo</p>
                                    <br/>
                                    <input  
                                            {...register("fullName")}
                                            name="fullName"
                                            type="text"  
                                            placeholder="Seu nome"
                                            />
                                    <p style={{color:"red", fontSize:"1rem"}}>{errors.fullName && "Campo obrigatório!"}</p>
                                </label>
                                
                                <label>
                                    <p>Email</p>
                                    <br/>
                                    <input  
                                            {...register("email")}
                                            name="email"
                                            type={"text"} 
                                            placeholder={"exemplo@outlook.com"}
                                            />
                                    <p style={{color:"red", fontSize:"0.8rem"}}>{errors.email?.type === 'required' && "Campo obrigatório!"}</p>
                                </label>
                            </div>

                            
                                <button type="submit" name="submit"  className="nextButton">Próxima</button>
                            
                            <div className="form2Quest">
                                <label>
                                    <p>Número para contato</p>
                                    <br/>
                                    <input
                                            {...register("number")}
                                            name="number"
                                            type={"tel"} 
                                            placeholder={"(DDD)987654321"}
                                            />
                                    <p style={{color:"red", fontSize:"0.8rem"}}>{errors.number && "Campo obrigatório!"}</p>
                                </label>

                                <label>
                                    <p>Idade</p>
                                    <br/>
                                    <input
                                            {...register("age")}
                                            name="age"
                                            type={"number"}
                                            placeholder={"Maior que 18"}
                                            />
                                    <p style={{color:"red", fontSize:"0.8rem"}}>{errors.age && "Campo obrigatório!"}</p>
                                </label>
                            </div>
                            
                        </form>

                    </section>
            </div>
            
        )
    }
export default Form;