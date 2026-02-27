declare module 'lucide-react-native' {
  import type { ComponentType } from 'react';

  type LucideProps = {
    className?: string;
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    [key: string]: any;
  };

  type LucideIcon = ComponentType<LucideProps>;

  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Check: LucideIcon;
  export const X: LucideIcon;
  export const Circle: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const Search: LucideIcon;
  export const Loader2: LucideIcon;
  export const PanelLeft: LucideIcon;
  export const ChevronsUpDown: LucideIcon;
  export const Calendar: LucideIcon;
  export const Clock: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const Info: LucideIcon;
  export const Plus: LucideIcon;
  export const Minus: LucideIcon;
  export const Trash2: LucideIcon;
  export const Edit: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Upload: LucideIcon;
  export const Download: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Copy: LucideIcon;
  export const Settings: LucideIcon;
  export const User: LucideIcon;
  export const Users: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const MapPin: LucideIcon;
  export const Home: LucideIcon;
  export const Menu: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Filter: LucideIcon;
  export const SortAsc: LucideIcon;
  export const SortDesc: LucideIcon;
  export const FileText: LucideIcon;
  export const Folder: LucideIcon;
  export const Image: LucideIcon;
  export const Star: LucideIcon;
  export const Heart: LucideIcon;
  export const Bell: LucideIcon;
  export const Lock: LucideIcon;
  export const Unlock: LucideIcon;
  export const LogOut: LucideIcon;
  export const LogIn: LucideIcon;
}
