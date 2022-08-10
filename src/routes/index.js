import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  ProtectDefaultRoutes,
  ProtectAdminRoutes,
} from "../utils/protectRoutes";
import * as Path from "../utils/pathNames";

import NotFound from "../components/NotFound";
import Loading from "./../components/Loading";

const Redirect = lazy(() => import("../pages/Redirect"));
const Register = lazy(() => import("../pages/Register"));
const DefaultHome = lazy(() => import("../pages/DefaultHome"));
const Movie = lazy(() => import("../pages/Movie"));
const AdminHome = lazy(() => import("../pages/AdminHome"));

function Index() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<ProtectDefaultRoutes />}>
            <Route exact path={Path.MOVIES} element={<DefaultHome />} />
          </Route>
          <Route element={<ProtectAdminRoutes />}>
            <Route exact path={Path.ADMIN} element={<AdminHome />} />
          </Route>
          <Route exact path={Path.HOME} element={<Redirect />} />
          <Route exact path={Path.REGISTER} element={<Register />} />
          <Route exact path={Path.MOVIE} element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Index;
