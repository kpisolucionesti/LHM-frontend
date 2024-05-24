import { useContext } from "react"
import { Badge, Card, CardContent, createTheme, List, ListItem, ListItemIcon, ListItemText, ThemeProvider } from "@mui/material"
import { tableData } from "../data"
import ReceiptIcon from '@mui/icons-material/Receipt';
import UserContext from "../context/user-context";

const ProfileCard = () => {

    const { user } = useContext(UserContext)

    const theme = createTheme({
        palette: {
          facturado: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
          },
        },
      });

    const handleBalance = (filter) => {
        const filterBalance = tableData.filter( data => data.code === user.code && data.status === filter ).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)
        return filterBalance
    }

    const handleCountInvoice = (filter) => {
        const filterCount = tableData.filter(data => data.code === user.code && data.status === filter)
        return filterCount.length
    }

    const totalInvoice = tableData.filter(data => data.code === user.code)

    return (
        <ThemeProvider theme={theme}>
            <Card>
                <CardContent>
                    <Badge sx={{ ml: 2, mr: 3 }} badgeContent={totalInvoice.length} color="primary"  >
                            <ReceiptIcon />
                    </Badge><span><b>TOTAL: </b> {tableData.filter( data => data.code === user.code).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)}</span>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Badge color="error" badgeContent={handleCountInvoice('No Facturado')} >
                                    <ReceiptIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={`NO FACTURADO: ${handleBalance("No Facturado")}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Badge color="facturado" badgeContent={handleCountInvoice('Facturado')} >
                                    <ReceiptIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={`FACTURADO: ${handleBalance("Facturado")}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Badge color="primary" badgeContent={handleCountInvoice('Cobrado')} >
                                    <ReceiptIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={`COBRADO: ${handleBalance("Cobrado")}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Badge color="success" badgeContent={handleCountInvoice('Liquidado')} >
                                    <ReceiptIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={`LIQUIDADO: ${handleBalance("Liquidado")}`} />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default ProfileCard