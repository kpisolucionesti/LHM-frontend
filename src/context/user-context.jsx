import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";
import AuthContext from "./auth-context";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const { session } = useContext(AuthContext) 

    const checkUserData = useCallback((value) => {
        let findUser = BackendApi.users.getById(value.user_id).then(res => { return res })
        return findUser
    },[])

    useEffect(() => {
        if(session.authentication){
            checkUserData(session).then(res => {
                setUser(res)
            })
        }
    },[session, checkUserData])

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext