/**
 * Modal - Baseline Version
 * Clean, centered modal with proper animation and overlay
 * Demonstrates correct alignment and spacing for regression testing
 */
export function Modal({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in">
      {/* Modal Content - properly centered */}
      <div className="modal-content bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-gray-700 text-base leading-relaxed">{message}</p>
        </div>

        {/* Footer - Buttons aligned properly */}
        <div className="bg-gray-50 px-6 py-4 flex gap-3 justify-end border-t border-gray-200">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Keyframe animations defined in CSS */}
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
