import React from "react";

import styles from "./App.module.scss";

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { Layout } from "./components/Layout";
import { AppContainer } from "./components/AppContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="destination" element={<Destination />}>
        <Route path=":planet" element={<Destination />} />
      </Route>
      <Route path="crew" element={<Crew />}>
        <Route path=":member" element={<Crew />} />
      </Route>
      <Route path="technology" element={<Technology />}>
        <Route path=":tech" element={<Technology />} />
      </Route>
    </Route>
  )
);

interface MainProps {}

const App: React.FC<MainProps> = () => {
  return (
    <div className={styles.app}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </div>
  );
};

export { App };
