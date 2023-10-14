import React from "react";

import styles from "./AppContainer.module.scss";

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <div className={styles.appContainer}>{children}</div>;
};

export { AppContainer };
