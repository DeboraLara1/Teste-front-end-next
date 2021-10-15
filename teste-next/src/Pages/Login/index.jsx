/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Styled from './Styled.jsx'


export default () => {
    return(
        <>
        <Styled.Container>

            <Styled.ImgLogo>
                <Styled.Img src="https://www.nextshipping.com.br/wp-content/themes/navas/dist/dev/img/logo.svg" alt="Logo da Amazom Prime-Video na cor preto e branco" />
            </Styled.ImgLogo>

            <Styled.ContainerForm>
                <Styled.CardForm>

                    <Styled.Formulario>
                        <Styled.H1>Fazer Login</Styled.H1>

                        <Styled.Label htmlFor="user">Digite seu Email</Styled.Label>
                        <Styled.Input
                            type="user"
                            id="user"
                            name="user"
                            placeholder="email@next.com.br"
                            required
                        />

                        <Styled.Label htmlFor="password">Digite sua senha:</Styled.Label>
                        <Styled.Input
                            type="password"
                            id="password"
                            name="password"
                            minLength="6"
                            placeholder="******"
                            required
                        />

                        <Styled.Button type="submit">Fazer login</Styled.Button>
                    </Styled.Formulario>

                </Styled.CardForm>
            </Styled.ContainerForm>
        </Styled.Container>
        </>
    )
}