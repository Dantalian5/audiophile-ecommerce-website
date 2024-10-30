import request from 'supertest';
import app from '../app.js';
import { createCart } from '../lib/cartOperations.js';

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done);
});

jest.mock('../lib/cartOperations');

describe('Test processCheckout', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should process checkout with valid billing data and cart', async () => {
    createCart.mockImplementation(
      jest.requireActual('../lib/cartOperations').createCart
    );

    const response = await request(app)
      .post('/api/checkout')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Test St',
        zip: '12345',
        city: 'Testville',
        country: 'Testland',
        paymentMethod: 'emoney',
        emoneyNumber: '12345678',
        emoneyPin: '1234',
        cart: [
          { code: 'xx99-mark-two', quantity: 2 },
          { code: 'zx9', quantity: 1 },
        ],
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name', 'John Doe');
    expect(response.body).toHaveProperty('email', 'john.doe@example.com');
    expect(response.body.cart).toHaveProperty('subtotal');
    expect(response.body.cart).toHaveProperty('total');
    expect(response.body.cart.products).toHaveLength(2);
  });

  it('should return a 400 error for invalid billing data', async () => {
    const response = await request(app)
      .post('/api/checkout')
      .send({
        name: '',
        email: 'invalid-email', // Email inválido
        phone: '1234567890',
        address: '123 Test St',
        zip: '12345',
        city: 'Testville',
        country: 'Testland',
        paymentMethod: 'emoney',
        emoneyNumber: '12345678',
        emoneyPin: '1234',
        cart: [
          { code: 'xx99-mark-two', quantity: 2 },
          { code: 'zx9', quantity: 1 },
        ],
      });

    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBe('Name is required');
    expect(response.body.errors[1].message).toBe('Email must be valid');
  });

  it('should return a 500 error if an unexpected server error occurs', async () => {
    const validCheckoutData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Test St',
      zip: '12345',
      city: 'Testville',
      country: 'Testland',
      paymentMethod: 'emoney',
      emoneyNumber: '12345678',
      emoneyPin: '1234',
      cart: [
        { code: 'xx99-mark-two', quantity: 2 },
        { code: 'zx9', quantity: 1 },
      ],
    };

    createCart.mockImplementation(() => {
      throw new Error('Simulated server error');
    });

    const response = await request(app)
      .post('/api/checkout')
      .send(validCheckoutData);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
    expect(response.body.details).toBe('Simulated server error');
  });
});
