"use client";

import { FC } from "react";

import SongItem from "@/components/SongItem/SongItem";

import styles from "./PageContent.module.scss";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className={styles.noavailable}>No songs available.</div>;
  }

  return (
    <div className={styles.songs_grid}>
      {songs.map(song => (
        <SongItem key={song.id} onClick={() => {}} data={song} />
      ))}
    </div>
  );
};

export default PageContent;
