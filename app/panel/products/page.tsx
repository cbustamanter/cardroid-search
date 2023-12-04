import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/products/table/Columns";
import { getProducts } from "@/utils/actions";
import React from "react";

const Page: React.FC<{}> = async ({}) => {
  const { data } = await getProducts();

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your products!
          </p>
        </div>
      </div>
      <DataTable data={data!} columns={columns} filterColumnKey="name" />
    </div>
  );
};

export default Page;
