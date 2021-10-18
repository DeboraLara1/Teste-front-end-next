/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect,  } from "react"; 
import Styled from './AddUser'
import ListAPI from '../../Service/apiMock'
import Header from "../../Components/Header";

const initialState = {
    name: '',
    avatar: ''
};

export default ()=>{

  const [newUser, setNewUser] = useState([]);
  const [values, setValues] = useState(initialState);

    useEffect(() => {
        const listInitial = async () => {
          const list = await ListAPI.getList();
          setNewUser(list);
        };
        listInitial()
    }, []);

    function onChange(event) {
        // extraindo/pegando valores dos imputs
        const { value, name } = event.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      }
    return(
        <>
        <Header />
        <Styled.H1>
            Adicione um novo usuário:
        </Styled.H1>
        <Styled.Div>
            <Styled.Form >
                <Styled.Label>Adicione um nome:</Styled.Label>
                <Styled.Input type="text"
                name="name"
                placeholder="nome" /> 

                <Styled.Label>Adicione uma URL de Avatar:</Styled.Label>
                <Styled.Input type="text"
                name="avatar"
                placeholder="avatar" />   
                <Styled.DivButtons>
                    <Styled.Button backgroundColor="#ffd700;"> Salvar </Styled.Button>
                    <Styled.Button backgroundColor="#b5b9c0;"> Cancelar </Styled.Button> 
                </Styled.DivButtons>
            </Styled.Form>
        </Styled.Div>
        </>
    )
}