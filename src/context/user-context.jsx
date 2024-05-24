import { createContext } from "react";

export const user = {
    name: "Jhosbelis Grarcia",
    code: "357"
}

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext