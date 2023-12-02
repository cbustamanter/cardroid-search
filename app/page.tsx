import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import React from "react";

const Page: React.FC<{}> = async ({}) => {
  const { data } = await readUserSession();

  if (!data.session) {
    redirect("/login");
  } else {
    redirect("/panel");
  }
};

export default Page;
