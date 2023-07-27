"use client";

import { FC, useCallback } from "react";
import useLoadImage from "@/hooks/useLoadImage";

import Image from "next/image";

import styles from "./MediaItem.module.scss";
import { Song } from "@/types";
import { DEFAULT_IMG } from "@/constants";

interface MediaItem {
  onClick: (id: string) => void;
  data: Song;
}

const MediaItem: FC<MediaItem> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  const onClickHandler = useCallback(() => {
    if (onClick) {
      return onClick(data.id);
    }

    // TODO: default turn on player
  }, [onClick, data]);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image alt={data.title} src={imagePath || DEFAULT_IMG} fill className='object-cover' />
      </div>
      <div className={styles.content}>
        <h3>{data.title}</h3>
        <p>{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
