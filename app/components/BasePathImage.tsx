import Image, { ImageProps } from 'next/image';
import getConfig from 'next/config';


interface BasePathImageProps extends ImageProps {
  src: string; // Override `src` to ensure it's required
}

const { basePath } = getConfig();

const BasePathImage: React.FC<BasePathImageProps> = ({ src, alt, width, height, priority = false, className = '' }) => {
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
