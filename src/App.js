import React, { lazy, Suspense } from "react";

import Loading from "./components/Loading";
const Routes = lazy(() => import("./routes/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
