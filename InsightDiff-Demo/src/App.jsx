import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { NavbarRegression } from './components/NavbarRegression'
import { CheckoutPage } from './components/CheckoutPage'
import { CheckoutPageRegression } from './components/CheckoutPageRegression'
import './index.css'

function App() {
  const [version, setVersion] = useState('baseline')

  return (
    <div className="min-h-screen bg-white">
      {/* Version Selector - Fixed in corner for easy switching */}
      <div className="version-selector">
        <div className="text-xs font-bold text-gray-700 mb-2">Visual Version</div>
        <div className="flex gap-2">
          <button
            onClick={() => setVersion('baseline')}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              version === 'baseline'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Baseline
          </button>
          <button
            onClick={() => setVersion('regression')}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              version === 'regression'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Regression
          </button>
        </div>
      </div>

      {/* Render appropriate version */}
      {version === 'baseline' ? (
        <>
          <Navbar />
          <CheckoutPage />
        </>
      ) : (
        <>
          <NavbarRegression />
          <CheckoutPageRegression />
        </>
      )}
    </div>
  )
}

export default App
