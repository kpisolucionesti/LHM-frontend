import { ToggleButtonGroup } from "@mui/material"
import { useState } from "react"
import CustomToggleButton from "./ToggleButtonColor"

const ClientFilterButtons = ({ setClient }) => {

    const [selected, setSelected] = useState('')

    const handleSelected = (event, value) => {
        if(value !== null){
            setClient(value)
            setSelected(value)
        }
    }

    return (
        <ToggleButtonGroup
            value={selected}
            exclusive
            onChange={handleSelected}
            size="small"
        >
            <CustomToggleButton selectedcolor="#686D76" value=''>Todos</CustomToggleButton>
            <CustomToggleButton selectedcolor="#686D76" value='Particular'>Particular</CustomToggleButton>
            <CustomToggleButton selectedcolor="#686D76" value='Seguro'>Seguro</CustomToggleButton>

        </ToggleButtonGroup>
    )
}

export default ClientFilterButtons