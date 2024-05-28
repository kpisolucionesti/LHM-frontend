import { Navigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuth"

const PrivateRoute = ({ children , ...rest }) => {
    const session = useAuthContext()
    return session.authentication ? children : <Navigate to="/" replace />
}

export default PrivateRoute
