import React from "react";

import styles from "./DestinationNav.module.scss";
import { CustomLink } from "../CustomLink";

interface DestinationNavProps {}

const DestinationNav: React.FC<DestinationNavProps> = () => {
  return (
    <nav className={styles.destinationNav}>
      <CustomLink text="moon" to="moon" />
      <CustomLink text="mars" to="mars" />
      <CustomLink text="europa" to="europa" />
      <CustomLink text="titan" to="titan" />
    </nav>
  );
};

export { DestinationNav };
