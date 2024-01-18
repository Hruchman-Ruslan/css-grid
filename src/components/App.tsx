import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";

const MainPage = lazy(() => import("../pages/MainPage"));
const ModuleOnePage = lazy(() => import("../pages/ModuleOnePage"));
const ModuleTwoPage = lazy(() => import("../pages/ModuleTwoPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/module-01" element={<ModuleOnePage />} />
          <Route path="/module-02" element={<ModuleTwoPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
