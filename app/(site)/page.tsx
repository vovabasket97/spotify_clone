import Header from "@/components/Header/Header";
import ListItem from "@/components/ListItem/ListItem";
import PageContent from "./components/PageContent";

import getSongs from "@/actions/getSongs";

import styles from "./page.module.scss";
import { DEFAULT_IMG } from "@/constants";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  console.log(songs);

  return (
    <div className={styles.mainContent}>
      <Header className="from-emerald-800">
        <div className={styles.welcome}>
          <h2>Welcome back</h2>
        </div>
        <div className={styles.welcome__grid}>
          <ListItem href='liked' image={DEFAULT_IMG} name='Liked songs' />
        </div>
      </Header>
      <div className={styles.newest}>
        <div className={styles.newest__heading}>
          <h2>Newest songs</h2>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
