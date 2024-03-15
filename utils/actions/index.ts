"use server";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Warranty } from "../../components/warranties/data/schema";
import { Product } from "../../components/products/data/schema";

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

export const getProducts = async () => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  return await supabase.from("product").select();
};

export const getWarranties = async () => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const warranties = await supabase.from("warranty").select(`
    *,
    product(id, name, created_at)
    `);

  return warranties;
};

export const createProduct = async ({ name }: Pick<Product, "name">) => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { error } = await supabase.from("product").insert({ name });
  if (error) throw new Error(error.message);
};

export const deleteProduct = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { error } = await supabase.from("product").delete().eq("id", id);
  if (error) throw new Error(error.message);
};

export const createWarranty = async ({
  product_id,
  registration,
  expires_at,
}: Pick<Warranty, "product_id" | "registration" | "expires_at">) => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { error } = await supabase
    .from("warranty")
    .insert({ expires_at, product_id, registration });
  if (error) throw new Error(error.message);
};

export const deleteWarranty = async (id: Warranty["id"]) => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { error } = await supabase.from("warranty").delete().eq("id", id);
  if (error) throw new Error(error.message);
};

export const searchByRegistration = async (registration: string) => {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const results = await supabase
    .from("warranty")
    .select(`*, product(id, name, created_at)`)
    .eq("registration", registration);

  return results;
};
