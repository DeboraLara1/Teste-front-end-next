/* eslint-disable import/no-anonymous-default-export */
import React, {useContext} from "react";
import Styled from './Styled.jsx'
import { Context } from '../../context/authContext';



export default () => {
    const {onSubmit, onChange, values, error} = useContext(Context);

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

                        <Styled.Label htmlFor="password">Digite sua senha:</Styled.Label>
                        <Styled.Input
                            type="password"
                            id="password"
                            name="password"
                            minLength="6"
                            placeholder="******"
                            onChange={onChange}
                            value={values.password}
                            required
                        />

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