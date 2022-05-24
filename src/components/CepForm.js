import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../styles/form.css"
import { routes } from "../const/routes";

    const schema = yup.object({

        cep: yup.number().min(8).required(),
        rua: yup.string().required(),
        bairro: yup.string().required(),
        ref: yup.string(),
        complemento: yup.string().required(),
        resnum: yup.string().required(),
        cidade: yup.string().required(),
        estado: yup.string().required()
    })

    function CepForm(){

        let navigate = useNavigate()

        const {register, setValue, handleSubmit, formState:{errors}} = useForm({
            resolver: yupResolver(schema)
        });

        const onSubmit = data => {
            navigate(routes.Verificacao, {replace: true})
        };

        const checkCep = (e) =>{
            const cep = e.target.value.replace(/\D/g, '');
            fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(res => res.json()).then(data => {
                console.log(data);
                setValue('rua', data.logradouro);
                setValue('bairro', data.bairro);
                setValue('cidade', data.localidade)
            })
        }

        return(
            <div className="form">
                <section className="formSect">
                    <h1>FORMULÁRIO PARA ADOÇÃO</h1>
                    <form className="formQuests" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Endereço</h2>
                        <div className="form2Quest">
                            <label>
                                <br/>
                                <input 
                                        {...register("cep")}
                                        name="cep"
                                        type="number"
                                        placeholder={"01001-000"}
                                        onBlur={checkCep}/>
                                <p style={
                                            {color:"red", 
                                            fontSize:"0.8rem"}}>
                                    {errors.cep && "Campo obrigatório!"}
                                </p>
                            </label>

                            <label>
                                <br/>
                                <input 
                                        {...register("rua")}
                                        name="rua"
                                        type={"text"} 
                                        placeholder={"Rua xxxx"}/>
                                <p style={
                                            {color:"red", 
                                            fontSize:"0.8rem"}}>
                                    {errors.rua && "Campo obrigatório!"}
                                </p>
                            </label>
                        

                            <label>
                                <br/>
                                <input 
                                        {...register("bairro")}
                                        name="bairro" 
                                        placeholder={"Bairro xxxx"}/>
                                    <p style={
                                        {color:"red", 
                                        fontSize:"0.8rem"}}>
                                    {errors.bairro && "Campo obrigatório!"}</p>
                            </label>

                            <label>
                                <br/>
                                <input
                                        {...register("ref")}
                                        name="ref"
                                        type={"text"}
                                        placeholder="Bar do seu 'Zé'"/>
                            </label>
                        </div>

                        <div className="form2Quest">
                            <label>
                                <br/>
                                <input 
                                        {...register("complemento")}
                                        name="complemento"
                                        type="text"
                                        placeholder="Casa, apt, terreno..."/>
                                <p style={
                                    {color:"red", 
                                    fontSize:"0.8rem"}}>
                                    {errors.complemento && "Campo obrigatório!"}</p>
                            </label>

                            <label>
                                <br/>
                                <input 
                                        {...register("resnum")}
                                        name="resnum"
                                        type="text"
                                        placeholder="00A"
                                        />
                                <p style={
                                    {color:"red", 
                                    fontSize:"0.8rem"}}
                                >{errors.resnum && "Campo obrigatório!"}</p>
                            </label>


                            <label>
                                <br/>
                                <input 
                                        {...register("cidade")}
                                        name="cidade"
                                        type={"text"} 
                                        placeholder={"Cidade"}/>
                                <p style={
                                    {color:"red", 
                                    fontSize:"0.8rem"}}
                                >{errors.cidade && "Campo obrigatório!"}</p>
                            </label>

                            <label>
                                <br/>
                                <input 
                                        {...register("estado")}
                                        name="estado" 
                                        type={"text"} 
                                        placeholder={"Estado"}/>
                                <p style={
                                    {color:"red", 
                                    fontSize:"0.8rem"}}>
                                {errors.estado && "Campo obrigatório!"}</p>
                            </label>

                        </div>
                        <button
                                type="submit" 
                                name="submit" 
                                className="nextButton">Próxima</button>
                    </form>

                </section>
                
            </div>
        )
    }
export default CepForm;