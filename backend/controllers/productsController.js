import products from '../models/products.js';

export const getAllProducts = (req, res) => {
  const { category } = req.query;

  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
};

export const getProductByCode = (req, res) => {
  const { code } = req.params;
  const product = products.find((p) => p.code === code);

  if (product) {
    res.status(202).json(product);
  } else {
    res.status(404).json({ error: 'Product not find' });
  }
};
