/* eslint-disable import/no-anonymous-default-export */
import React, {useContext, useState} from "react";
import Styled from './Styled.jsx'
import { Context } from '../../context/authContext';



export default () => {
    const {onSubmit, onChange, values, error} = useContext(Context);
    //passamos o valor do type dentro co useState
    const [ inputType, setInputType ] = useState("password")
    const [ sourceImage, setSourceImage ] = useState( "https://qa-commerce.aguiabranca.com.br/_ui/responsive/theme-alpha/images/eye.svg" )

    const changeInputSenha= () =>{
        if(inputType === "password"){
            setSourceImage("https://qa-commerce.aguiabranca.com.br/_ui/responsive/theme-alpha/images/eye-visi.svg")
            setInputType("text")

        } else {
            setSourceImage("https://qa-commerce.aguiabranca.com.br/_ui/responsive/theme-alpha/images/eye.svg")
            setInputType("password")
        }
    }

    return(
        <>
        <Styled.Container>

            <Styled.ImgLogo>
                <Styled.Img src="https://www.nextshipping.com.br/wp-content/themes/navas/dist/dev/img/logo.svg" alt="Logo Next Shipping" />
            </Styled.ImgLogo>

            <Styled.ContainerForm>
                <Styled.CardForm>

                    <Styled.Formulario  onSubmit={onSubmit}>
                        <Styled.H1>Fazer Login</Styled.H1>

                        <Styled.Label htmlFor="user">Digite seu Email</Styled.Label>
                        <Styled.Input
                            type="user"
                            id="user"
                            name="user"
                            placeholder="email@next.com.br"
                            onChange={onChange}
                            value={values.user}
                            required
                        />

                        <Styled.Label htmlFor="senha">Digite sua senha:</Styled.Label>
                        <Styled.Input
                            type= {inputType}
                            id="senha"
                            name="password"
                            minLength="6"
                            placeholder="******"
                            onChange={onChange}
                            value={values.password}
                            required
                        />

                        <Styled.ImgEyes src={ sourceImage } id="não" onClick={() => changeInputSenha('true')} alt="Icone olho visualizar senha" />


                        {error && (
                            <div className="user-login__error" data-testid="error">{error}</div>
                        )}
                        <Styled.Button type="submit">Fazer login</Styled.Button>
                    </Styled.Formulario>

                </Styled.CardForm>
            </Styled.ContainerForm>
        </Styled.Container>
        </>
    )
}