import React from "react";
import BasePathImage from "../../components/BasePathImage";

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="relative w-full p-6" style={{ maxWidth: "90rem" }}>
        {/* Image */}
        <div className="relative flex justify-center items-start gap-4">
          <BasePathImage
            src={imageSrc}
            alt="Large Project Image"
            className="rounded-lg shadow-xl w-auto max-w-full max-h-[80vh] object-contain"
          />
          {/* Close Button */}
          <button
            className="-translate-y-10 text-white text-3xl font-bold hover:text-secondary-400 transition"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
