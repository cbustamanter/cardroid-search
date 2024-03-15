"use client";
import React from "react";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/products/table/Columns";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/actions";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (!products?.data) {
    return <>Loading</>;
  }
  return (
    <DataTable data={products.data} columns={columns} filterColumnKey="name" />
  );
};
