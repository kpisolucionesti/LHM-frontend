import { createContext, useCallback, useState } from "react";
import { BackendApi } from "../services/BackendApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [session, setSession] = useState({})

    const checkSession = useCallback(() => {
        let usersList = BackendApi.userId.getAll().then(res => { return res })
        return usersList
    },[])

    const login = useCallback((value) => {
        if(!value.password){
            alert("Por favor ingresar contraseña")
        } else {
            checkSession().then(res => {
                let user = res.find(user => user.username === value.username && user.password === value.password)
                if(user) {
                    setSession(user)
                    setIsAuthenticated(true)
                } else {
                    alert("Usuario o clave invalida")
                }
            })
        }
    },[checkSession])

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ login, logout, session, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext