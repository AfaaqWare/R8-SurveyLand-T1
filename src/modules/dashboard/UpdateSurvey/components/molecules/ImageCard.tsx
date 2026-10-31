"use client";
import {  useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Card } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import type { StaticImageData } from "next/image";

interface CoverImageCardProps {
  title: string;
  hint: string;
  cover: string | null | StaticImageData;
  emptyLabel: string;
}

const ImageCard = ({ title, hint, cover, emptyLabel }: CoverImageCardProps) => {
  const [loaded, setLoaded] = useState(false);


  return (
    <Card className="ds-border-card ds-bg-card flex flex-col gap-4 p-4 shadow-none">
      <div className="flex flex-col gap-1">
        <Title size="md">{title}</Title>
        <Text size="sm" variant="secondary">{hint}</Text>
      </div>

      <div
        className={`ds-bg-form relative aspect-square w-full overflow-hidden rounded-md ${
          cover && !loaded ? "animate-pulse" : ""
        }`}
      >
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            sizes="320px"
            priority
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-opacity duration-100 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <ImagePlus className="ds-text-secondary size-10" />
            <Text className="ds-text-secondary text-center">{emptyLabel}</Text>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageCard;
