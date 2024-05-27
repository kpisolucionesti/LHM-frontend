import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../../context/user-context";

const LoginForm = () => {
    const [value, setValue] = useState('')

    const { login } = useContext(UserContext)

    return (
        <Box>
            <TextField variant="outlined" placeholder="Ingrese ID Medico" onChange={({target}) => setValue(target.value)}  />
            <Button onClick={() => login(parseInt(value))} >Login</Button>
        </Box>
    )
}

export default LoginForm;