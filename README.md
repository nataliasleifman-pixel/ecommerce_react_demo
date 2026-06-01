# InsightDiff Demo

A visual regression testing sandbox built with React, Vite, and TailwindCSS. Perfect for demonstrating visual regression detection and testing AI-powered explanations of UI changes.

## Overview

This application provides two intentionally different versions of a shopping cart UI:
- **Baseline**: Clean, properly-aligned, responsive layout
- **Regression**: Contains visual regressions for testing detection algorithms

## Features

### Components

1. **Navbar** - Sticky top navigation with logo, links, and icons
   - Baseline: Proper height and spacing
   - Regression: Increased height causing overlap with content

2. **Product Card** - Displays product details with add-to-cart functionality
   - Baseline: Correct image aspect ratio, proper spacing
   - Regression: Broken card width, resized images, misaligned elements

3. **Checkout Page** - Main shopping experience with cart summary
   - Baseline: Proper 2-column responsive grid, sticky sidebar
   - Regression: Single column layout, non-sticky sidebar, broken spacing

4. **Modal** - Confirmation dialogs for user actions
   - Baseline: Centered, proper animations
   - Regression: Shifted offset, misaligned buttons

5. **Mock Data** - 4 realistic product samples with images, prices, ratings

## Visual Regressions Included

### Intentional Differences for Testing

1. **Layout Shifts**
   - Navbar increased from h-16 to h-24 (overlaps content)
   - Product cards changed from full width to 80% width
   - Grid changed from 2-column to 1-column layout

2. **Spacing & Padding**
   - Reduced padding in cards (p-6 → p-4 → p-2)
   - Decreased margins and gaps throughout
   - Inconsistent button spacing

3. **Color Changes**
   - Button changed from blue to green/red
   - Sale badge color altered
   - Price text color changed to red
   - Navbar background changed to indigo

4. **Element Sizing**
   - Image heights reduced (h-56 → h-32)
   - Text sizes reduced (title font-size, rating font-size)
   - Badge positioning altered (rotated, offset)

5. **Responsive Issues**
   - Mobile breakpoints not responsive on regression version
   - Sticky positioning removed from sidebar
   - Form inputs styled with red borders

6. **Modal Issues**
   - Modal shifted down 20px, right 16px
   - Button alignment broken
   - Z-index issues with overlay

## Running Locally

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to project directory
cd InsightDiff-Demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

## Using for Visual Testing

### Switching Between Versions

The app includes a **Version Selector** button in the top-right corner:
- **Baseline**: Reference version (blue button)
- **Regression**: Testing version with intentional issues (red button)

### Testing with Playwright

```bash
# Install Playwright if not already installed
npm install --save-dev @playwright/test

# Create a test file (e.g., tests/visual-regression.spec.ts)
# Example test structure:
# - Navigate to both versions
# - Take screenshots
# - Compare with pixelmatch or similar
```

### Testing with Pixelmatch

```bash
# Install pixelmatch
npm install pixelmatch

# Capture baseline screenshots
npm run dev  # with Baseline selected
# Take screenshots of each page

# Capture regression screenshots  
# Switch to Regression version in browser
# Take screenshots of each page

# Use pixelmatch to detect differences
```

### Using with OpenCV

For contour-based visual regression detection:

```python
import cv2
import numpy as np

# Load baseline and regression images
baseline = cv2.imread('baseline.png')
regression = cv2.imread('regression.png')

# Detect differences
diff = cv2.absdiff(baseline, regression)
gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 30, 255, cv2.THRESH_BINARY)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

# Draw contours showing differences
cv2.drawContours(regression, contours, -1, (0, 255, 0), 2)
```

## Component Structure

```
src/
├── components/
│   ├── Navbar.jsx                    # Baseline navbar
│   ├── NavbarRegression.jsx          # Regression navbar (larger height)
│   ├── ProductCard.jsx               # Baseline product card
│   ├── ProductCardRegression.jsx     # Regression product card (smaller, broken layout)
│   ├── Modal.jsx                     # Baseline modal
│   ├── ModalRegression.jsx           # Regression modal (misaligned)
│   ├── CheckoutPage.jsx              # Baseline checkout page
│   └── CheckoutPageRegression.jsx    # Regression checkout page (single column)
├── data/
│   └── mockData.js                   # Mock product data
├── App.jsx                           # Main app with version selector
├── App.css                           # App styles
├── main.jsx                          # Entry point
└── index.css                         # Global styles with custom CSS classes
```

## Key CSS Classes for Regression Testing

### Custom Utility Classes

```css
.navbar                   /* Fixed navbar styling */
.navbar-sticky           /* Adds padding for navbar overlap */
.product-card            /* Base card styling with shadow */
.checkout-button         /* Base button styling */
.checkout-button-regression  /* Button with extra margin (mt-8) */
.modal-backdrop           /* Overlay styling */
.modal-content            /* Modal box styling */
.modal-regression         /* Modal offset positioning (top-5 left-4) */
.responsive-container    /* Container with responsive padding */
```

## Technology Stack

- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework
- **JavaScript (ES6+)** - Core language
- **PostCSS** - CSS processing

## Configuration Files

- `vite.config.js` - Vite configuration with React plugin
- `tailwind.config.js` - TailwindCSS theme customization
- `postcss.config.js` - PostCSS plugins
- `eslint.config.js` - ESLint configuration
- `package.json` - Dependencies and scripts

## Mock Data

Product data includes:
- High-quality product images from Unsplash
- Realistic prices ($79.99 - $449.99)
- Star ratings (4.3 - 4.9)
- Review counts (89 - 521)

## Tips for Testing

1. **Screenshot Capture**: Take full-page screenshots at consistent window sizes
2. **Desktop Size**: 1920x1080 for desktop testing
3. **Mobile Size**: 375x667 for mobile/tablet testing
4. **Consistent Timing**: Wait for animations to complete before capturing
5. **Version Tracking**: Label screenshots with version name and component

## Common Testing Scenarios

### Layout Regression Detection
- Compare baseline vs regression layouts
- Detect navbar overlap issues
- Identify missing responsive breakpoints

### Color Detection
- Button color changes (blue → green/red)
- Text color changes
- Background color alterations

### Spacing Detection
- Padding and margin changes
- Gap size changes in grids
- Line-height modifications

### Responsive Issues
- Single vs multi-column layouts
- Mobile breakpoint failures
- Sticky positioning removal

## Development Notes

### Adding New Products

Edit `src/data/mockData.js`:
```javascript
{
  id: 5,
  title: "Your Product",
  price: 99.99,
  image: "https://images.unsplash.com/...",
  rating: 4.5,
  reviews: 100,
}
```

### Modifying Regressions

Each regression component has clear comments marking intentional changes:
```javascript
// REGRESSION: Description of what changed
className="..." // Shows the regression
```

### Creating New Regressions

Follow the pattern:
1. Create a new `*Regression.jsx` component
2. Comment all intentional changes
3. Import it in the regression version selector
4. Test that changes are visually distinct

## Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Playwright Testing](https://playwright.dev)
- [Pixelmatch](https://github.com/mapbox/pixelmatch)
- [OpenCV.js](https://docs.opencv.org/4.x/index.html)

## License

Open source for educational and testing purposes.

## Support

For issues or feature requests related to visual regression testing, see the README comments throughout the codebase for detailed annotations on where regressions are intentionally introduced.
