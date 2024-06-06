import { Box, Grid, Typography } from "@mui/material"
import BillingInfo from "./Info"
import BillingTable from "./Table"

const BillingPage = () => {

    return(
        <Grid sx={{ width: '100%' }} >
            <Typography variant="h4">Dashboard</Typography>
            <Grid item xs={12} md={12} lg={12} sx={{ marginY: 1}} >
                <BillingInfo />
            </Grid>
            <Grid item sx={{ marginTop: 2 }}>
                <BillingTable />
            </Grid>
        </Grid>
    )
}

export default BillingPage