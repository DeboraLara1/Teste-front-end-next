/* eslint-disable import/no-anonymous-default-export */
import React, {useContext} from "react";
import Styled from './Styled.jsx'
import { Context } from '../../context/authContext';



export default () => {
    const {onSubmit, onChange, values, error} = useContext(Context);

    const mostrarOcultarSenha = (mostrar) =>{
        let senha = document.getElementById("senha")

        // password
        senha.type === "password" ? senha.type = "text" : senha.type = "password"

        // eye
        mostrar === "true" ? document.getElementById("não").style.display = "none" : document.getElementById("não").style.display = "block"
        mostrar === "true" ? document.getElementById("sim").style.display = "block" :  document.getElementById("sim").style.display = "none"
    
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
                            type="password"
                            id="senha"
                            name="password"
                            minLength="6"
                            placeholder="******"
                            onChange={onChange}
                            value={values.password}
                            required
                        />

                        <Styled.ImgEyes src="https://qa-commerce.aguiabranca.com.br/_ui/responsive/theme-alpha/images/eye.svg" id="não" onClick={() => mostrarOcultarSenha('true')} alt="Icone olho visualizar senha" />
                        <Styled.ImgEyes src="https://qa-commerce.aguiabranca.com.br/_ui/responsive/theme-alpha/images/eye-visi.svg" id="sim" onClick={() => mostrarOcultarSenha('false')} style={{display: "none"}} alt="Icone olho escultar senha" />


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