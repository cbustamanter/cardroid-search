import { z } from "zod";
import { productSchema } from "../../products/data/schema";

export const warrantySchema = z.object({
  id: z.string(),
  created_at: z.string(),
  expires_at: z.string(),
  product_id: z.string(),
  registration: z.string(),
  product: productSchema,
});

export type Warranty = z.infer<typeof warrantySchema>;
