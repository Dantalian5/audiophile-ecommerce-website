import { createCart } from '../lib/cartOperations.js';
import products from '../models/products.js';

jest.mock('../models/products.js');

describe('createCart', () => {
  beforeEach(() => {
    products.find = jest.fn();
  });

  it('should create a cart with correct subtotal, total, shipping, and VAT', () => {
    const items = [
      { code: 'P001', quantity: 2 },
      { code: 'P002', quantity: 1 },
    ];

    products.find.mockImplementation((callback) => {
      const productList = [
        { code: 'P001', price: 100 },
        { code: 'P002', price: 200 },
      ];
      return productList.find(callback);
    });

    const result = createCart(items);

    expect(result).toEqual({
      subtotal: 400,
      total: 450,
      shipping: 50,
      vat: 80,
      products: [
        { code: 'P001', price: 100, quantity: 2, totalPrice: 200 },
        { code: 'P002', price: 200, quantity: 1, totalPrice: 200 },
      ],
    });
  });

  it('should handle empty items array', () => {
    const items = [];

    const result = createCart(items);

    expect(result).toEqual({
      subtotal: 0,
      total: 50,
      shipping: 50,
      vat: 0,
      products: [],
    });
  });

  it('should ignore items with invalid product codes', () => {
    const items = [
      { code: 'INVALID', quantity: 2 },
      { code: 'P002', quantity: 1 },
    ];

    products.find.mockImplementation((callback) => {
      const productList = [{ code: 'P002', price: 200 }];
      return productList.find(callback);
    });

    const result = createCart(items);

    expect(result).toEqual({
      subtotal: 200,
      total: 250,
      shipping: 50,
      vat: 40,
      products: [{ code: 'P002', price: 200, quantity: 1, totalPrice: 200 }],
    });
  });
});
