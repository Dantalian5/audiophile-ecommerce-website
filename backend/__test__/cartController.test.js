import request from 'supertest';
import app from '../app.js';
import { createCart } from '../lib/cartOperations';

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done);
});

jest.mock('../lib/cartOperations');

describe('Test cartController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return a valid cart with correct calculations', async () => {
    createCart.mockImplementation(
      jest.requireActual('../lib/cartOperations').createCart
    );
    const response = await request(app)
      .post('/api/cart')
      .send({
        cart: [
          { code: 'xx99-mark-two-headphones', quantity: 2 },
          { code: 'zx9-speaker', quantity: 1 },
        ],
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('subtotal');
    expect(response.body).toHaveProperty('total');
    expect(response.body).toHaveProperty('vat');
    expect(response.body).toHaveProperty('shipping');
    expect(response.body).toHaveProperty('products');
    expect(response.body.products).toHaveLength(2);
  });

  it('should return a 400 error if the cart is empty', async () => {
    const emptyCart = [];

    const response = await request(app)
      .post('/api/cart')
      .send({ cart: emptyCart });

    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBe('Cart cannot be empty');
  });
  it('should return a 400 error if an item in the cart is invalid', async () => {
    const invalidCartItem = [{ code: 'xx99-mark-two', quantity: -1 }];

    const response = await request(app)
      .post('/api/cart')
      .send({ cart: invalidCartItem });

    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBe(
      'Number must be greater than 0'
    );
    expect(response.body.errors[0].path).toEqual([0, 'quantity']);
  });
  it('should return a 500 error if an unexpected server error occurs', async () => {
    const validCart = [{ code: 'xx99-mark-two-headphones', quantity: 2 }];

    createCart.mockImplementation(() => {
      throw new Error('Simulated server error');
    });

    const response = await request(app)
      .post('/api/cart')
      .send({ cart: validCart });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
    expect(response.body.details).toBe('Simulated server error');
  });
});
