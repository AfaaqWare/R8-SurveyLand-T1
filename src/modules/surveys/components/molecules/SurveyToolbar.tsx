"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

const tabs = ["All", "Draft", "Published", "Closed"] as const;
const orders = ["Newest First", "Oldest First"] as const;

export type SurveyTab = (typeof tabs)[number];
export type SurveyOrder = (typeof orders)[number];

interface Props {
  tab: SurveyTab;
  query: string;
  order: SurveyOrder;
  onTabChange: (tab: SurveyTab) => void;
  onQueryChange: (query: string) => void;
  onOrderChange: (order: SurveyOrder) => void;
}

export default function SurveyToolbar({
  tab,
  query,
  order,
  onTabChange,
  onQueryChange,
  onOrderChange,
}: Props) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const orderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOrderOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (orderRef.current && !orderRef.current.contains(event.target as Node)) {
        setIsOrderOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOrderOpen]);

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="ds-bg-card ds-rounded-lg flex w-fit items-center gap-1 p-1">
        {tabs.map(item => (
          <button
            key={item}
            type="button"
            onClick={() => onTabChange(item)}
            className={cn(
              "ds-text-sm ds-rounded-md cursor-pointer px-4 py-2 font-medium",
              tab === item ? "ds-primary-200 ds-text-primary" : "ds-text-secondary"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="ds-bg-card ds-rounded-lg relative flex h-11 min-w-56 items-center">
          <Search size={16} className="ds-text-secondary pointer-events-none absolute start-3" />
          <input
            value={query}
            onChange={event => onQueryChange(event.target.value)}
            placeholder="Search Surveys"
            className="ds-text-sm ds-text-primary h-full w-full bg-transparent ps-9 pe-3 outline-none placeholder:text-[var(--color-text-secondary)]"
          />
        </label>

        <div ref={orderRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOrderOpen(open => !open)}
            aria-expanded={isOrderOpen}
            aria-haspopup="listbox"
            className="ds-bg-card ds-text-primary ds-text-sm ds-rounded-lg flex h-11 cursor-pointer items-center gap-8 px-4"
          >
            {order}
            <ChevronDown size={16} className={cn("transition-transform", isOrderOpen && "rotate-180")} />
          </button>

          {isOrderOpen && (
            <div
              role="listbox"
              className="ds-bg-card absolute top-12 right-0 z-20 w-full overflow-hidden rounded-xl py-1 shadow-lg"
            >
              {orders.map(item => (
                <button
                  key={item}
                  type="button"
                  role="option"
                  aria-selected={item === order}
                  onClick={() => {
                    onOrderChange(item);
                    setIsOrderOpen(false);
                  }}
                  className={cn(
                    "ds-text-sm w-full cursor-pointer px-4 py-2 text-start",
                    item === order ? "ds-primary-200 ds-text-primary" : "ds-text-secondary"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
