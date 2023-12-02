"use server";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const readUserSession = () => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  return supabase.auth.getSession();
};

export const getLoggedInUser = () => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  return supabase.auth.getUser();
};

export const getProducts = () => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  return supabase.from("product").select();
};
export const getWarranties = () => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  return supabase.from("warranty").select(`
    *,
    product(id, name, created_at)
    `);
};
