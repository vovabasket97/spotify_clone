"use client";

import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import useAuthModal from "@/hooks/useAuthModal";
import { toast } from "react-hot-toast";

import Button from "../UI/Button/Button";

import styles from "./Header.module.scss";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";

interface IHeader extends PropsWithChildren {
  className?: string;
}

const Header: FC<IHeader> = ({ children, className = "" }) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = useCallback(async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO: reset any playing songs
    router.refresh();

    error ? toast.error(error.message) : toast.success("Logged out!");
  }, [router, supabaseClient.auth]);

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
          {user ? (
            <div className='flex items-center gap-4'>
              <Button onClick={handleLogout} className='bg-white px-6 py-2'>
                Logout
              </Button>
              <Button onClick={() => router.push("/account")} className='bg-white'>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button onClick={onOpen} className='bg-transparent text-neutral-300 font-medium'>
                  Sign up
                </Button>
              </div>
              <div>
                <Button onClick={onOpen} className='bg-white px-6 py-2'>
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
