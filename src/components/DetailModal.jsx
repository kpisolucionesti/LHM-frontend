import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import DetailTable from "./DetailTable";
import usePaymentContext from "../hooks/usePaymentContext";

const DetailModal = ({ row }) => {

    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
    const payments = usePaymentContext()

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false)
    
    useEffect(() => {
        setData(payments.filter(data => data.account === row.account && data.code === row.code))
    },[row, payments])

    return(
        <>
            <Button variant="contained" color='info' onClick={handleOpen} size="small" >
                Detalles
            </Button>
            <Dialog open={show} onClose={handleClose} >
                <DialogTitle>
                    <p>PACIENTE: {row.patient}</p>
                    <p>CASO: {row.account} </p>
                    <p>BALANCE: {data.map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)} </p> 
                </DialogTitle>
                <DialogContent>
                    <DetailTable data={data} />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DetailModal