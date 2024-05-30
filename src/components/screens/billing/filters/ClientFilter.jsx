import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"

const CustomToggleButton = styled(ToggleButton)(({ selectedcolor }) => ({
    "&.Mui-selected": {
        color: "#fff",
        backgroundColor: selectedcolor,
         "&:hover": {
          color: "#fff",
          backgroundColor: selectedcolor,
         },
       },
       "&:hover": {
        color: "#fff",
        backgroundColor: "#474f52",
      },
}))

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
            color='primary'
            value={selected}
            exclusive
            onChange={handleSelected}
            size="small"
        >
            <CustomToggleButton selectedcolor="#1d1c21" value=''>Todos</CustomToggleButton>
            <CustomToggleButton selectedcolor="#2C4E80" value='Particular'>Particular</CustomToggleButton>
            <CustomToggleButton selectedcolor="#FFC55A" value='Seguro'>Seguro</CustomToggleButton>

        </ToggleButtonGroup>
    )
}

export default ClientFilterButtons