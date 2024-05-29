import { Navigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuth"

const PublicRoute = ({ children, ...rest }) => {
    const auth = useAuthContext()
    return !auth.isAuthenticated ? children : <Navigate to="/dashboard" replace />
}

export default PublicRoute