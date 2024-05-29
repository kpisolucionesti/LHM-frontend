import { Box, Button, TextField, Stack } from "@mui/material";
import { useContext, useState } from "react";
import AuthContext from "../../../context/auth-context";

const LoginForm = () => {
    const [values, setValues] = useState('')
    const { login } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(values !== ''){
            login(parseInt(values))
        } else {
            alert("Debe llenar todos los datos")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <Stack spacing={1}>
                    <TextField label="Usuario" variant="outlined" name="username" defaultValue={values.name || ''} placeholder="Ingrese Nombre de Usuario" onChange={({target}) => setValues(target.value)} />
                    <Button variant="contained" color="success" type="submit" >Login</Button>
                </Stack>
            </Box>
        </form>
    )
}

export default LoginForm;