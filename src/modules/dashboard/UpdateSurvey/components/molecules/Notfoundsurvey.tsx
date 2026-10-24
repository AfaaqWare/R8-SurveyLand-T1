"use client";
import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";

interface Props {
  image: StaticImageData;
  message: string;
  actionLabel?: string;
  href?: string;
}

const Notfoundsurvey = ({ image, message, actionLabel, href }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-1 py-10 text-center">
      <Image src={image} alt="" className="h-auto w-full max-w-md" priority />

      <div className="flex flex-col gap-1">
        <Text size="md" variant="secondary" className="max-w-md font-bold">
          {message}
        </Text>

        {actionLabel && href && <Button variant="primaryWhite" onClick={() => router.push(href)}>{actionLabel}</Button>}
      </div>
    </div>
  );
};

export default Notfoundsurvey;
