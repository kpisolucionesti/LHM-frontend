import { useCallback, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Chip } from '@mui/material';
import moment from 'moment';
import useAuthContext from '../../../hooks/useAuth';
import usePaymentContext from '../../../hooks/usePaymentContext';
import BillingDetailModal from './detail/Modal';
import FilterOptionGroup from './filters/TabsOptions';

const BillingTable= () => {

    const [data, setData] = useState([])
    const auth = useAuthContext() 
    const payments = usePaymentContext()

    const filterUserPayments = (value) => {
        let userPayments = value.filter((obj, index) => {
            return index === value.findIndex(o => obj.account === o.account && obj.code === o.code)
        }).filter(data => data.code === auth.user.code).map(x => { return {...x, date: moment(x.date, 'DD/MM/YYYY').format('YYYY/MM/DD')}})
        return userPayments
    }

    useEffect(() => {
        setData(filterUserPayments(payments))
    },[payments])

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
    }, [payments]);

    const columns = useMemo(() => [
            {
                accessorKey: 'date',
                header: 'Fecha',
                size: 50,
                Cell: ({ cell }) => (
                    <span>{new Date(cell.getValue()) == 'Invalid Date' ? 'N/A' : cell.getValue()}</span>
                )
            },
            {
                accessorFn: (row) => `${row.classInvoice} ${row.invoice}`,
                header: 'Factura',
                Cell: ({ cell }) => (
                    <span>{cell.getValue() === '' ? 'N/A' : cell.getValue()}</span>
                ),
                size: 50
            },
            {
                accessorKey: 'account',
                header: 'Cuenta',
                size: 50
            },
            {
                accessorKey: 'patient',
                header: 'Paciente',
                minSize: 100
            },
            {
                accessorKey: 'client',
                header: 'Cliente',
                minSize: 100
            },
            {
                accessorKey: 'status',
                header: 'Estado',
                Cell: ({ cell }) => (
                    <Chip
                        color={cell.getValue() === 'No Facturado' ? 'error' : cell.getValue() === 'Facturado' ? 'warning' : cell.getValue() === 'Liquidado' ? 'success' : 'primary'}
                        label={cell.getValue()}
                    />
                )
            },
        ],[]
    )

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <BillingDetailModal row={row.original} />
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
            <FilterOptionGroup handleFilter={handleFilter} />
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

export default BillingTable;