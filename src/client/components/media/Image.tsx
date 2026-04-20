import type { ImgHTMLAttributes } from 'react';
import type { Picture } from '@/lib/picture';
import { cn } from '@/lib/cn';

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: Picture | string;
  alt: string;
  pictureClassName?: string;
};

export function Image({
  src,
  alt,
  className,
  pictureClassName,
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}: ImageProps) {
  if (typeof src === 'string') {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={className}
        {...imgProps}
      />
    );
  }

  return (
    <picture className={cn(pictureClassName)}>
      {Object.entries(src.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} />
      ))}
      <img
        src={src.img.src}
        width={src.img.w}
        height={src.img.h}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={className}
        {...imgProps}
      />
    </picture>
  );
}
