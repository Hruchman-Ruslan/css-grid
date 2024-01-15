import { Suspense } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
