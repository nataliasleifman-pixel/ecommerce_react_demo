# Feature Branches Summary

## Created Branches

### 1. feature/button-color-changes
**Commit:** `0ba88d4`
- Changed "Add to Cart" button from blue to **green** (bg-green-600)
- Changed "Proceed to Checkout" button from blue to **orange** (bg-orange-600)
- **Files Modified:** ProductCard.jsx, CheckoutPage.jsx

### 2. feature/adjust-spacing
**Commit:** `dbe0678`
- Added margin to product cards (mx-1) for tighter spacing
- Increased padding in Order Summary section (p-6 → p-8)
- **Files Modified:** ProductCard.jsx, CheckoutPage.jsx

### 3. feature/text-changes
**Commit:** `96f1a67`
- Changed page title "Shopping Cart" → "Your Shopping Cart"
- **Files Modified:** CheckoutPage.jsx

### 4. feature/size-changes
**Commit:** `4c19718`
- Increased product image height from h-56 to h-72
- Makes product images larger and more prominent
- **Files Modified:** ProductCard.jsx

### 5. feature/background-borders
**Commit:** `3d8942a`
- Changed "Available Products" section background to light gray (bg-gray-100)
- Added left border (border-l-4 border-blue-500)
- **Files Modified:** CheckoutPage.jsx

## How to View Changes

View differences for each branch:
```bash
git diff main feature/button-color-changes
git diff main feature/adjust-spacing
git diff main feature/text-changes
git diff main feature/size-changes
git diff main feature/background-borders
```

## Next Steps

Each branch is ready for:
1. Creating a Pull Request
2. Reviewing changes visually
3. Testing visual regression between branches
