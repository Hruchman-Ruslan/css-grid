import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "../Project/components/Header/Header";
import { Footer } from "../Project/components/Footer/Footer";
import { useHooks } from "../../helpers";

import styles from "../Project/components/Main/Main.module.css";

export const Layout = () => {
  const { location } = useHooks();

  return (
    <>
      {location.pathname === "/project" ? (
        <>
          <Header />
          <main className={styles.main}>
            <Suspense fallback={"Loading..."}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </>
      ) : (
        <main>
          <Suspense fallback={"Loading..."}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};
