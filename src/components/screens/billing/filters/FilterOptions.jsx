import { useEffect, useState, useCallback } from "react"
import { Divider, Paper } from "@mui/material"
import StatusFilterButtons from "./StatusFilter"
import ClientFilterButtons from "./ClientFilter"
import usePaymentContext from "../../../../hooks/usePaymentContext"

const FilterOptionGroup = ({ setData, filterUserPayments }) => {

    const [client, setClient] = useState('')
    const [status, setStatus] = useState('')
    const payments = usePaymentContext()
    
    const handleFilter = useCallback((statusValue, clientValue) => {
        let filteredData = filterUserPayments(payments);
        
        if (statusValue !== '') {
            filteredData = filteredData.filter(data => data.status === statusValue);
        }
        if (clientValue === 'Particular') {
            filteredData = filteredData.filter(data => data.client === 'PARTICULARES');
        } else if (clientValue === 'Seguro') {
            filteredData = filteredData.filter(data => data.client !== 'PARTICULARES');
        }
        
        setData(filteredData);
    }, [payments, setData]);

    useEffect(() => {
        handleFilter(status, client)
    },[status, client])


    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginBottom: 2
            }}
        >
            <StatusFilterButtons setStatus={setStatus} />
            <Divider flexItem orientation="vertical" sx={{ mx: 1, my: 1, borderRightWidth: 5, borderColor: '#686D76'  }} />
            <ClientFilterButtons setClient={setClient} />
        </Paper>
    )
}

export default FilterOptionGroup