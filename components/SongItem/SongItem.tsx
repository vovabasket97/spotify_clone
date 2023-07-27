import { FC } from "react";
import { twMerge } from "tailwind-merge";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";

import PlayButton from "../PlayButton";

import styles from "./SongItem.module.scss";
import { Song } from "@/types";
import { DEFAULT_IMG } from "@/constants";

interface SongItemProps {
  onClick: (id: string) => void;
  data: Song;
}

const SongItem: FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div className={twMerge(styles.card, "group")} onClick={onClick.bind(null, data.id)}>
      <div className={styles.image}>
        <Image className='object-cover' src={imagePath || DEFAULT_IMG} fill alt={data.title} />
      </div>
      <div className={styles.content}>
        <h3>{data.title}</h3>
        <p>By {data.author}</p>
      </div>
      <div className={styles.play}>
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
