import Image, { ImageProps } from "next/image";

interface BasePathImageProps extends ImageProps {
  src: string; // Override `src` to ensure it's required
}

const BasePathImage: React.FC<BasePathImageProps> = ({
  src,
  alt,
  width = 20,
  height = 20,
  priority = false,
  className = "",
}) => {
  // Access client-side base path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // Fallback to empty if not defined

  const appending = basePath ? basePath : "";
  const imageSrc = `${appending}${src}`;

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};

export default BasePathImage;
