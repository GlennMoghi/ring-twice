import { z } from "zod";

export const requestFormSchema = z.object({
  category: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.any(),
    types: z.array(
      z.object({
        name: z.string(),
        services: z
          .array(z.string())
          .min(1, "Please select at least one service"),
      })
    ),
  }),
  type: z.object({
    name: z.string(),
    services: z.array(z.string()).min(1, "Please select at least one service"),
  }),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  address: z.string().min(5, "Address is required"),
  details: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  frequency: z.enum(["once", "weekly", "biweekly", "monthly"]),
  gender: z.enum(["male", "female", "other"]),
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  promo: z.string().optional(),
});

export type FormData = z.infer<typeof requestFormSchema>;
