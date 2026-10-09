import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  center?: boolean;
}
export default function Images({
  src = "",
  alt = "images",
  className,
  width = 100,
  height = 100,
  priority = false,
  center = false,
}: Props) {
  const baseClasses = "w-full  flex justify-end items-center";
  return (
    <div
      className={cn(
        baseClasses,
        center ? "flex justify-center items-center" : "",
      )}
    >
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={width}
        height={height}
        priority={priority}
        className={cn(className)}
      />
    </div>
  );
}
