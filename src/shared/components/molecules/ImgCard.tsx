import React from "react";
import { StaticImageData } from "next/image";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import AppImage from "../atoms/Image";

interface Props {
  src: string | StaticImageData;
  alt?: string;
  title: string;
  titleSize?: "sm" | "base" | "md" | "lg" | "xl";
  titleVariant?: "primary" | "disabled" | "secondary" | "alt";
  text: string;
  btn: string;
}

export default function ImgCard({
  src,
  alt = "card image",
  title,
  titleSize = "md",
  titleVariant,
  text,
  btn,
}: Props) {
  return (
    <div className="ds-bg-card ds-border-card ds-rounded-md ds-shadow-card flex min-w-[220px] flex-col p-4 transition-all duration-200 hover:scale-[1.01]">
      <div className="ds-rounded-md relative h-[220px] w-full overflow-hidden">
        <AppImage src={src} alt={alt} fill objectFit="cover" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-between gap-4 pb-2 pt-5 text-center">
        <div className="flex flex-col gap-2">
          <Title size={titleSize} variant={titleVariant} className="leading-tight font-bold normal-case">
            {title}
          </Title>
          <Text size="sm" variant="secondary" isCenter className="leading-relaxed">
            {text}
          </Text>
        </div>
        <Button variant="primary" size="md" className="mt-2 w-full max-w-[200px]">
          {btn}
        </Button>
      </div>
    </div>
  );
}
