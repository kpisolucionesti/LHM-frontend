import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MainTable from "./MainTable";
import { tableData  } from "../data";
import ProfileCard from "./ProfileCard";

const MainLayout = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        let uniqueData = tableData.filter((obj, index) => {
            return index === tableData.findIndex(o => obj.account === o.account && obj.code === o.code)
        })
        setData(uniqueData)
    },[])
    
    console.log(data)

    return(
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={3}>
                <ProfileCard />
            </Grid>
            <Grid item xs={9}>
                <MainTable tableData={data} />
            </Grid>
        </Grid>
    )
}

export default MainLayout;