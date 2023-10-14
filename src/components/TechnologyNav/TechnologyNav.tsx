import React from "react";

import styles from "./TechnologyNav.module.scss";
import { NavLink } from "react-router-dom";

interface TechnologyNavProps {}

const TechnologyNav: React.FC<TechnologyNavProps> = () => {
  return (
    <nav className={styles.technologyNav}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="launchvehicle"
      >
        1
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="spaceport"
      >
        2
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="spacecapsule"
      >
        3
      </NavLink>
    </nav>
  );
};

export { TechnologyNav };
