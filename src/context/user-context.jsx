import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";
import AuthContext from "./auth-context";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const { isAuthenticated, session } = useContext(AuthContext) 

    const checkUserData = useCallback((value) => {
        let findUser = BackendApi.users.getById(value.user_id).then(res => { return res })
        return findUser
    },[])

    useEffect(() => {
        if(isAuthenticated){
            checkUserData(session).then(res => {
                setUser(res)
            })
        }
    },[isAuthenticated, session, checkUserData])

    return (
        <UserContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext