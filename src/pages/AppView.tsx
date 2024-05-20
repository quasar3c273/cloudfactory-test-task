import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../consts/routes";
import React from "react";
import {Header} from "../components/header/Header";
import {Paths} from "../consts/path";
import {NotFoundPage} from "./404/NotFoundPage";

export const AppView = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={Paths.HOME} element={<Navigate to="/about" />} />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path={Paths.ANOTHER} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
