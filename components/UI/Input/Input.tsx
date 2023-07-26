import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./Input.module.scss";

export interface InputPros extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputPros>(({ className, type, disabled, ...props }, ref) => {
  return <input type={type} className={twMerge(styles.input, className)} disabled={disabled} ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
