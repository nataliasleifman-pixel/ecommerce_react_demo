import { useState } from 'react';
import { Modal } from './Modal';

/**
 * ProductCard - Baseline Version
 * Clean, responsive product card with proper spacing and alignment
 * Used as the reference for visual regression testing
 */
export function ProductCard({ product, onAddToCart }) {
  const [showConfirm, setShowConfirm] = useState(false);

  // Refactor: consolidate class names into constants (no visual change intended)
  const containerClasses = "product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all";
  const imageWrapperClasses = "relative w-full h-72 bg-gray-200 overflow-hidden";
  const imgClasses = "w-full h-full object-cover hover:scale-110 transition-transform duration-300";
  const buttonClasses = "checkout-button w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors active:scale-95";

  return (
    <>
      <div className={containerClasses}>
        {/* Product Image */}
        <div className={imageWrapperClasses}>
          <img
            src={product.image}
            alt={product.title}
            className={imgClasses}
          />
          {/* Sale badge - intentionally positioned */}
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button onClick={() => setShowConfirm(true)} className={buttonClasses}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <Modal
          title="Add to Cart"
          message={`Added "${product.title}" to your cart`}
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
