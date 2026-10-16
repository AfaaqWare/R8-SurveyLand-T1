import Icon from "@/shared/components/atoms/Icon";
import Link from "@/shared/components/atoms/Link";
import { ArrowLeft } from "@/assets/icons/icons";
import React from "react";

type Props = {
  text: string;
  href?: string;
};
const SignInLink = ({ text, href }: Props) => {
  return (
    <>
      {href && (
        <Link
          href={href}
          className="ds-text-base ds-text-secondary hover:ds-text-primary mt-5 flex items-center justify-center gap-1 no-underline transition-opacity hover:opacity-70"
        >
          <Icon IconComponent={ArrowLeft} size={23} variant="secondary"  />
          {text}
        </Link>
      )}
    </>
  );
};

export default SignInLink;
