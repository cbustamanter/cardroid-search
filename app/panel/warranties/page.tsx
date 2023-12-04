import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/warranties/table/Columns";
import { getWarranties } from "@/utils/actions";
import React from "react";
import z from "zod";
import { warrantySchema } from "@/components/warranties/data/schema";

const Page: React.FC<{}> = async ({}) => {
  const { data } = await getWarranties();
  const parsedData = z.array(warrantySchema).parse(data);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Warranties</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your warranties
          </p>
        </div>
      </div>
      <DataTable
        data={parsedData}
        columns={columns}
        filterColumnKey="registration"
      />
    </div>
  );
};

export default Page;
