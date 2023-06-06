import { FC } from "react";

import Header from "../Header/Header";
import ListItem from "../ListItem/ListItem";

import styles from "./MainContent.module.scss";

const MainContent: FC = () => {
  return (
    <div className={styles.mainContent}>
      <Header>
        <div className={styles.welcome}>
          <h2>Welcome back</h2>
        </div>
        <div className={styles.welcome__grid}>
          <ListItem href='liked' image='/images/liked.png' name='Liked songs' />
        </div>
      </Header>
      <div className={styles.newest}>
        <div className={styles.newest__heading}>
          <h2>Newest songs</h2>
        </div>
        <div>
          Lists of songs!
        </div>
      </div>
    </div>
  );
};

export default MainContent;
