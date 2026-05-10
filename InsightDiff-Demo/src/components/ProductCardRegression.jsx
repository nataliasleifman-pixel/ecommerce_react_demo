import { useState } from 'react';
import { ModalRegression } from './ModalRegression';

/**
 * ProductCardRegression - Modified Version with Intentional Regressions
 * Visual regressions introduced for testing:
 * 1. Card width changed (broken responsive layout)
 * 2. Title text not properly constrained
 * 3. Improper spacing/padding
 * 4. Misaligned button positioning
 * 5. Image aspect ratio broken
 */
export function ProductCardRegression({ product, onAddToCart }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {/* REGRESSION: Card width changed from full to 80% - breaks responsive layout */}
      <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all w-4/5">
        {/* REGRESSION: Image height reduced from h-56 to h-32 - breaks aspect ratio */}
        <div className="relative w-full h-32 bg-gray-200 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          {/* REGRESSION: Sale badge moved and repositioned incorrectly */}
          <div className="absolute top-1 -right-2 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold rotate-12">
            Sale!
          </div>
        </div>

        {/* REGRESSION: Padding changed from p-4 to p-2 - text cramped */}
        <div className="p-2">
          {/* REGRESSION: Title not line-clamped, can overflow */}
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            {product.title}
          </h3>

          {/* REGRESSION: Rating stars misaligned */}
          <div className="flex items-start gap-1 mb-2">
            <div className="flex gap-0">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-200'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {product.rating}
            </span>
          </div>

          {/* REGRESSION: Price styling changed */}
          <div className="mb-2">
            <span className="text-xl font-bold text-red-700">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* REGRESSION: Button color changed to green and misaligned */}
          <button
            onClick={() => setShowConfirm(true)}
            className="w-full px-3 py-2 bg-green-500 text-white text-sm rounded-md font-medium hover:bg-green-600 transition-colors active:scale-95 mt-2 ml-1"
          >
            Add
          </button>
        </div>
      </div>

      {/* Confirmation Modal - using regression version */}
      {showConfirm && (
        <ModalRegression
          title="Added!"
          message={`"${product.title}" added`}
          onConfirm={() => {
            setShowConfirm(false);
            onAddToCart?.(product);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}
