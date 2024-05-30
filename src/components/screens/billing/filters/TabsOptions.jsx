import { Divider, Paper } from "@mui/material"
import StatusFilterButtons from "./StatusFilter"
import ClientFilterButtons from "./ClientFilter"
import { useEffect, useState } from "react"

const FilterOptionGroup = ({ handleFilter }) => {

    const [client, setClient] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        handleFilter(status, client)
    },[status, client, handleFilter])

    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            <StatusFilterButtons setStatus={setStatus} />
            <Divider flexItem orientation="vertical" sx={{ mx: 1, my: 1 }} />
            <ClientFilterButtons setClient={setClient} />
        </Paper>
    )
}

export default FilterOptionGroup