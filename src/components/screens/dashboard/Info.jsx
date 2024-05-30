import { Badge, Box, Paper, ThemeProvider, Typography, createTheme } from "@mui/material"
import ReceiptIcon from '@mui/icons-material/Receipt';
import usePaymentContext from "../../../hooks/usePaymentContext"
import useAuthContext from "../../../hooks/useAuth"

const theme = createTheme({
    palette: {
        secondary: {
            main: '#212121',
        }
    }
})

const DashboardInfo =  () => {

    const payments = usePaymentContext()
    const auth = useAuthContext()
    const status = [
        {
            name: "No Facturado",
            color: "error.dark"
        },
        {
            name: "Facturado",
            color: "warning.dark"
        },
        {
            name: "Cobrado",
            color: "primary.dark"
        },
        {
            name: "Liquidado",
            color: "success.dark"
        }
    ]

    const handleBalance = (value) => {
        const filterBalance = payments.filter( data => data.code === auth.user.code && data.status === value).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseFloat(price), 0)
        return filterBalance.toFixed(2)
    }

    const handleCountInvoice = (value) => {
        const filterCount = payments.filter(data => data.code === auth.user.code && data.status === value)
        return filterCount.length
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
                { status.map((status, index) => (
                <Paper key={index} elevation={5} sx={{ width: 1/5, padding: 2, marginX: 3, backgroundColor: status.color, color: 'white' }}>
                    <Typography variant="h6" sx={{ justifyContent: 'space-between', display: 'flex'}} >
                        {status.name}
                        <Badge sx={{ marginX: 1 }} badgeContent={handleCountInvoice(status.name)} color="secondary">
                            <ReceiptIcon />
                        </Badge>
                    </Typography>
                    <Box sx={{ marginTop: 2, fontSize: 30, fontWeight: 'medium' }}>
                        <Typography variant="h4" >Bs. {handleBalance(status.name)}</Typography>
                        <Typography variant="h6" >Total</Typography>
                    </Box>
                </Paper>
                ))}
            </Box>
        </ThemeProvider>
    )
}

export default DashboardInfo