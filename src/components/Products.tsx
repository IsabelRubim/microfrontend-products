import React from 'react';

import '../index.css';

interface Product {
  id: number;
  name: string;
  price: number;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone X',
    price: 999.99,
  },
  {
    id: 2,
    name: 'Laptop Pro',
    price: 1000,
  },
  {
    id: 3,
    name: 'Xbox Series X',
    price: 100.5,
  },
];

const Products = () => {
  const handleAddToCart = (product: Product) => {
    console.log(`Produto "${product.name}" added to cart.`);
    alert(`"${product.name}" added to cart!`);
  };

  return (
    <div className='mt-20 w-full md:w-2/3'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'>
        Products
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300'
          >
            <div className='p-5'>
              <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
                {product.name}
              </h3>

              <p className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4'>
                $ {product.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className='cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
