import { useState } from 'react';
import ProductCard from './ProductCard';
import categories from '../imageMapping/categories';
import featuredProducts from '../imageMapping/featuredProducts';

const visibleCount = 4;

export default function ProductGrid() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(featuredProducts.length - visibleCount, prev + visibleCount)
    );
  };

  return (
    <section className="px-6 py-12 space-y-16">
      {/* Featured Products Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 w-10 h-10 rounded-full z-10 flex items-center justify-center transition duration-300"
            disabled={startIndex === 0}
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
              }}
            >
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 px-2"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 w-10 h-10 rounded-full z-10 flex items-center justify-center transition duration-300"
            disabled={startIndex >= featuredProducts.length - visibleCount}
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white shadow rounded overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover"
              />
              <h3 className="py-4 text-lg font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
