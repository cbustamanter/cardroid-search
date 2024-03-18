"use server";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const searchByRegistration = async (registration: string) => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const results = await supabase
    .from("warranty")
    .select(`*, product(id, name, created_at)`)
    .ilike("registration", registration);

  return results;
};
