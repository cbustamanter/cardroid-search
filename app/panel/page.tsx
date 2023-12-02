"use client";
import { redirect } from "next/navigation";
import React from "react";

const Page: React.FC<{}> = ({}) => {
  return redirect("/panel/products");
};

export default Page;
