import React from 'react';

/**
 * PromoBanner - Demo component (not rendered on default route)
 * This file intentionally changes styling but is not included in the main checkout route.
 */
export function PromoBanner() {
  return (
    <div className="hidden md:block bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
      <p className="text-sm text-yellow-700 font-medium">Limited time offer: 10% off select items</p>
    </div>
  );
}

export default PromoBanner;
