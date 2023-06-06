"use client";

import { FC, useCallback } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import styles from "./Library.module.scss";

const Library: FC = () => {
  const onClickHandler = useCallback(() => {}, []);

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
