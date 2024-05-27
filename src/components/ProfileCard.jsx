import { Badge, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import ReceiptIcon from '@mui/icons-material/Receipt';
import useUserContext from "../hooks/useUserContext";
import usePaymentContext from "../hooks/usePaymentContext";

const ProfileCard = () => {

    const user = useUserContext()
    const payments = usePaymentContext()

    const handleBalance = (filter) => {
        const filterBalance = payments.filter( data => data.code === user.code && data.status === filter ).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)
        return filterBalance
    }

    const handleCountInvoice = (filter) => {
        const filterCount = payments.filter(data => data.code === user.code && data.status === filter)
        return filterCount.length
    }

    const totalInvoice = payments.filter(data => data.code === user.code)

    return (
            <Card>
                <CardContent>
                    <Badge sx={{ ml: 2, mr: 3 }} badgeContent={totalInvoice.length} color="primary"  >
                            <ReceiptIcon />
                    </Badge><span><b>TOTAL: </b> {payments.filter( data => data.code === user.code).map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)}</span>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Badge color="error" badgeContent={handleCountInvoice('No Factura')} >
                                    <ReceiptIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={`NO FACTURADO: ${handleBalance("No Factura")}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Badge color="warning" badgeContent={handleCountInvoice('Facturado')} >
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
    )
}

export default ProfileCard