/**
 * ModalRegression - Modified Version with Intentional Regressions
 * Visual regressions introduced for testing:
 * 1. Modal shifted downward and to the right (broken centering)
 * 2. Modal width changed to fixed pixel value (unresponsive on mobile)
 * 3. Header background color changed
 * 4. Buttons misaligned (floating/overlapping)
 * 5. Padding and spacing inconsistent
 * 6. Z-index issues with overlay
 */
export function ModalRegression({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
      {/* REGRESSION: Modal shifted downward by 20px and right by 16px - broken centering */}
      <div className="modal-regression modal-content bg-white rounded-lg shadow-xl w-96 overflow-hidden relative top-5 left-4">
        {/* REGRESSION: Header color changed and padding reduced */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2">
          <h2 className="text-lg font-bold text-white">{title}</h2>
        </div>

        {/* REGRESSION: Body padding changed and text sizing different */}
        <div className="px-3 py-3">
          <p className="text-gray-600 text-sm leading-tight">{message}</p>
        </div>

        {/* REGRESSION: Buttons misaligned - no proper spacing */}
        <div className="bg-gray-100 px-3 py-2 flex gap-1 justify-between border-t border-gray-300">
          <button
            onClick={onCancel}
            className="px-3 py-1 text-gray-600 bg-white rounded border border-gray-400 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-1 text-white bg-red-500 rounded text-sm font-bold hover:bg-red-600 transition-colors"
          >
            Yes!
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
