import request from 'supertest';
import app from '../app.js';

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done);
});

describe('Product Controller', () => {
  it('should return all products', async () => {
    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('code');
  });

  it('should return a product by code', async () => {
    const response = await request(app).get('/api/products/xx99-mark-two');

    expect(response.status).toBe(202);
    expect(response.body).toHaveProperty('code', 'xx99-mark-two');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('price');
  });

  it('should return a 404 error if product code does not exist', async () => {
    const response = await request(app).get('/api/products/non-existing-code');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Product not find');
  });
});
