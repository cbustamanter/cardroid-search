import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  name: z.string().nullable(),
});

export type Product = z.infer<typeof productSchema>;
