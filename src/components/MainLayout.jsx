import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MainTable from "./MainTable";
import { tableData  } from "../data";
import ProfileCard from "./ProfileCard";
import MenuBar from "./commons/Menu";
import UserContext, { user } from "../context/user-context";

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
        <UserContext.Provider value={{ user }}>
            <MenuBar />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={9}>
                    <MainTable tableData={data} />
                </Grid>
            </Grid>
        </UserContext.Provider>
    )
}

export default MainLayout;