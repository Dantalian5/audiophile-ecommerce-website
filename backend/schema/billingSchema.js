import z from 'zod';
import { cartSchema } from './cartSchema.js';
export const checkoutSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Wrong Format').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone number is required'),
    address: z.string().min(1, 'Address is required'),
    zip: z.string().min(5, 'Zip code is required'),
    city: z.string().min(1, 'City is required'),
    country: z.string().min(1, 'Country is required'),
    paymentMethod: z.enum(['emoney', 'cash']),
    emoneyNumber: z.string().optional(),
    emoneyPin: z.string().optional(),
    cart: cartSchema,
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === 'emoney') {
      if (!data.emoneyNumber) {
        ctx.addIssue({
          path: ['emoneyNumber'],
          message: 'eMoney number required',
        });
      }
      if (!data.emoneyPin) {
        ctx.addIssue({
          path: ['emoneyPin'],
          message: 'eMoney PIN required',
        });
      }
    }
  });
