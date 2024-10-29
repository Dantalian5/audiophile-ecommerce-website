import { createCart } from '../lib/cartOperations.js';
import { cartSchema } from '../schema/cartSchema.js';

export const cartValidation = (req, res) => {
  const { cart } = req.body;

  const { success, data } = cartSchema.safeParse(cart);

  if (!success || !data || data.length === 0) {
    return res.status(400).json({
      error: 'Empty Cart',
    });
  }

  const result = createCart(data);

  res.json(result);
};
