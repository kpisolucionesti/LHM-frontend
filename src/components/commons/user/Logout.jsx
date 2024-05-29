import { Button } from "@mui/material"
import { useContext } from "react"
import AuthContext from "../../../context/auth-context"

const LogoutButton = () => {

    const { logout } = useContext(AuthContext)

    return (
        <Button variant="error" onClick={() => logout()} >Salir</Button>
    )
}

export default LogoutButton