"use client";

import { FC } from "react";

import MediaItem from "@/components/MediaItem/MediaItem";

import styles from "./SearchContent.module.scss";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const SearchContent: FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className={styles.noavailable}>No songs found.</div>;
  }

  return (
    <div className={styles.songs_grid}>
      {songs.map(song => (
        <div className={styles.songWrapper} key={song.id}>
          <MediaItem onClick={() => {}} data={song} />
          {/* TODO: add like btn here */}
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
