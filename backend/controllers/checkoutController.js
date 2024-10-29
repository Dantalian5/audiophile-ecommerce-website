import products from '../models/products.js';

export const processCheckout = (req, res) => {
  const { cart } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).json({
      error: 'Empty Cart',
    });
  }

  const selectedProducts = cart
    .map((item) => {
      const product = products.find((p) => p.code === item.code);
      if (product) {
        return {
          ...product,
          quantity: item.quantity,
          totalPrice: product.price * item.quantity,
        };
      }
      return null;
    })
    .filter((product) => product !== null);

  const subtotal = selectedProducts.reduce(
    (sum, product) => sum + product.totalPrice,
    0
  );
  const VAT_RATE = 0.2;
  const vat = Math.round(subtotal * VAT_RATE * 10) / 10;
  const shipping = 50;

  const data = {
    message: 'Checkout successful',
    subtotal,
    total: subtotal + shipping,
    shipping,
    vat,
    products: selectedProducts,
  };

  res.json(data);
};
