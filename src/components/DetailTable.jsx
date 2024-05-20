import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import { useMemo } from "react"

const DetailTable = ({ data }) => {
    const columns = useMemo(() => [
            {
                accessorKey: 'concept',
                header: 'Concepto',
                grow: true,
                minWidth: 100,
                size: 300
            },
            {
                accessorKey: 'price',
                header: 'Monto',
                grow: false,
                minWidth: 20,
                size: 50
            }
        ],[]
    )

    const table = useMaterialReactTable({
        columns,
        data,
        enableDensityToggle: false,
        enableHiding: false,
        enableFullScreenToggle: false,
        enableGlobalFilter: false,
        enableFilters: false,
        enableTopToolbar: false,
    })

    return (
        <MaterialReactTable table={table} />
    )
}

export default DetailTable