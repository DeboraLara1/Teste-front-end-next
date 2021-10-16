/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'


const Container = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-190px;
    margin-top:-200px;

`

const ContainerForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 25em;
    color: black;
    background-color: white;
    border-radius: 2%;
`

const ImgLogo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;
`

const Img= styled.img`
    max-width:50rem;

`

const CardForm = styled.div`
    border-width: medium;
    border-style: solid;
    border-color: rgb(58, 55, 55);
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: flex-start;
`

const H1 = styled.h1`  
`

const Label = styled.label`
`

const Input = styled.input`
width: 18rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem; 
`
const Button = styled.button`
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    width: 30%;
    height: 29px;
`


export default {
    Container,
    ContainerForm,
    ImgLogo,
    Img,
    CardForm,
    Formulario,
    H1,
    Label,
    Input,
    Button
}
