import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./Box.module.scss";

interface IBox extends PropsWithChildren {
  className?: string;
}

const Box: FC<IBox> = ({ className = "", children }) => {
  return <div className={twMerge(styles.box, className)}>{children}</div>;
};

export default Box;
