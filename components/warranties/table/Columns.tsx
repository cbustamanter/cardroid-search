"use client";

import { Warranty } from "@/components/warranties/data/schema";
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Actions } from "@/components/warranties/table/Actions";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import z from "zod";
import { productSchema } from "../../products/data/schema";

export const columns: ColumnDef<Warranty>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "registration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="registration" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("registration")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="product" />
    ),
    cell: ({ row }) => {
      const product = productSchema.parse(row.getValue("product"));

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {product.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "expires_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="expires at" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {moment(row.getValue("expires_at")).format("DD-MM-YYYY")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="created at" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {moment(row.getValue("created_at")).format("DD-MM-YYYY")}
          </span>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <Actions row={row} />,
  },
];
