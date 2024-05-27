import { Navigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuth"

const PrivateRoute = ({ children , ...rest }) => {
    const isAuthenticated = useAuthContext()
    return isAuthenticated ? children : <Navigate to="/" replace />
}

export default PrivateRoute
