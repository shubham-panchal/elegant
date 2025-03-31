import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { lazy, Suspense, useEffect, useState } from "react";
import "./route.scss";
import { useSelector } from "react-redux";
import Loader from "../shared/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";

const HomePage = lazy(() => import("../pages/Home/Home"));
const ShopPage = lazy(() => import("../pages/Shop/Shop"));
const MyAccount = lazy(() => import("../pages/MyAccount/MyAccount"));
const Login = lazy(() => import("../pages/Login/Login"));

const PRIVATE_ROUTES = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/shop",
    component: ShopPage,
  },
  {
    path: "/account",
    component: MyAccount,
  },
];
const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Login,
  },
];
const Layout = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <div className="route_container">
      <div className="content_container">
        <Navbar />
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
export const AppRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = useSelector((store) => store?.auth);

  useEffect(() => {
    const data = localStorage.getItem("isAuth");
    if (data === null) {
      setIsLoggedIn(auth?.isAuth);
    } else {
      setIsLoggedIn(data === "false" ? false : true);
    }
  }, [auth]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout isLoggedIn={isLoggedIn} />}>
            {!isLoggedIn
              ? PUBLIC_ROUTES.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Suspense fallback={<Loader />}>
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
                      <Suspense fallback={<Loader />}>
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
