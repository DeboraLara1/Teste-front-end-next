/* eslint-disable import/no-anonymous-default-export */
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import DropdowLogout from '../DropdowLogout';
import Styled from './Header'
import { Context } from '../../context/authContext';

export default () => {
  const { handleLogout } = useContext(Context);

  return (
    <>
      <Styled.Header>
        
        <Link to="/pages-inital">
          <img src="https://www.nextshipping.com.br/wp-content/themes/navas/dist/dev/img/logo.svg" alt="Logo Next Shipping"  />
        </Link>

        <Styled.MenuFiltro >
          <Styled.MenuLista><Link to="/pages-inital"> Usuários</Link></Styled.MenuLista>
          <Styled.MenuLista onClick={handleLogout}> Encerrar sessão </Styled.MenuLista>
        </Styled.MenuFiltro>
        
      </Styled.Header>
      
    </>
  );
};
