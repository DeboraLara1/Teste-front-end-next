/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';
import Styled from './DetailsUser'
import ListAPI from '../../Service/apiMock'
import IdImg from '../../Img/IdImg.png'
import Credencial from '../../Img/images.png'


export default () =>{
    const { id } = useParams()
    const [listUserSpecific, setListUserSpecific] = useState([]);

    useEffect(() => {
        const listById = async () => {
            const idSelect = id
          const listSpecific = await ListAPI.getListById(idSelect);
          setListUserSpecific(listSpecific);
        };
        ;console.log(listById())
    }, []);

  const firsDate = (lista) => dateFormat(lista.createdAt,'dddd, mmmm dS, yyyy');

    return(
        <>
        <Styled.gridContainer>
            <Link to="/pages-inital">
                <Styled.Buttom>Retornar</Styled.Buttom>
            </Link>
            <Styled.Card>
                
                <Styled.Banner>
                    <Styled.Img src={listUserSpecific.avatar} alt={`Avatar do usuário ${listUserSpecific.name}`}/>
                </Styled.Banner>

                <Styled.H2 className="info-user">
                    <Styled.Div>Olá, Sou o </Styled.Div>
                    {listUserSpecific.name}
                </Styled.H2>

                <Styled.Actions>
                    <Styled.Ul>
                        <Styled.DivList>
                            <Styled.ImgIcons src={IdImg} alt="Icon" />
                            {firsDate(listUserSpecific)}
                        </Styled.DivList>
                        <Styled.DivList>
                            <Styled.ImgIcons src={Credencial} alt="Icon"  />
                            ID - {listUserSpecific.id}
                        </Styled.DivList>
                    </Styled.Ul>
                </Styled.Actions>
            </Styled.Card> 
        </Styled.gridContainer>
        </>
    );
}