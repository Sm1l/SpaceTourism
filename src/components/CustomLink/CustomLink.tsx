import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./CustomLink.module.scss";

interface CustomLinkProps {
  text: string;
  to: string;
  number?: number;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, to, number }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? `${styles.customLink} ${styles.pendingLink}`
          : isActive
          ? `${styles.activeLink} ${styles.customLink}`
          : `${styles.customLink}`
      }
      to={to}
    >
      {number != null && <span className={styles.number}>0{number}</span>}
      {text}
    </NavLink>
  );
};

export { CustomLink };
