import { useContext } from "react"
import UserContext from "../context/user-context"

const useAuthContext = () => {
    const context = useContext(UserContext)

    if(context === undefined) {
        throw new Error('useUserContext fue usado fuera del proveedor')
    }

    return context.isAuthenticated
}

export default useAuthContext