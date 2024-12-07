import React from "react";
import BasePathImage from "../../components/BasePathImage";

export interface Item {
  title: string;            // Title of the item
  description: string;      // Description of the item
  highlights: string[];     // List of key highlights or features
  imageSrc: string;         // Image source path
  imageAlt: string;         // Alternate text for the image
}

interface ItemCardProps {
  item: Item;
  flip?: boolean; // Optional prop to flip layout
  onImageClick?: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  flip = false,
  onImageClick = null,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-6 py-6 rounded-lg mb-6 animate-in fade-in-0 duration-500 ${
        flip
          ? "md:flex-row-reverse slide-in-from-right-10"
          : "slide-in-from-left-10"
      }`}
    >
      {/* Left side: Title and Description */}
      <div className={`flex-1 bg-tertiary-100 h-52 p-6 md:text-left flex flex-col`}>
        <h2
          className={`text-2xl font-bold mb-2 text-tertiary-800`}
        >
          {item.title}
        </h2>
        <p className={`text-gray-600 max-w-xl mb-4 `}>
          {item.description}
        </p>
        <ul className={`custom-star-list`}>
          {item.highlights.map((point, i) => (
            <li key={i} className="list-inside">
              {point}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex-1 relative">sdf</div> */}
      {/* Right side: Image */}
      <div
        onClick={() => onImageClick?.()}
        className={`mt-4 bg-tertiary-200 md:mt-0 border-tertiary-500 border-8 ${flip ? "-rotate-2" : "rotate-2"}`}
      >
        <BasePathImage
          src={item.imageSrc}
          alt={item.imageAlt}
          className={`rounded-lg shadow-xl w-52 h-52 cursor-pointer border mx-auto md:max-w-none`}
        />
      </div>
    </div>
  );
};

export default ItemCard;
