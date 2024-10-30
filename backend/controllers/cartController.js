import { createCart } from '../lib/cartOperations.js';
import { cartSchema } from '../schema/cartSchema.js';

export const cartValidation = (req, res) => {
  try {
    const { cart } = req.body;

    const parseResult = cartSchema.safeParse(cart);

    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.errors });
    }

    const validatedData = createCart(parseResult.data);

    return res.status(200).json(validatedData);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error', details: error.message });
  }
};
