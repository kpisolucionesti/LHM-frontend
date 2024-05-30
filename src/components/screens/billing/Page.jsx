import { Box, Grid, Typography } from "@mui/material"
import BillingInfo from "./Info"
import BillingTable from "./Table"

const BillingPage = () => {

    return(
        <Box sx={{ width: '100%' }} >
            <Typography variant="h4">Dashboard</Typography>
            <Grid xs={12} sx={{ marginY: 1}} >
                <BillingInfo />
            </Grid>
            <Grid sx={{ marginTop: 2 }}>
                <BillingTable />
            </Grid>
        </Box>
    )
}

export default BillingPage