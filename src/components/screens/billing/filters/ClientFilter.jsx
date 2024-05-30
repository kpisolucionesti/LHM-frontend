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
            sx={{ backgroudColor: "#A0DEFF" }}
        >
            <CustomToggleButton selectedcolor="#1d1c21" value=''>Todos</CustomToggleButton>
            <CustomToggleButton selectedcolor="#1d1c21" value='Particular'>Particular</CustomToggleButton>
            <CustomToggleButton selectedcolor="#1d1c21" value='Seguro'>Seguro</CustomToggleButton>

        </ToggleButtonGroup>
    )
}

export default ClientFilterButtons