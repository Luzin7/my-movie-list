import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import * as Path from "../utils/pathNames";
import ProtectRoutes from "../utils/protectRoutes";


import NotFound from "../components/NotFound";
import Loading from "./../components/Loading";
const Register = lazy(() => import("../pages/Register"));
const Home = lazy(() => import("../pages/Home"));
const Movie = lazy(() => import("../pages/Movie"));

function Index() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<ProtectRoutes />}>
            <Route exact path={Path.HOME} element={<Home />} />
            <Route exact path={Path.MOVIE} element={<Movie />} />
          </Route>
          <Route index exact path={Path.REGISTER} element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Index;
