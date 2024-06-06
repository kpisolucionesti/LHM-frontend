import { useContext } from 'react'
import { Button } from '@mui/material'
import { logout } from '../../context/auth-context'
import AuthContext from '../../context/auth-context'

const LogoutButton = () => {

    const { logout } = useContext(AuthContext)

    return (
        <Button onClick={() => logout()} variant='error' >Salir</Button>
    )
}

export default LogoutButton