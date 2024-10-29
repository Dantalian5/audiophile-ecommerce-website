import { z } from 'zod';
import products from '../models/products.js';

// Esquema de validación del formulario y carrito
const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Email must be valid').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  zip: z.string().min(5, 'Zip code is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  paymentMethod: z.enum(['emoney', 'cash']),
  emoneyNumber: z.string().optional(),
  emoneyPin: z.string().optional(),
  cart: z
    .array(
      z.object({
        code: z.string(),
        quantity: z.number().positive(),
      })
    )
    .nonempty('El carrito no puede estar vacío'),
});

export const processCheckout = (req, res) => {
  try {
    // Validación del formulario y carrito
    const validatedData = checkoutSchema.parse(req.body);
    const { cart } = validatedData;

    // Validación de productos en el carrito
    const selectedProducts = cart.map((item) => {
      const product = products.find((p) => p.code === item.code);
      if (!product) {
        throw new Error(`Producto no encontrado: ${item.code}`);
      }
      return {
        ...product,
        quantity: item.quantity,
        totalPrice: product.price * item.quantity,
      };
    });

    const subtotal = selectedProducts.reduce(
      (sum, item) => sum + item.totalPrice,
      0
    );
    const VAT_RATE = 0.2;
    const vat = Math.round(subtotal * VAT_RATE * 10) / 10;
    const shippingCost = 50;
    const total = subtotal + vat + shippingCost;

    res.json({
      message: 'Checkout exitoso',
      data: validatedData,
      products: selectedProducts,
      summary: { subtotal, vat, shippingCost, total },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res
      .status(500)
      .json({ error: 'Error interno del servidor', details: error.message });
  }
};
