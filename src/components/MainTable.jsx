import { useCallback, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Chip } from '@mui/material';
import moment from 'moment';
import DetailModal from './DetailModal';
import ActionFilter from './ActionFilter';
import usePaymentContext from '../hooks/usePaymentContext';
import useUserContext from '../hooks/useUserContext';

const MainTable = () => {

    const [data, setData] = useState([])
    const user = useUserContext() 
    const payments = usePaymentContext()

    const fixedDate = (value) => {
        const fixDate = value.map(data => { return { ...data, date: moment(data.date, 'MM/DD/YYYY').format("YYYY/MM/DD") }})
        return fixDate
    }

    useEffect(() => {
        setData(fixedDate(payments))
    },[payments, user])

    const handleFilterStatus = useCallback((value) =>{
        if(value === '') {
            setData(fixedDate(payments))
        } else {
            let fixedData = fixedDate(payments)
            setData(fixedData.filter(data => data.status === value))
        }
    },[payments])

    const columns = useMemo(() => [
            {
                accessorKey: 'date',
                header: 'Fecha',
            },
            {
                accessorFn: (row) => `${row.classInvoice} ${row.invoice}`,
                header: 'Factura',
                Cell: ({ cell }) => (
                    <span>{cell.row.original.invoice === '' ? 'N/A' : cell.getValue()}</span>
                )
            },
            {
                accessorKey: 'account',
                header: 'Cuenta',
            },
            {
                accessorKey: 'patient',
                header: 'Paciente',
            },
            {
                accessorKey: 'client',
                header: 'Cliente',
            },
            {
                accessorKey: 'status',
                header: 'Estado',
                Cell: ({ cell }) => (
                    <Chip
                        color={cell.getValue() === 'No Factura' ? 'error' : cell.getValue() === 'Facturado' ? 'warning' : cell.getValue() === 'Liquidado' ? 'success' : 'primary'}
                        label={cell.getValue()}
                    />
                )
            }
        ],[]
    )

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <DetailModal row={row.original} />
        ),
        initialState: { 
            density: 'compact', 
            showGlobalFilter: true,
            sorting: [{
                id: 'date',
                desc: true
            }]
        },
        enableDensityToggle: false,
        enableHiding: false,
        enableFullScreenToggle: false,
        enableStickyHeader: true,
        positionGlobalFilter: 'right',
        muiSearchTextFieldProps: {
            placeholder: `Buscar en ${data.length} filas`,
            variant: 'outlined',
        },
        renderTopToolbarCustomActions: ({ table }) => (
            <ActionFilter handleFilterStatus={handleFilterStatus} />
        ),
        muiPaginationProps: {
            showRowsPerPage: false,
            shape: 'rounded',
        },
        paginationDisplayMode: 'pages',
    })

    return(
        <>
           { data ? <MaterialReactTable table={table} /> : <p>NO HAY DATOS</p> }
        </>
    )
}

export default MainTable;