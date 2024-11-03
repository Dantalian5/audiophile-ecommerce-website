import {
  getAllProducts,
  getProductByCode,
} from '../controllers/productsController.js';
import products from '../models/products.js';

describe('Product Controller', () => {
  describe('getAllProducts', () => {
    it('should return all products if no category is specified', () => {
      const req = { query: {} };
      const res = {
        json: jest.fn(),
      };

      getAllProducts(req, res);
      expect(res.json).toHaveBeenCalledWith(products);
    });

    it('should return filtered products by category if category is specified', () => {
      const filteredCategory = 'electronics';
      const req = { query: { category: filteredCategory } };
      const res = {
        json: jest.fn(),
      };

      const filteredProducts = products.filter(
        (product) => product.category === filteredCategory
      );

      getAllProducts(req, res);
      expect(res.json).toHaveBeenCalledWith(filteredProducts);
    });
  });

  describe('getProductByCode', () => {
    it('should return a product if a valid code is provided', () => {
      const product = products[0];
      const req = { params: { code: product.code } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      getProductByCode(req, res);

      expect(res.status).toHaveBeenCalledWith(202);
      expect(res.json).toHaveBeenCalledWith(product);
    });

    it('should return a 404 error if an invalid code is provided', () => {
      const req = { params: { code: 'invalidCode' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      getProductByCode(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Product not find' });
    });
  });
});
