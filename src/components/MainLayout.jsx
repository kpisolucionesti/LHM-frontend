import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MainTable from "./MainTable";
import { tableData  } from "../data";
import ProfileCard from "./ProfileCard";

const MainLayout = () => {
    const [doctor, setDoctor] =  useState('357')
    const [data, setData] = useState([])

    
    useEffect(() => {
        let uniqueData = tableData.filter((obj, index) => {
            return index === tableData.findIndex(o => obj.account === o.account && obj.code === o.code)
        })
        setData(uniqueData)
    },[doctor])
    

    return(
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <ProfileCard doctor={doctor} />
            </Grid>
            <Grid item xs={9}>
                <MainTable doctor={doctor} tableData={data} />
            </Grid>
        </Grid>
    )
}

export default MainLayout;