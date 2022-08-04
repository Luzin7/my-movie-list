import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoutes from "../utils/protectRoutes";
import * as Path from "../utils/pathNames";

import NotFound from "../components/NotFound";
import Redirect from "./../pages/Redirect";
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
            <Route exact path={Path.MOVIES} element={<Home />} />
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
