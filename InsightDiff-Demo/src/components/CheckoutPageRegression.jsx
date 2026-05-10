import { useState } from 'react';
import { ProductCardRegression } from './ProductCardRegression';
import { mockProducts } from '../data/mockData';

/**
 * CheckoutPageRegression - Modified Version with Intentional Regressions
 * Visual regressions introduced for testing:
 * 1. Grid layout broken (single column instead of 2 on desktop)
 * 2. Sidebar not sticky (content shifts when scrolling)
 * 3. Checkout button shifted downward with extra margin
 * 4. Product cards spacing changed
 * 5. Mobile layout broken (no proper responsive stacking)
 * 6. Color scheme changed (button color different)
 * 7. Spacing and padding inconsistent throughout
 * 8. Header height causes navbar overlap
 */
export function CheckoutPageRegression() {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 0) {
      setPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax;

  return (
    <div className="pt-32 pb-8 bg-white min-h-screen">
      {/* REGRESSION: Page header padding changed */}
      <div className="bg-gray-100 border-b-2 border-gray-300 mb-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
          <p className="text-gray-500 mt-1 text-sm">Products available</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        {/* REGRESSION: Grid changed from lg:grid-cols-3 to single column */}
        <div className="grid grid-cols-1 gap-6">
          {/* Products Section - no longer responsive 2-column */}
          <div>
            <div className="bg-white rounded border border-gray-300 p-4 mb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Products</h2>
              {/* REGRESSION: Grid layout broken - only 1 column instead of 2 */}
              <div className="grid grid-cols-1 gap-3">
                {mockProducts.map(product => (
                  <ProductCardRegression
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* REGRESSION: Sidebar - no longer sticky, appears below products on all screens */}
          <div className="col-span-1">
            <div className="bg-white rounded border border-gray-300 p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Summary</h2>

              {/* Cart Items */}
              <div className="mb-4 max-h-48 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-6 text-sm">No items</p>
                ) : (
                  <div className="space-y-2">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-2">
                        <div>
                          <p className="font-medium text-gray-800 text-xs">{item.title}</p>
                          <p className="text-xs text-gray-500">x{item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-800 text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* REGRESSION: Promo code section - reduced padding */}
              <div className="mb-3 border-t border-gray-200 pt-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Promo
                </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Code"
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-3 py-1 bg-gray-300 text-gray-600 rounded font-medium hover:bg-gray-400 transition-colors text-xs"
                  >
                    OK
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-green-500 mt-1">Applied</p>
                )}
              </div>

              {/* REGRESSION: Price breakdown styling changed */}
              <div className="border-t border-gray-200 pt-3 space-y-2">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Sub:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-500 font-medium text-sm">
                    <span>Off:</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* REGRESSION: Checkout button shifted downward with extra margin and color changed */}
              <button className="checkout-button checkout-button-regression w-full mt-6 px-4 py-3 bg-red-500 text-white rounded font-bold text-base hover:bg-red-600 transition-colors active:scale-95">
                Checkout
              </button>

              {/* REGRESSION: Info text styling changed */}
              <p className="text-xs text-gray-500 text-center mt-3">
                Ships in 2-3 weeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
