import { Badge, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import ReceiptIcon from '@mui/icons-material/Receipt';
import usePaymentContext from "../hooks/usePaymentContext";
import useAuthContext from "../hooks/useAuth";

const ProfileCard = () => {

    const auth = useAuthContext()
    const payments = usePaymentContext()
    const statusList = [
        {
            status: 'No Factura',
            color: 'error.main'
        },
        {
            status: 'Facturado',
            color: 'warning.main'
        },
        {
            status: 'Cobrado',
            color: 'primary.main'
        },
        {
            status: 'Liquidado',
            color: 'success.main'
        }
    ]

    const handleBalance = (value) => {
        const filterBalance = payments.filter( data => data.code === auth.user.code && data.status === value).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)
        return filterBalance
    }

    const handleCountInvoice = (value) => {
        const filterCount = payments.filter(data => data.code === auth.user.code && data.status === value)
        return filterCount.length
    }

    return (
            <Card>
                <CardContent>
                    <Badge sx={{ ml: 2, mr: 3 }} badgeContent={payments.filter(data => data.code === auth.user.code).length} color="secondary"  >
                            <ReceiptIcon />
                    </Badge><span><b>TOTAL: </b> {payments.filter( data => data.code === auth.user.code).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)}</span>
                    <List>
                        {statusList.map( (data, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <Badge color={data.color} badgeContent={handleCountInvoice(data.status)} >
                                        <ReceiptIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary={`${data.status.toUpperCase()}: ${handleBalance(data.status)}`} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
    )
}

export default ProfileCard