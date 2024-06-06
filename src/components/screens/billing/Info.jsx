import { Badge, Box, Grid, Paper, ThemeProvider, Typography, createTheme } from "@mui/material"
import ReceiptIcon from '@mui/icons-material/Receipt';
import usePaymentContext from "../../../hooks/usePaymentContext"
import useAuthContext from "../../../hooks/useAuth"

const theme = createTheme({
    palette: {
        secondary: {
            main: '#212121',
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        }
    }
})

const BillingInfo =  () => {

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
            <Grid container sx={{ flexGrow: 1 }} spacing={{ xs: 2, md: 8 }} columns={{ mobile: 1, tablet: 8, laptop: 12, desktop: 12 }} >
                { status.map((status, index) => (
                <Grid item key={index} mobile={2} tablet={4} laptop={3} >
                    <Paper noWrap elevation={5} sx={{ padding: 2, marginX: 2, backgroundColor: status.color, color: 'white' }}>
                        <Typography noWrap variant="h6" sx={{ justifyContent: 'space-between', display: 'flex',}} >
                            {status.name}
                            <Badge sx={{ marginX: 2, marginTop: 1.5 }} badgeContent={handleCountInvoice(status.name)} color="secondary">
                                <ReceiptIcon />
                            </Badge>
                        </Typography>
                        <Box sx={{ marginTop: 2, fontSize: 30, fontWeight: 'medium' }}>
                            <Typography variant="h4" >Bs. {handleBalance(status.name)}</Typography>
                            <Typography variant="h6" >Total</Typography>
                        </Box>
                    </Paper>
                </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    )
}

export default BillingInfo