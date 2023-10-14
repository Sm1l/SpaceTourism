import React from "react";

import styles from "./CrewNav.module.scss";
import { NavLink } from "react-router-dom";

interface CrewNavProps {}

const CrewNav: React.FC<CrewNavProps> = () => {
  return (
    <nav className={styles.crewNav}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="douglashurley"
      ></NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="markshuttleworth"
      ></NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="victorglover"
      ></NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`)}
        to="anoushehansari"
      ></NavLink>
    </nav>
  );
};

export { CrewNav };
