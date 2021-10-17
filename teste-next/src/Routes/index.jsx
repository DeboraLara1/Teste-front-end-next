import React, {useContext} from 'react'
import {Switch, Route, Redirect} from  'react-router-dom'
import { Context } from '../context/authContext'

import  Home  from '../Pages/Home';
import Login from '../Pages/Login';
import  PagesInital  from '../Pages/PageInitial';
import  DetailsUser  from '../Pages/DetailsUser';
import  EditUser  from '../Pages/EditUser';
import  AddUser  from '../Pages/AddUser';

// Costumizando as rotas && deixando privadas
function CustomRoute({ isPrivate, ...rest}) {
    const { authenticated } = useContext(Context)

    // verifica se a rota for privada e o user não estiver autenticado redireciona para fazer login
    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} /> ;
}

export default function Routes() {
    return(
        <Switch>
            <CustomRoute exact path="/">
                <Home />
            </CustomRoute>

            <CustomRoute exact path="/login">
                <Login/>
            </CustomRoute>

            <CustomRoute isPrivate exact path="/pages-inital">
                <PagesInital/>
            </CustomRoute>

            <CustomRoute isPrivate exact path="/details-user/:id">
                <DetailsUser />
            </CustomRoute>

            <CustomRoute isPrivate exact path="/edit-user">
                <EditUser />
            </CustomRoute>

            <CustomRoute isPrivate exact path="/add-user">
                <AddUser />
            </CustomRoute>
        </Switch>
    )
}