/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import DropdowLogout from '../DropdowLogout';
import Styled from './Header'

export default () => {

  return (
    <>
      <Styled.Header>
        
        <Link to="/pages-inital">
          <img src="https://www.nextshipping.com.br/wp-content/themes/navas/dist/dev/img/logo.svg" alt="Logo Next Shipping"  />
        </Link>

        <Styled.MenuFiltro >
          <Styled.MenuLista><Link to="/pages-inital"> Usuários</Link></Styled.MenuLista>
          <Styled.MenuLista><DropdowLogout /></Styled.MenuLista>
        </Styled.MenuFiltro>
        
      </Styled.Header>
      
    </>
  );
};
