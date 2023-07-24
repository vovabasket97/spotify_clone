"use client";

import React, { FC, PropsWithChildren, useMemo } from "react";
import { usePathname } from "next/navigation";
import { getRoutes } from "@/configs/foutes";

import Box from "../UI/Box/Box";
import SidebarItem from "./SidebarItem";

import styles from "./Sidebar.module.scss";
import Library from "../Library/Library";

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(() => getRoutes(pathname), [pathname]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='overflow-y-auto'>
          <Library />
        </Box>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
