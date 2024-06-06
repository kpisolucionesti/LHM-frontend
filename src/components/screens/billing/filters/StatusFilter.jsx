import { ToggleButtonGroup } from "@mui/material"
import { useState } from "react"
import CustomToggleButton from "./ToggleButtonColor"

const StatusFilterButtons = ({ setStatus }) => {
    const [selected, setSelected] = useState('')

    const handleSelected = (event, value) => {
        if(value !== null){
            setStatus(value)
            setSelected(value)
        }
    }

    return (
        <ToggleButtonGroup
            color='primary'
            value={selected}
            exclusive
            onChange={handleSelected}
            size="small"
        >
            <CustomToggleButton selectedcolor="#686D76" value=''>Todos</CustomToggleButton>
            <CustomToggleButton selectedcolor="#d32f2f" value='No Facturado'>No Facturado</CustomToggleButton>
            <CustomToggleButton selectedcolor="#f57c00" value='Facturado'>Facturado</CustomToggleButton>
            <CustomToggleButton selectedcolor="#0288d1" value='Cobrado'>Cobrado</CustomToggleButton>
            <CustomToggleButton selectedcolor="#388e3c" value='Liquidado'>Liquidado</CustomToggleButton>
        </ToggleButtonGroup>
    )
}

export default StatusFilterButtons