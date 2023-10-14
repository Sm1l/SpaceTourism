import React from "react";

// import styles from "./Layout.module.scss";
import { Header } from "../Header";
import { Outlet } from "react-router";
import { MainContainer } from "../MainContainer";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export { Layout };
