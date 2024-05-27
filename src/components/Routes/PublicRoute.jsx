import { Navigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuth"

const PublicRoute = ({ children, ...rest }) => {
    const isAuthenticated = useAuthContext()
    return !isAuthenticated ? children : <Navigate to="/dashboard" replace />
}

export default PublicRoute