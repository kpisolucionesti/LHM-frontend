import { Button } from "@mui/material"
import { useContext } from "react"
import UserContext from "../../../context/user-context"

const LogoutButton = () => {

    const { logout } = useContext(UserContext)

    return (
        <Button variant="error" onClick={() => logout()} >Salir</Button>
    )
}

export default LogoutButton