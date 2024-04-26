import { Routes, Route, useLocation } from "react-router-dom";

import { Layout } from "../layout/layout";
import RedirectComponent from "../components/redirectComponents";
import PrivateRoute from "./auth";
import { Home } from "../pages/home/home";

function AppRoutes(): JSX.Element {
  const location = useLocation();
  const paths = location.pathname;

  return (
    <>
      {paths.includes("/login") ? (
        <Routes></Routes>
      ) : (
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<RedirectComponent />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Layout>
        </>
      )}
    </>
  );
}

export { AppRoutes };
