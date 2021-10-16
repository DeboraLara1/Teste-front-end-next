import React, { createContext, useState } from 'react';
import history from '../history.js';

const Context = createContext();

// o children esta sendo passado no app.js
// eslint-disable-next-line react/prop-types
function AuthPrivider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  // eslint-disable-next-line no-use-before-define
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);

  function initialState() {
    return { user: '', password: '' };
  }

  function login({ user, password }) {
    if (user === 'admin@nextShipping.com.br' && password === '123456') {
      return { token: '123456' };
    }
    return { error: 'Usuário ou senha inválido' };
  }

  function onChange(event) {
    // extraindo/pegando valores dos imputs
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const { token, error } = login(values);

    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      history.push('/pages-inital');
      setAuthenticated(true);
    }

    setError(error);
    setValues(initialState);
  }

  async function handleLogout() {
    setAuthenticated(false);

    localStorage.removeItem('token');
    history.push('/');
  }
  return (
    <Context.Provider
      value={{
        authenticated,
        onSubmit,
        onChange,
        values,
        error,
        handleLogout,
      }}>
      {children}
    </Context.Provider>
  );
}

// export não é default pq estamos exportando um objeto
export { Context, AuthPrivider };
