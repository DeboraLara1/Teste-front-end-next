/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, setState } from "react";
import { Link } from 'react-router-dom';
import Styled from "./PageInitial";
import {FaTrash, FaEdit} from 'react-icons/fa'
import ListAPI from '../../Service/apiMock'
import Header from "../../Components/Header";



export default () => {
  const [listUser, setListUser] = useState([]);
//   const [listUserRemoved, setListUserRemoved] = useState([]);

    useEffect(() => {
        const listInitial = async () => {
          const list = await ListAPI.getList();
          setListUser(list);
        };
        listInitial()
    }, []);

    useEffect(() => {
        
    }, []);
    const listInitialdelete = async (id) => {
        const deleteList= await ListAPI.deleteListById(id);
        //deleteList.filter
        deleteList.delete(id)
    };
    
    return(
        <>
        <Header />
        <Link to="/add-user">
            <Styled.NewUser>Adicionar novo usuário</Styled.NewUser>
        </Link>
        <Styled.Section>
            <Styled.Table>
                <Styled.Thead>
                    <Styled.Tr>
                        <Styled.Th textAlign="left">Nome</Styled.Th>
                        <Styled.Th>Ações</Styled.Th>
                    </Styled.Tr>
                </Styled.Thead>

                    {listUser.map((list) => (
                        <>
                            <Styled.Tbody>
                                <Styled.Tr>
                                    <Link to={`/details-user/${list.id}`} >
                                        <Styled.Td key={list.id}>{list.name} </Styled.Td> 
                                    </Link>

                                    <Styled.Td textAlign="center"> 
                                        
                                            <FaTrash onClick={() => listInitialdelete(list.id)}/> 
                                        <Link to="/edit-user">
                                            <FaEdit />
                                        </Link>
                                    </Styled.Td>
                                </Styled.Tr>
                            </Styled.Tbody>
                        </>
                    ))}
            </Styled.Table>
        </Styled.Section>
    </>
    )
}