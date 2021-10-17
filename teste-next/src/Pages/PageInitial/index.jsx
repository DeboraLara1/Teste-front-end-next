/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Styled from "./PageInitial";
import {FaTrash, FaEdit} from 'react-icons/fa'
import ListAPI from '../../Service/apiMock'
import Header from "../../Components/Header";

export default () => {
  const [listUser, setListUser] = useState([]);

    useEffect(() => {
        const listInitial = async () => {
          const list = await ListAPI.getList();
          setListUser(list);
        };
        ;console.log(listInitial())
      }, []);
      console.log(listUser)
    return(
        <>
        <Header />
        <Link to="/add-user">
            <Styled.NewUser>Adicionar novo usuário</Styled.NewUser>
        </Link>
        <Styled.Section>
            <Styled.Table>
                <Styled.Tr>
                    <Styled.Th textAlign="left">Nome</Styled.Th>
                    <Styled.Th>Ações</Styled.Th>
                </Styled.Tr>
                    {listUser.map((list) => (
                        <>
                            <Styled.Tr>
                                <Link to={`/details-user/${list.id}`} >
                                    <Styled.Td key={list.id}>{list.name} </Styled.Td> 
                                </Link>

                                <Styled.Td textAlign="center"> 
                                    <Link to="/remove-user">
                                        <FaTrash /> 
                                    </Link>
                                    <Link to="/edit-user">
                                        <FaEdit />
                                    </Link>
                                </Styled.Td>
                            </Styled.Tr>
                        </>
                    ))}
            </Styled.Table>
        </Styled.Section>
        </>
    )
}