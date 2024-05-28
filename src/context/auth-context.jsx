import { createContext, useCallback, useState } from "react";
import { BackendApi } from "../services/BackendApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState({})

    const checkSession = useCallback(() => {
        let usersList = BackendApi.userId.getAll().then(res => { return res })
        return usersList
    },[])

    const handleAuthentication = useCallback((id, value) => {
        let authenticated = BackendApi.userId.update(id, value).then(res => { return res })
        return authenticated
    },[])

    const login = useCallback((value) => {
        if(!value.password){
            alert("Por favor ingresar contraseña")
        } else {
            checkSession().then(res => {
                let user = res.find(user => user.username === value.username && user.password === value.password)
                if(user) {
                    handleAuthentication(user.id, {...user, authentication: true}).then(res => {
                        setSession(res)
                    })
                } else {
                    alert("Usuario o clave invalida")
                }
            })
        }
    },[checkSession, handleAuthentication])

    const logout = () => {
        handleAuthentication(session.id, {...session, authentication: false})
        setSession({})
    }

    return (
        <AuthContext.Provider value={{ login, logout, session }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext