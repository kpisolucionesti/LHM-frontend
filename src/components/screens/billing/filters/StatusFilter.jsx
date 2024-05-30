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
            <CustomToggleButton selectedcolor="#1d1c21" value=''>Todos</CustomToggleButton>
            <CustomToggleButton selectedcolor="#d32f2f" value='No Facturado'>No Facturado</CustomToggleButton>
            <CustomToggleButton selectedcolor="#f57c00" value='Facturado'>Facturado</CustomToggleButton>
            <CustomToggleButton selectedcolor="#0288d1" value='Cobrado'>Cobrado</CustomToggleButton>
            <CustomToggleButton selectedcolor="#388e3c" value='Liquidado'>Liquidado</CustomToggleButton>
        </ToggleButtonGroup>
    )
}

export default StatusFilterButtons