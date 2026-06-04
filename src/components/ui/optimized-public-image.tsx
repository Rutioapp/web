import Image, { type ImageProps } from "next/image";

import { warmBlurDataUrl } from "@/lib/image-placeholders";

type OptimizedPublicImageProps = Omit<ImageProps, "src" | "alt" | "placeholder" | "blurDataURL"> & {
  src: string;
  alt: string;
};

export function OptimizedPublicImage({ src, alt, ...props }: OptimizedPublicImageProps) {
  return <Image src={src} alt={alt} placeholder="blur" blurDataURL={warmBlurDataUrl} {...props} />;
}
