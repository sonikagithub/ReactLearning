import React, { useState } from "react";

const ModalOpening = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setDisplay(!display)}
        className="p-4 m-2 bg-blue-600 font-mono fixed top-4 left-4 text-white rounded"
      >
        Click Me
      </button>

      {/* Modal Overlay and Box */}
      {display && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-orange-300 p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Modal Component</h2>
            <button
              onClick={() => setDisplay(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOpening;
