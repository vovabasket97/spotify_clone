"use client";

import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "../UI/Button/Button";

import styles from "./Header.module.scss";

interface IHeader extends PropsWithChildren {
  className?: string;
}

const Header: FC<IHeader> = ({ children, className = "" }) => {
  const router = useRouter();
  const onLogoutHandler = useCallback(() => {}, []);
  const onLogInHandler = useCallback(() => {}, []);
  const onSignUpHandler = useCallback(() => {}, []);

  return (
    <div className={twMerge(styles.header, className)}>
      <div className={styles.wrapper}>
        <div className={styles.switcher}>
          <button onClick={() => router.back()}>
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button onClick={() => router.forward()}>
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className={styles.sideBtns}>
          <button className='bg-white p-2'>
            <HiHome className='text-black' size={20} />
          </button>
          <button className='bg-white p-2'>
            <BiSearch className='text-black' size={20} />
          </button>
        </div>
        <div className='flex justify-center items-center gap-x-4'>
          <>
            <div>
              <Button onClick={onSignUpHandler} className='bg-transparent text-neutral-300 font-medium'>
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={onLogInHandler} className='bg-white px-6 py-2'>
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
