import React from "react";
import { slide as Burger } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import styles from "./BurgerContainer.module.scss";
import "./burger.scss";

interface BurgerContainerProps {}

const BurgerContainer: React.FC<BurgerContainerProps> = () => {
  return (
    <div className={styles.burgerContainer}>
      <Burger right width={"254px"}>
        <NavLink className={styles.link} to="/">
          <span className={styles.span}>01</span>
          Home
        </NavLink>
        <NavLink className={styles.link} to="destination">
          <span className={styles.span}>02</span>
          Crew
        </NavLink>
        <NavLink className={styles.link} to="crew">
          <span className={styles.span}>03</span>Destination
        </NavLink>
        <NavLink className={styles.link} to="technology">
          <span className={styles.span}>04</span>Technology
        </NavLink>
      </Burger>
    </div>
  );
};

export { BurgerContainer };
