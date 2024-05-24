import { Grid } from "@mui/material";
import MainTable from "./MainTable";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";

const MainLayout = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        if(data.length === 0){
            BackendApi.users.getAll().then((res) => setData(res))
        }
    },[data])

    console.log(data)
    

    return(
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={3}>
                <ProfileCard />
            </Grid>
            <Grid item xs={9}>
                <MainTable />
            </Grid>
        </Grid>
    )
}

export default MainLayout;