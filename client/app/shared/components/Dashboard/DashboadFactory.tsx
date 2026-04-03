import { EditIcon, NotesIcon, SearchMusicIcon } from "../../assets/icons/Icons";
import { HomeIcon } from "lucide-react";
import { Settings, User } from "lucide-react";

export enum ButtonType {
  HOME = "home",
  NAV = "nav",
  SETTING = "setting",
}

interface DashboardItem {
  id: string;
  type: ButtonType;
  label: string;
  icon: React.ReactNode;
  to: string;
}

export const dashboardItems: DashboardItem[] = [
  {
    id: "home",
    type: ButtonType.HOME,
    label: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    id: "tabs",
    type: ButtonType.NAV,
    label: "Tabs",
    icon: <SearchMusicIcon />,
    to: "/tabs",
  },
  {
    id: "editor",
    type: ButtonType.NAV,
    label: "Create Notes",
    icon: <EditIcon />,
    to: "/editor",
  },
  {
    id: "library",
    type: ButtonType.NAV,
    label: "Library",
    icon: <NotesIcon />,
    to: "/library",
  },
  {
    id: "settings",
    type: ButtonType.SETTING,
    label: "Settings",
    icon: <Settings />, // Replace with actual settings icon
    to: "/settings",
  },
  {
    id: "profile",
    type: ButtonType.SETTING,
    label: "Profile",
    icon: <User />, // Replace with actual profile icon
    to: "/profile",
  },
  // Add more items here
];
