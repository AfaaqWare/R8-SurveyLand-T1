import { QuickAction } from "../types/DashboardTypes";
import {
  CirclePlus,
  Download,
  MessageSquareText,
  UsersRound,
  ChartLine,
  ClipboardList,
  PencilLine,
  Send,
  Users,
} from "@/assets/icons/icons";

export const statusItems = [
  {
    key: "draft",
    color: "var(--color-status-draft)",
    dotClass: "bg-status-draft",
  },
  {
    key: "published",
    color: "var(--color-status-published)",
    dotClass: "bg-status-published",
  },
  {
    key: "closed",
    color: "var(--color-status-closed)",
    dotClass: "bg-status-closed",
  },
] as const;

export const statusCounts = {
  draft: 24,
  published: 89,
  closed: 15,
};

export const summaryStatusCounts = {
  draft: 5,
  published: 35,
  closed: 0,
};

export const Quick_Action: QuickAction[] = [
  {
    key: "create",
    href: "/admin/surveys/create",
    icon: CirclePlus,
    variant: "blue",
    tone: "ds-bg-blue-soft",
  },
  {
    key: "users",
    href: "/admin/users",
    icon: UsersRound,
    variant: "green",
    tone: "ds-bg-green-soft",
  },
  {
    key: "responses",
    href: "/admin/responses",
    icon: MessageSquareText,
    variant: "orange",
    tone: "ds-bg-orange-soft",
  },
  {
    key: "export",
    href: "/admin/reports",
    icon: Download,
    variant: "gray" as never,
    tone: "ds-bg-gray-soft",
  },
];

export const stateItemsData = [
  {
    key: "totalSurveys",
    icon: ClipboardList,
    variant: "teal",
    statsKey: "totalSurveys",
    errorKey: "surveys",
  },
  {
    key: "draftSurveys",
    icon: PencilLine,
    variant: "orange",
    statsKey: "draftSurveys",
    errorKey: "surveys",
  },
  {
    key: "publishedSurveys",
    icon: Send,
    variant: "green",
    statsKey: "publishedSurveys",
    errorKey: "surveys",
  },
  {
    key: "responses",
    icon: ChartLine,
    variant: "purple",
    statsKey: "responses",
    errorKey: "responses",
  },
  {
    key: "totalUsers",
    icon: Users,
    variant: "blue",
    statsKey: "totalUsers",
    errorKey: "users",
  },
] as const;
