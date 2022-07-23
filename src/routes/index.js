import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import * as Path from "../utils/pathNames";

import NotFound from "../components/NotFound";
const Home = React.lazy(() => import("../pages/Home"));
const Movie = React.lazy(() => import("../pages/Movie"));

function Index() {
  return (
    <Router>
      <Routes>
        <Route
          index
          exact
          path={Path.HOME}
          element={
            <React.Suspense fallback={<h1>Carregando...</h1>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path={Path.MOVIE}
          element={
            <React.Suspense fallback={<h1>Carregando...</h1>}>
              <Movie />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Index;
