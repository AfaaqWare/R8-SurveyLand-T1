import { cn } from "@/lib/cn";

interface Props {
  className?: string;
}

export default function Skeleton({ className }: Props) {
  return <div className={cn("ds-rounded-md ds-bg-form animate-pulse", className)} />;
}
