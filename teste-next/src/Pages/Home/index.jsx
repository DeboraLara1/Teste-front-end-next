/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Styled from "./Home";
import { Link } from "react-router-dom";
export default () => {
   
    return(
    <>
        <Link to="/login">
            <Styled.Button>
                Fazer login
            </Styled.Button>
        </Link>
            
        <Styled.Logo src="https://www.nextshipping.com.br/wp-content/themes/navas/dist/img/logo.svg" alt="Logo Next Shipping"/>
    </>
    )

}