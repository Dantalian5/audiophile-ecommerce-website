import request from 'supertest';
import app from '../app.js';

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done);
});

describe('Integration Test - Complete Purchase Flow', () => {
  it('should handle the complete purchase flow from adding to cart to checkout', async () => {
    const productsResponse = await request(app).get('/api/products');
    expect(productsResponse.status).toBe(200);
    expect(productsResponse.body).toBeInstanceOf(Array);
    expect(productsResponse.body.length).toBeGreaterThan(0);

    const product1 = productsResponse.body[0];
    const product2 = productsResponse.body[1];

    const cartData = {
      cart: [
        { code: product1.code, quantity: 1 },
        { code: product2.code, quantity: 2 },
      ],
    };
    const cartResponse = await request(app).post('/api/cart').send(cartData);

    expect(cartResponse.status).toBe(200);
    expect(cartResponse.body).toHaveProperty('subtotal');
    expect(cartResponse.body).toHaveProperty('total');
    expect(cartResponse.body.products).toHaveLength(2);

    const checkoutData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '1234567890',
      address: '123 Test St',
      zip: '12345',
      city: 'Testville',
      country: 'Testland',
      paymentMethod: 'emoney',
      emoneyNumber: '987654321',
      emoneyPin: '1234',
      cart: cartData.cart,
    };

    const checkoutResponse = await request(app)
      .post('/api/checkout')
      .send(checkoutData);

    expect(checkoutResponse.status).toBe(200);
    expect(checkoutResponse.body).toHaveProperty('name', 'Jane Doe');
    expect(checkoutResponse.body).toHaveProperty(
      'email',
      'jane.doe@example.com'
    );
    expect(checkoutResponse.body.cart).toHaveProperty('subtotal');
    expect(checkoutResponse.body.cart).toHaveProperty('total');
    expect(checkoutResponse.body.cart.products).toHaveLength(2);
  });

  it('should return a 400 error if checkout data is incomplete or invalid', async () => {
    const productsResponse = await request(app).get('/api/products');
    expect(productsResponse.status).toBe(200);
    const product = productsResponse.body[0];

    const cartData = {
      cart: [{ code: product.code, quantity: 1 }],
    };
    const cartResponse = await request(app).post('/api/cart').send(cartData);
    expect(cartResponse.status).toBe(200);

    const invalidCheckoutData = {
      email: 'invalid-email',
      paymentMethod: 'emoney',
      emoneyNumber: '987654321',
      emoneyPin: '1234',
      cart: cartData.cart,
    };

    const checkoutResponse = await request(app)
      .post('/api/checkout')
      .send(invalidCheckoutData);

    expect(checkoutResponse.status).toBe(400);
    expect(checkoutResponse.body).toHaveProperty('errors');
    expect(checkoutResponse.body.errors).toBeInstanceOf(Array);
    expect(checkoutResponse.body.errors[0]).toHaveProperty('message');
  });
});
