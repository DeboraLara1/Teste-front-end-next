/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'



const Form = styled.form` 
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 4rem;

`
const Label = styled.label`
    color: white;
    margin-top: 2%;
`
const Input = styled.input`
    overflow: hidden;
    border-radius: 2rem;
    height: 2rem;
    font-size: 15px;
    padding-left: 1rem;
    margin-top: 0.5rem;
`
const Button = styled.button`
    width: 88px;
    margin-left: 1rem;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.backgroundColor};
    overflow: hidden;
    border-radius: 2rem;
    height: 2rem;
    font-size: 15px;

    :hover{
        font-size: 14px;
        font-weight: bold;
    }
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

const H1 = styled.h1`
    color: white;
    margin-left: 8%;
`

export default{
    Form,
    Label,
    Input,
    Button,
    Div,
    DivButtons,
    H1
}