import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { BackendApi } from "../services/BackendApi";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAthenticated] = useState(false)

    const checkUserData = useCallback((value) => {
        let findUser = BackendApi.users.getById(value).then(res => { return res })
        return findUser
    },[])

    const login = useCallback((code) => {
        checkUserData(code).then(res => {
            setUser(res)
            setIsAthenticated(true)
        })
    },[checkUserData])

    const logout = () => {
        setUser({})
        setIsAthenticated(false)
    }

    return (
        <UserContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext