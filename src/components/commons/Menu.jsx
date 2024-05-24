import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { useContext } from 'react'
import UserContext from '../../context/user-context'

const MenuBar = () => {

    const { user } = useContext(UserContext)
    const pages = ['Dashboard', 'Edo. Cuenta', 'Condominio']


    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size='large' color='inherit' >
                    <AccountCircle />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }} >
                    {user.name}
                </Typography>
                { pages.map((page) => (
                    <MenuItem key={page}>{page}</MenuItem>
                ))}
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar