"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableContainer,
  Thead,
  Tbody,
  Td,
  Th,
  TRow,
  THRow,
} from "./Table";
import { Tooltip } from "@mui/material";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  headerText: string;
}

export const DataTable = <TData, TValue>({
  headerText,
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  /**
   * Table methods to return header and row data.
   */
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="grid bg-white rounded-md overflow-auto">
      <p className="text-xl font-bold border-b px-4 py-3">{headerText}</p>
      <div className="p-4 overflow-auto">
        <TableContainer>
          <Table>
            <Thead>
              {getHeaderGroups().map((headerGroup) => (
                <THRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th key={header.id}>
                        {!header.isPlaceholder &&
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </Th>
                    );
                  })}
                </THRow>
              ))}
            </Thead>
            <Tbody>
              {getRowModel().rows?.length ? (
                getRowModel().rows.map((row) => (
                  <TRow key={row.id} data-state={row.getIsSelected()}>
                    {row.getVisibleCells().map((cell) => (
                      <Td key={cell.id}>
                        <Tooltip
                          title={
                            !cell.id?.includes("actions") &&
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          }
                          sx={{
                            "& .MuiTooltip-tooltip": {
                              backgroundColor: "#eef2f6",
                              color: "white",
                              fontSize: "0.75rem",
                              borderRadius: "4px",
                            },
                          }}
                        >
                          <p className="text-ellipsis no-underline overflow-hidden max-w-[20ch] whitespace-nowrap">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </p>
                        </Tooltip>
                      </Td>
                    ))}
                  </TRow>
                ))
              ) : (
                <TRow>
                  <Td colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </Td>
                </TRow>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
