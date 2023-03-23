import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'
import {useFavoritosContext } from './FavoritosContext'

const AuthUser = ({children}) => {

    const {userName}=useFavoritosContext()

    if (!userName.trim()) {
    swal("Usuario no identificado","Favor iniciar sesión antes de continuar","info")
    return <Navigate to={"/inicia"}/>
    }
    return children
}

export default AuthUser