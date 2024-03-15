import { Hydrate } from "@/components/hydrate";
import { AddDialog } from "@/components/warranties/forms/addDialog";
import { Warranty } from "@/components/warranties/warranty";
import { getProducts, getWarranties } from "@/utils/actions";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

const Page: React.FC<{}> = async ({}) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: () => getProducts(),
    }),
    await queryClient.prefetchQuery({
      queryKey: ["warranties"],
      queryFn: () => getWarranties(),
    }),
  ]);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <Hydrate state={dehydrate(queryClient)}>
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Warranties</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your warranties
            </p>
          </div>
          <AddDialog />
        </div>

        <Warranty />
      </Hydrate>
    </div>
  );
};

export default Page;
