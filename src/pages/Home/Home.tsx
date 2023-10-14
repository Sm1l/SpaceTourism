import React from "react";

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.textContainer}>
          <h5>So, you want to travel to</h5>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="destination" className={styles.button}>
            explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
