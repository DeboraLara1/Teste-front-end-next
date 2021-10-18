/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    background-color: #000000;
    padding-left: 1rem;
    padding-top: 1rem;

    img{
        width: 71%;
    }
`

const MenuFiltro = styled.div`
    display: inline-block;
`

const MenuLista = styled.span`
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

    :hover {
        text-decoration:none; 
        color: #ffd700;
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



