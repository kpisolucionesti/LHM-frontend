import { Box, Grid, Typography } from "@mui/material"
import DashboardInfo from "./Info"
import MainTable from "../../MainTable"

const DashboardPage = () => {

    return(
        <Box sx={{ width: '100%' }} >
            <Typography variant="h4">Dashboard</Typography>
            <Grid sx={{ marginY: 1}} >
                <DashboardInfo />
            </Grid>
            <Grid sx={{ marginTop: 2 }}>
                <MainTable />
            </Grid>
        </Box>
    )
}

export default DashboardPage