import { useMemo } from 'react';
import { tableData } from '../data';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

export const MainTable = () => {
    const data = tableData;

    const columns = useMemo(() => [
            {
                accessorKey: 'Fecha',
                header: 'Fecha',
            },
            {
                accessorKey: 'Cuenta',
                header: 'Cuenta',
            },
            {
                accessorKey: 'Paciente',
                header: 'Paciente',
            }

        ],[]
    )

    const table = useMaterialReactTable({
        columns,
        data,
    })

    return(
        <MaterialReactTable table={table} />
    )
}