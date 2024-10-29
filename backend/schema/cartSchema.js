import { z } from 'zod';

export const cartSchema = z
  .array(
    z.object({
      code: z.string(),
      quantity: z.number().positive(),
    })
  )
  .nonempty('Cart cannot be empty');
