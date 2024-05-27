import { Grid } from "@mui/material";
import MainTable from "./MainTable";
import ProfileCard from "./ProfileCard";
import MenuBar from "./commons/Menu";

const MainLayout = () => {
    
    return(
        <>
            <MenuBar />
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={12}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={12}>
                    <MainTable />
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout;