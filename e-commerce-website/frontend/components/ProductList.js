import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Apple',
      description: 'Fresh and juicy apple',
      price: 1.99,
      image: 'apple1.jpg',
    },
    {
      id: 2,
      name: 'Green Apple',
      description: 'Crisp and tart green apple',
      price: 2.49,
      image: 'apple2.jpg',
    },
    {
      id: 3,
      name: 'Red Apple',
      description: 'Sweet and flavorful red apple',
      price: 2.99,
      image: 'apple3.jpg',
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={`images/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;