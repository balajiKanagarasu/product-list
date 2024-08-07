"use client";
import { Button } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";

/**
 * Column definition for the product table.
 */
export const columns = (handleClick: any): ColumnDef<any>[] => [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "description", header: "Description" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "discountPercentage", header: "Discount (%)" },
  { accessorKey: "rating", header: "Rating" },
  { accessorKey: "stock", header: "Stock" },
  { accessorKey: "tags", header: "Tags" },
  { accessorKey: "brand", header: "Brand" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <Button color="info" onClick={() => handleClick(row)}>
        View Reviews
      </Button>
    ),
  },
];
