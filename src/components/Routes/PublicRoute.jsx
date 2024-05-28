import { Navigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuth"

const PublicRoute = ({ children, ...rest }) => {
    const session = useAuthContext()
    return !session.authentication ? children : <Navigate to="/dashboard" replace />
}

export default PublicRoute