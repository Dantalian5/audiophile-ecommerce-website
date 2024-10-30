import { createCart } from '../lib/cartOperations.js';
import { checkoutSchema } from '../schema/billingSchema.js';

export const processCheckout = (req, res) => {
  try {
    const parseResult = checkoutSchema.safeParse(req.body);

    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.errors });
    }

    const validatedData = {
      ...parseResult.data,
      cart: createCart(parseResult.data.cart),
    };

    return res.status(200).json(validatedData);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error', details: error.message });
  }
};
