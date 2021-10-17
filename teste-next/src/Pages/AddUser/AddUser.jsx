/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'



const Form = styled.form` 
    display: flex;
    flex-direction: column;
    width: 50rem;
    margin: 4rem;

`
const Label = styled.label`
    color: white;
`
const Input = styled.input`
`
const Button = styled.button`
    width: 88px;
    margin-left: 1rem;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.backgroundColor};
`
const Div = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivButtons = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export default{
    Form,
    Label,
    Input,
    Button,
    Div,
    DivButtons
}