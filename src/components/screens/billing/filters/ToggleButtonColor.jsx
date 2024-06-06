import { styled, ToggleButton } from "@mui/material"

const CustomToggleButton = styled(ToggleButton)(({ selectedcolor }) => ({
    "&.Mui-selected": {
        color: "#fff",
        backgroundColor: selectedcolor,
        borderColor: selectedcolor,
         "&:hover": {
          color: "#fff",
          backgroundColor: selectedcolor,
         },
       },
       "&:hover": {
        color: "#fff",
        backgroundColor: "#B4B4B8",
      },
      fontSize: 16,
      fontWeight: 'bold',
      color: "#B4B4B8",
      borderColor: "#B4B4B8"
}))

export default CustomToggleButton