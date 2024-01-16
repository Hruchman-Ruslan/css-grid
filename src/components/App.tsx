import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";

import "./App.css";

const MainPage = lazy(() => import("../pages/MainPage"));
const MoDuleOnePage = lazy(() => import("../pages/ModuleOnePage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/module-01" element={<MoDuleOnePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
