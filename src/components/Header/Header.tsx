import React from "react";

import styles from "./Header.module.scss";
import { CustomLink } from "../CustomLink";
import star from "../../assets/images/shared/logo.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <img className={styles.star} src={star} alt="star" />
      <div className={styles.line}></div>
      <nav className={styles.navigation}>
        <CustomLink text="Home" number={0} to="/" />
        <CustomLink text="Destination" number={1} to="destination" />
        <CustomLink text="Crew" number={2} to="crew" />
        <CustomLink text="Technology" number={3} to="technology" />
      </nav>
    </header>
  );
};

export { Header };
