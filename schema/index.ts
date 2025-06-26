import { z } from "zod";
// Schema for validation (optional, if using zod)
export const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters" })
    .max(30, { message: "Title must be at most 30 characters" }),
  body: z
    .string()
    .max(80, { message: "Body must be at most 80 characters" })
    .optional(),
  completed: z.boolean().optional(),
});
export type todoSchemaType = z.infer<typeof formSchema>;
export interface tableSchemaType {
  id?: string;
  title: string;
  body: string | null;
  completed: boolean;
  created_at?: Date;
}
