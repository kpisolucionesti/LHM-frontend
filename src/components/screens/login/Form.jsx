import { Box, Button, TextField, Stack } from "@mui/material";
import { useContext, useState } from "react";
import AuthContext from "../../../context/auth-context";

const LoginForm = () => {
    const [values, setValues] = useState('')
    const { login } = useContext(AuthContext)

    const handleValuesChange = (target) => {
        setValues({...values, [target.name]:target.value})
    }

    console.log(values)


    const handleSubmit = (event) => {
        event.preventDefault()
        if(values.name !== '' && values.password !== ''){
            login(values)
        } else {
            alert("Debe llenar todos los datos")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <Stack spacing={1}>
                    <TextField variant="outlined" name="username" value={values.name} placeholder="Ingrese Nombre de Usuario" onChange={({target}) => handleValuesChange(target)}  />
                    <TextField variant="outlined" name="password" value={values.password} placeholder="Ingrese Clave" onChange={({target}) => handleValuesChange(target)}  />
                    <Button variant="contained" color="success" type="submit" >Login</Button>
                </Stack>
            </Box>
        </form>
    )
}

export default LoginForm;