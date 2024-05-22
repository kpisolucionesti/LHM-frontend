import { AppBar, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react'
import UserContext from '../../context/user-context'

const MenuBar = () => {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Usuario: {user.name}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar