import React, { useState } from "react";

function EmployeeModal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default EmployeeModal;
