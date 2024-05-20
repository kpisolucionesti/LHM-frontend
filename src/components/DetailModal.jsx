import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import DetailTable from "./DetailTable";
import { tableData } from "../data";

const DetailModal = ({ row }) => {

    const [data, setData] = useState([])
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false)
    
    useEffect(() => {
        setData(tableData.filter(data => data.account === row.original.account && data.code === row.original.code))
    },[row])

    const balance = data.map( data => ({ price: data.price }) ).reduce(( sum, { price } ) => sum + parseInt(price), 0)

    return(
        <>
            <Button variant="contained" color='info' onClick={handleOpen}>
                Detalles
            </Button>
            <Dialog open={show} onClose={handleClose} >
                <DialogTitle>
                    <p>PACIENTE: {row.original.patient}</p>
                    <p>CASO: {row.original.account} </p>
                    <p>BALANCE: {balance} </p> 
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