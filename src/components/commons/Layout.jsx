import { Grid } from "@mui/material"
import MenuBar from "./Menu"
import BillingPage from "../screens/billing/Page"

const Layout = () => {

    return (
        <Grid>
            <MenuBar />
            <Grid sx={{ marginTop: 4 }}>
                <BillingPage />
            </Grid>
        </Grid>
    )
}

export default Layout