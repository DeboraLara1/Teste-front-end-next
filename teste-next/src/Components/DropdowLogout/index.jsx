/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineUser } from 'react-icons/ai';
import { Context } from '../../context/authContext';
import './DropdowLogout.css';

export default () => {
  const { handleLogout } = useContext(Context);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#ffd700', color: '#ffffff', border: 'none'}}>
          <AiOutlineUser className="logo-user" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item data-testid="handleLogout" style={{marginTop:'1rem',}} onClick={handleLogout} >Sair</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
