import { z } from "zod";

export const requestFormSchema = z.object({
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Type is required"),
  services: z.array(z.string()).min(1, "At least one service must be selected"),
  address: z.string().min(5, "Address is required"),
  details: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  frequency: z.enum(["once", "weekly", "biweekly", "monthly"]),
  gender: z.enum(["male", "female", "other"]),
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  promo: z.string().optional(),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
