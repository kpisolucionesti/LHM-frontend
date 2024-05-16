import { Grid } from "@mui/material";
import { MainTable } from "./components/MainTable";
import { ProfileCard } from "./components/ProfleCard";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <ProfileCard />
      </Grid>
      <Grid item xs={10}>
        <MainTable />
      </Grid>
    </Grid>
  );
}

export default App;
