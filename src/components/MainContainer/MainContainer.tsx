import React from "react";

import styles from "./MainContainer.module.scss";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main className={styles.mainContainer}>{children}</main>;
};

export { MainContainer };
