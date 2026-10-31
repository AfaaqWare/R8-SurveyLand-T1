"use client";

import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
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
  imageAlt = "Survey cover",
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
          {image ? <AppImage src={image} alt={imageAlt} fill className="relative h-full" /> : null}
        </div>

        <div ref={menuRef} className="absolute top-3 right-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen(open => !open)}
            aria-label="Survey settings"
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
            {title}
          </Title>
          <Text size="sm" variant="secondary">
            {description}
          </Text>
        </div>

        <div className="ds-text-secondary grid grid-cols-2 gap-x-3 gap-y-2">
          <span className="flex min-w-0 items-center gap-2">
            <ClipboardList size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              {questionsCount} Questions
            </Text>
          </span>
          <span className="flex min-w-0 items-center gap-2">
            <PieChart size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              {responsesCount} Responses
            </Text>
          </span>
          <span className="flex min-w-0 items-center gap-2">
            <CalendarDays size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              deadline: {deadline}
            </Text>
          </span>
          <span className="flex min-w-0 items-center gap-2">
            <Clock3 size={16} className="shrink-0" />
            <Text size="sm" variant="secondary" className="truncate">
              Updated: {updatedAt}
            </Text>
          </span>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPreview}
            className="h-10 flex-1 border border-[#d9dde3] bg-white font-bold text-black hover:bg-white"
          >
            <Eye size={16} />
            preview
          </Button>
          <Button variant="outline" size="sm" onClick={onEdit} className="h-10 flex-1 font-bold">
            <Pencil size={16} />
            Edit
          </Button>
          <Button variant="primary" size="sm" onClick={onShare} className="h-10 flex-1 font-bold">
            <Share2 size={16} />
            Share
          </Button>
        </div>
      </div>
    </article>
  );
}
