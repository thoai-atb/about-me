import React from "react";
import BasePathImage from "./BasePathImage";

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="relative max-w-4xl w-full p-6">
        {/* Close Button */}
        <button
          className="absolute -top-4 -right-2 text-white text-3xl font-bold hover:text-gray-400 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="flex justify-center">
          <BasePathImage
            src={imageSrc}
            alt="Large Project Image"
            className="rounded-lg shadow-xl w-auto max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
