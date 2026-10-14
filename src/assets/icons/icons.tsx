/**
 * icons.tsx — central registry for all icons used in the project.
 *
 * How to use:
 * 1. Import icons from lucide-react / @tabler/icons-react / @iconify/react below.
 * 2. Re-export them from this file so every icon lives in one place.
 * 3. Import icons anywhere in the app from "@/assets/icons/icons".
 *
 * Example:
 *   import { Search, Trash2 } from "lucide-react";
 *   export { Search, Trash2 };
 */
import type { ComponentProps } from "react";
import { Icon } from "@iconify/react";
import {
  Moon,
  Sun,
  ListMinus,
  X,
  Eye,
  Menu,
  EyeOff,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  User,
  Mail,
  LayoutDashboard,
  Check,
  CalendarDays,
  Clock3,
  FileText,
  Send,
  Lock,
  LoaderCircle,
  ChartNoAxesCombined,
  Users,
  CircleHelp,
  Plus,
  Download,
  PieChart,
  Bell,
  BarChart3,
  ClipboardList,
  SquarePlus,
  FolderOpen,
  Upload,
  Trash2,
  Phone,
  Globe,
  Languages,
  Pencil,
  Link,
  Info,
  Search,
  Image as ImageIcon,
  PanelLeftOpen,
  MoreVertical,
  Link2,
  Share2,
  Settings,
  FileSpreadsheet,
  Copy,
  Funnel,
  SquareUserRound,
  UserRoundCog,
} from "lucide-react";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";

type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;
const FaFacebookF = (props: IconProps) => <Icon icon="fa-brands:facebook-f" {...props} />;
const FaLinkedinIn = (props: IconProps) => <Icon icon="mdi:linkedin" {...props} />;
const FaWhatsapp = (props: IconProps) => <Icon icon="fa-brands:whatsapp" {...props} />;
const FaTwitter = (props: IconProps) => <Icon icon="fa-brands:twitter" {...props} />;
const FaGithub = (props: IconProps) => <Icon icon="logos:github-icon" {...props} />;
const FcGoogle = (props: IconProps) => <Icon icon="flat-color-icons:google" {...props} />;

export {
  Sun,
  Moon,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  ListMinus,
  X,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  User,
  Mail,
  LayoutDashboard,
  Check,
  CalendarDays,
  Clock3,
  FileText,
  Send,
  FaGithub,
  FcGoogle,
  Lock,
  LoaderCircle,
  ChartNoAxesCombined,
  Users,
  CircleHelp,
  Download,
  Plus,
  PieChart,
  Bell,
  BarChart3,
  ClipboardList,
  SquarePlus,
  FolderOpen,
  Upload,
  Trash2,
  Phone,
  Globe,
  Languages,
  Pencil,
  Link,
  Info,
  ImageIcon,
  Search,
  PanelLeftOpen,
  MoreVertical,
  Link2,
  Share2,
  Settings,
  FileSpreadsheet,
  Copy,
  Funnel,
  Menu,
  IconLayoutSidebarLeftCollapse,
  SquareUserRound,
  UserRoundCog,
};
