import { Hydrate } from "@/components/hydrate";
import { AddDialog } from "@/components/products/forms/addDialog";
import { Products } from "@/components/products/products";
import { getProducts } from "@/utils/actions";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

const Page: React.FC<{}> = async ({}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your products!
          </p>
        </div>
        <AddDialog />
      </div>
      <Hydrate state={dehydrate(queryClient)}>
        <Products />
      </Hydrate>
    </div>
  );
};

export default Page;
