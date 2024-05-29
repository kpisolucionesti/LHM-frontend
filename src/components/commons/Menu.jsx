import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import LogoutButton from './user/Logout'
import useAuthContext from '../../hooks/useAuth'

const MenuBar = () => {

    const user = useAuthContext()
    const pages = ['Dashboard', 'Edo. Cuenta', 'Condominio']


    return (
        <AppBar position="static" sx={{ marginX: 0 }} >
            <Toolbar>
                <IconButton size='large' color='inherit' >
                    <AccountCircle />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }} >
                    {user.firstName} {user.lastName} 
                </Typography>
                { pages.map((page) => (
                    <MenuItem key={page}>{page}</MenuItem>
                ))}
                <LogoutButton />
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar