/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    left: 85%;
    top: 10%;
    width: 10%;
    height: 4.5%;
    border: none;
    overflow: hidden;
    border-radius: 2rem;
    height: 2rem;
    font-size: 15px;
    padding-left: 1rem;
    margin-top: 0.5rem;
    left: 43%;
    top: 57%;
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