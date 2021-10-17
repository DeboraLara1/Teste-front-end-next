/* eslint-disable import/no-anonymous-default-export */
import React from "react"; 
import Styled from './AddUser'
import Header from "../../Components/Header";

export default ()=>{

    return(
        <>
        <Header />
        <Styled.Div>
            <Styled.Form >
                <Styled.Label>Adicione um Id:</Styled.Label>
                <Styled.Input type="text"
                name="id"
                placeholder="Id" /> 
                
                <Styled.Label>Adicione uma createdAt:</Styled.Label>
                <Styled.Input type="text"
                name="createdAt"
                placeholder="createdAt" /> 

                <Styled.Label>Adicione um nome:</Styled.Label>
                <Styled.Input type="text"
                name="name"
                placeholder="nome" /> 

                <Styled.Label>Adicione uma URL de Avatar:</Styled.Label>
                <Styled.Input type="text"
                name="avatar"
                placeholder="avatar" />   
                <Styled.DivButtons>
                    <Styled.Button backgroundColor="#ffd700;" onClick='' >salvar</Styled.Button>
                    <Styled.Button backgroundColor="#b5b9c0;" onClick=''>Cancelar</Styled.Button> 
                </Styled.DivButtons>
            </Styled.Form>
        </Styled.Div>
        </>
    )
}