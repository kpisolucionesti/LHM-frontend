import { Navigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuth"

const PrivateRoute = ({ children , ...rest }) => {
    const auth = useAuthContext()
    return auth.isAuthenticated ? children : <Navigate to="/" replace />
}

export default PrivateRoute
