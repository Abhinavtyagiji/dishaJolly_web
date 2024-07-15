



import React from 'react';

const FeaturedProduct = () => {
  const products = [
    {
      name: 'Kimchi',
      image: 'images/6.jpg', // Update with the actual image path
      price: 'Rs. 448.00',
      rating: 5,
      reviews: 1,
    },
    {
      name: 'Classic Almond Milk',
      image: 'images/7.jpg', // Update with the actual image path
      price: 'Rs. 496.00',
    },
    {
      name: 'Gas Tincture',
      image: 'images/8.jpg', // Update with the actual image path
      price: 'Rs. 708.00',
    },
    // Add more products to ensure scrolling
    
  ];

  return (
    <div className="flex flex-col items-start p-4">
      <h2 className="text-2xl font-bold my-4 text-teal-600">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full lg:w-80 h-80 object-cover rounded-md" // Adjusted width
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="mt-1">{product.price}</p>
            {product.rating && (
              <div className="flex items-center mt-1">
                
              </div>
            )}
            <button className="mt-4 px-4 py-2 text-teal-500  border-teal-600 rounded hover:bg-teal-600">
              Choose options
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;



