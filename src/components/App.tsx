import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";

import "./App.css";

const MainPage = lazy(() => import("../pages/MainPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/main" />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
