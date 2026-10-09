import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill";
}

export default function AppImage({
  src,
  alt,
  className,
  width = 250,
  height = 250,
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "cover",
}: Props) {
  return (
    <div className={cn("w-full flex justify-center items-center", className)}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn(objectFit && `object-${objectFit}`, !fill && "!relative")}
      />
    </div>
  );
}
