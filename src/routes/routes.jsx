import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import pages from "../pages/pages";
import Footer from "../components/Footer/Footer";
import { lazy, Suspense } from "react";
import "./route.scss";

const HomePage = lazy(() => import("../pages/Home/Home"));
const ShopPage = lazy(() => import("../pages/Shop/Shop"));
const Login = lazy(() => import("../pages/Login/Login"));

const isLoggedIn = true;
const PRIVATE_ROUTES = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/shop",
    component: ShopPage,
  },
];
const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Login,
  },
];

export const AppRoute = () => {
  const Layout = () => {
    return isLoggedIn ? (
      <div className="route_container">
        <div className="content_container">
          <Outlet />
        </div>
        <div className="footer_container">
          <Footer />
        </div>
      </div>
    ) : (
      <div className="route_container">
        <Outlet />
      </div>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {!isLoggedIn
              ? PUBLIC_ROUTES.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <route.component />
                      </Suspense>
                    }
                  ></Route>
                ))
              : PRIVATE_ROUTES.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <route.component />
                      </Suspense>
                    }
                  ></Route>
                ))}
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/home" : "/"} replace />} // Redirect to login page
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
