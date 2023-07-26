"use client";

import { FC, useCallback } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";

import styles from "./Library.module.scss";

const Library: FC = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClickHandler = useCallback(() => {
    if (!user) return authModal.onOpen();

    // TODO: check for subscription

    uploadModal.onOpen();
  }, [user]);

  return (
    <div className={styles.library}>
      <div className={styles.library__wrapper}>
        <div className={styles.header}>
          <TbPlaylist size={26} className='text-neutral-400' />
          <p>Your Library</p>
        </div>
        <AiOutlinePlus size={20} className='text-neutral-400 cursor-pointer hover:text-white transition' onClick={onClickHandler} />
      </div>
      <div className={styles.list}>List of songs!</div>
    </div>
  );
};

export default Library;
