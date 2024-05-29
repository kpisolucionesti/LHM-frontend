import { useContext } from "react"
import AuthContext from "../context/auth-context"

const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(context === undefined) {
        throw new Error('useUserContext fue usado fuera del proveedor')
    }

    return context
}

export default useAuthContext