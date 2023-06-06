import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

import styles from "./Sidebar.module.scss";

interface ISidebarItem {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<ISidebarItem> = ({ href, icon: Icon, label, active }) => {
  return (
    <Link href={href} className={twMerge(styles.sidebarItem, active && "text-white")}>
      <Icon size={26} />
      <p>{label}</p>
    </Link>
  );
};

export default SidebarItem;
