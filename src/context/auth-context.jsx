import { createContext, useCallback, useState } from "react";
import { BackendApi } from "../services/BackendApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    const login = useCallback((value) => {
        BackendApi.users.getById(value).then(res => {
            if(res){
                setUser(res)
                setIsAuthenticated(true)
            } else {
                alert("Usuario no encontrado")
            }
        })
    },[])

    const logout = () => {
        setIsAuthenticated(false)
        setUser({})
    }

    return (
        <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext