import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export const getRoutes = (pathname: string) => [
  {
    icon: HiHome,
    label: "Home",
    active: pathname !== "/search",
    href: "/",
  },
  {
    icon: BiSearch,
    label: "Search",
    active: pathname === "/search",
    href: "/search",
  },
];
