"use client";

import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import AppImage from "@/shared/components/atoms/Image";
import {
  MoreVertical,
  ClipboardList,
  PieChart,
  CalendarDays,
  Clock3,
  Eye,
  Pencil,
  Share2,
} from "@/assets/icons/icons";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import StatusBadge, { type StatusBadgeVariant } from "@/shared/components/atoms/StatusBadge";
import SurveyMenu from "./SurveyMenu";

export interface SurveyCardProps {
  image: string | StaticImageData;
  imageAlt?: string;
  status: StatusBadgeVariant;
  title: string;
  description: string;
  questionsCount: number;
  responsesCount: number;
  deadline: string;
  updatedAt: string;
  surveyId: string;
  onPreview?: () => void;
  onEdit?: () => void;
  onShare?: () => void;
}

export default function SurveyCard({
  image,
  imageAlt,
  status,
  title,
  description,
  questionsCount,
  responsesCount,
  deadline,
  updatedAt,
  surveyId,
  onPreview,
  onEdit,
  onShare,
}: SurveyCardProps) {
  const t = useTranslations("mySurveys.card");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <article className="ds-bg-card ds-shadow-card ds-rounded-lg flex flex-col">
      <div className="relative">
        <div className="relative h-40 w-full overflow-hidden rounded-t-[var(--radius-lg)]">
          {image ? (
            <Link
              href={`/dashboard/surveys/${surveyId}`}
              aria-label={t("viewDetails", { title })}
              className="block h-full w-full"
            >
              <AppImage src={image} alt={imageAlt || t("coverAlt")} fill className="relative h-full" />
            </Link>
          ) : null}
        </div>

        <div ref={menuRef} className="absolute top-3 right-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen(open => !open)}
            aria-label={t("settings")}
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
            className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
          >
            <MoreVertical size={18} className="ds-text-primary" />
          </button>

          {isMenuOpen && <SurveyMenu surveyId={surveyId} />}
        </div>

      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pt-3 pb-4">
        <StatusBadge status={status} />
        <div className="flex flex-col gap-1">
          <Title size="base" className="leading-tight font-bold normal-case">
            <Link href={`/dashboard/surveys/${surveyId}`} className="hover:ds-text-primary">
              {title}
            </Link>
          </Title>
          <Text size="sm" variant="secondary">
            {description}
          </Text>
        </div>

        <div className="ds-text-secondary grid grid-cols-2 gap-x-3 gap-y-2">
          <span className="flex min-w-0 items-center gap-2">
            <ClipboardList size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              {questionsCount} {t("questions")}
            </Text>
          </span>
          <span className="flex min-w-0 items-center gap-2">
            <PieChart size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              {responsesCount} {t("responses")}
            </Text>
          </span>
          <span className="flex min-w-0 items-center gap-2">
            <CalendarDays size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              {t("deadline")}: {deadline}
            </Text>
          </span>
          <span className="flex min-w-0 items-center gap-2">
            <Clock3 size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              {t("updated")}: {updatedAt}
            </Text>
          </span>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPreview}
            className="ds-bg-card ds-text-primary ds-border-card h-10 flex-1 border font-bold hover:opacity-90"
          >
            <Eye size={16} />
            {t("preview")}
          </Button>
          <Button variant="outline" size="sm" onClick={onEdit} className="h-10 flex-1 font-bold">
            <Pencil size={16} />
            {t("edit")}
          </Button>
          <Button variant="primary" size="sm" onClick={onShare} className="h-10 flex-1 font-bold">
            <Share2 size={16} />
            {t("share")}
          </Button>
        </div>
      </div>
    </article>
  );
}
