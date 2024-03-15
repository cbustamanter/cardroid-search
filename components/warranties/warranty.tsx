"use client";
import React from "react";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/warranties/table/Columns";
import { useQuery } from "@tanstack/react-query";
import { getWarranties } from "@/utils/actions";
import { warrantySchema } from "@/components/warranties/data/schema";
import z from "zod";

interface WarrantyProps {}

export const Warranty: React.FC<WarrantyProps> = ({}) => {
  const { data: warranties } = useQuery({
    queryKey: ["warranties"],
    queryFn: () => getWarranties(),
  });

  if (!warranties?.data) {
    return <>Loading</>;
  }
  const parsedData = z.array(warrantySchema).parse(warranties.data);

  return (
    <DataTable
      data={parsedData}
      columns={columns}
      filterColumnKey="registration"
    />
  );
};
