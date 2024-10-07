// src/components/Modal.jsx
function Modal({ isOpen, onClose, onConfirm, message }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md">
          <p className="text-xl mb-4">{message}</p>
          <div className="flex justify-end space-x-4">
            <button
              className="text-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  