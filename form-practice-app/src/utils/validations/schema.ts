import { EMAIL_REQUIRED_MESSAGE, EMAIL_MAX_MESSAGE } from '../constants/validation';
import { z } from "zod";

export const schema = z.object({
  email: z.string().trim().email().min(1, { message: EMAIL_REQUIRED_MESSAGE }).max(50, { message: EMAIL_MAX_MESSAGE }),
  password: z.string().trim().max(50),
  // email: z.string().min(1, { message: 'Required' }),
  // age: z.number().min(10),
});

export type Schema = z.infer<typeof schema>;