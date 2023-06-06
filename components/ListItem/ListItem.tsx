"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { FaPlay } from "react-icons/fa";

import styles from "./ListItem.module.scss";
import { twMerge } from "tailwind-merge";

interface IListItem {
  image: string;
  name: string;
  href: string;
}

const ListItem: FC<IListItem> = ({ href, image, name }) => {
  const router = useRouter();

  const onClickHandler = useCallback(() => {
    router.push(href);
  }, [router, href]);

  return (
    <button className={twMerge(styles.listItem, "group")}>
      <div className={styles.image}>
        <Image src={image} className='object-cover' fill alt='image' />
      </div>
      <p>{name}</p>
      <div className={twMerge(styles.play, 'group-hover:opacity-100')}>
        <FaPlay className='text-black' />
      </div>
    </button>
  );
};

export default ListItem;
