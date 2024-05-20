import { Button, ButtonGroup, createTheme, ThemeProvider, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useEffect, useState } from "react"

const ActionFilter = ({ handleFilterStatus }) => {

    const [selected, setSelected] = useState('')

    useEffect(() => {
        handleFilterStatus(selected)
    },[selected])

    const theme = createTheme({
        palette: {
            all: {
                main: "#1d1c21",
                light: '#1d1c21',
                dark: '#111111',
                contrastText: "#f9ffff",
            },
            facturado: {
                main: '#E3D026',
                light: '#E9DB5D',
                dark: '#A29415',
                contrastText: '#242105',
            },
        }
    })

    const handleSelected = (event, value) => {
        if(value !== null){
            setSelected(value)
        }
    }

    return (
    <ThemeProvider theme={theme}>
        <ToggleButtonGroup
            color='primary'
            value={selected}
            exclusive
            onChange={handleSelected}
        >
            <ToggleButton value=''>Todos</ToggleButton>
            <ToggleButton value='No Facturado'>No Facturado</ToggleButton>
            <ToggleButton value='Facturado'>Facturado</ToggleButton>
            <ToggleButton value='Cobrado'>Cobrado</ToggleButton>
            <ToggleButton value='Liquidado'>Liquidado</ToggleButton>
        </ToggleButtonGroup>
        {/* <ButtonGroup>
            <Button variant="contained" color='all' onClick={() => handleFilterStatus("")} >Todos</Button>
            <Button variant="contained" color="error" onClick={() => handleFilterStatus("No Facturado")} >No Facturado</Button>
            <Button variant="contained" color="warning" onClick={() => handleFilterStatus("Facturado")} >Facturado</Button>
            <Button variant="contained" color="primary" onClick={() => handleFilterStatus("Cobrado")} >Cobrado</Button>
            <Button variant="contained" color="success" onClick={() => handleFilterStatus("Liquidado")} >Liquidado</Button>
        </ButtonGroup> */}
    </ThemeProvider>
    )
}

export default ActionFilter