/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    left: 85%;
    top: 10%;
    width: 10%;
    height: 4.5%;
    border: none;
`

const Logo = styled.img`
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 20vw;
`
export default {
    Button,
    Logo
}