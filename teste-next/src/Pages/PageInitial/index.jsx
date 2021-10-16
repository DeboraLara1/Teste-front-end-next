/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import Styled from "./PageInitial";
import {FaTrash, FaEdit} from 'react-icons/fa'
import List from '../../Service/apiMock'
import Header from "../../Components/Header";

export default () => {
  const [listUser, setListUser] = useState([]);

    useEffect(() => {
        const listInitial = async () => {
          const list = await List.getList();
          setListUser(list);
        };
        ;console.log(listInitial())
      }, []);
      console.log(listUser)
    return(
        <>
        <Header />
        <Styled.NewUser>Adicionar novo usuário</Styled.NewUser>
        <Styled.Section>
            <Styled.Table>
                <Styled.Tr>
                    <Styled.Th textAlign="left">Nome</Styled.Th>
                    <Styled.Th>Ações</Styled.Th>
                </Styled.Tr>
                    {listUser.map((list) => (
                        <>
                            <Styled.Tr>
                                <Styled.Td key={list.id}>{list.name}</Styled.Td>
                                <Styled.Td textAlign="center"> <FaTrash /> <FaEdit /></Styled.Td>
                            </Styled.Tr>
                        </>
                    ))}
            </Styled.Table>
        </Styled.Section>
        </>
    )
}