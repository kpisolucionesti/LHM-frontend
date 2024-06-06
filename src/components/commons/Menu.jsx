import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import LogoutButton from './Logout'
import useAuthContext from '../../hooks/useAuth'

const MenuBar = () => {

    const auth = useAuthContext()


    return (
        <AppBar position="fixed" sx={{ marginX: 0 }} >
            <Toolbar>
                <IconButton size='large' color='inherit' >
                    <AccountCircle />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }} >
                    {auth.user.firstName} {auth.user.lastName} 
                </Typography>
                <LogoutButton />
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar