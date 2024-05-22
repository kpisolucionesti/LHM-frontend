import { useContext, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import DetailModal from './DetailModal';
import { Chip, createTheme, ThemeProvider } from '@mui/material';
import ActionFilter from './ActionFilter';
import UserContext from '../context/user-context';

const MainTable = ({ tableData }) => {

    const [data, setData] = useState(tableData)
    const { user } = useContext(UserContext) 

    const theme = createTheme({
        palette: {
          facturado: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
          },
        },
      });
    
    useEffect(() => {
        if(user !== ''){
            setData(tableData.filter(data => data.code === user.code))
        } else {
            setData(tableData)
        }
    },[user, tableData])

    const handleFilterStatus = (value) =>{
        if(value === '') {
            setData(tableData.filter(data => data.code === user.code))
        } else {
            setData(tableData.filter(data => data.code === user.code && data.status === value))
        }
    }

    const columns = useMemo(() => [
            {
                accessorFn: (row) => `${row.class} ${row.invoice}`,
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
                accessorKey: 'status',
                header: 'Estado',
                Cell: ({ cell }) => (
                <ThemeProvider theme={theme}>
                    <Chip
                        color={cell.getValue() === 'No Facturado' ? 'error' : cell.getValue() === 'Facturado' ? 'warning' : cell.getValue() === 'Liquidado' ? 'success' : 'primary'}
                        label={cell.getValue()}
                    />
                </ThemeProvider>
                )
            }
        ],[theme]
    )

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <DetailModal row={row} />
        ),
        initialState: { 
            density: 'compact', 
            showGlobalFilter: true,
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
        )
    })

    return(
        <>
           { data ? <MaterialReactTable table={table} /> : <p>NO HAY DATOS</p> }
        </>
    )
}

export default MainTable;