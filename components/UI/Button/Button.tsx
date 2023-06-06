import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButton>(({ className, children, disabled, type = "button", ...props }, ref) => {
  return (
    <button type={type} disabled={disabled} ref={ref} {...props} className={twMerge(styles.button, 'bg-green-500 px-3 py-3 text-black font-bold', className)}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
