import { styled, ToggleButton } from "@mui/material"

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
      fontSize: 16,
      fontWeight: 'bold',
      color: "#1d1c21",
      borderColor: "#1d1c21"
}))

export default CustomToggleButton