/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    background-color: #000000;
`

const MenuFiltro = styled.header`
    display: inline-block;
`

const MenuLista = styled.header`
    display: inline-block;
    padding: 1rem;
    cursor: pointer;
    color: #ffffff;

    a {
        text-decoration:none; 
        display: flex;
        align-items: center;
        color: #ffffff;

    }

    a:hover {
        text-decoration:none; 
        color: #ffd700;
    }
`

export default {
    Header,
    MenuFiltro,
    MenuLista
}



