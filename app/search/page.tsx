import { FC } from "react";

import Header from "@/components/Header/Header";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import SearchContent from "./components/SearchContent";

import getSongsByTitle from "@/actions/getSongsByTitle";

import styles from "./page.module.scss";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search: FC<SearchProps> = async ({ searchParams }) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className={styles.wrapper}>
      <Header className='from-neutral-900'>
        <div className={styles.header}>
          <h1 className={styles.title}>Search</h1>
          <SearchInput />
          <SearchContent songs={songs} />
        </div>
      </Header>
    </div>
  );
};

export default Search;
