import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import mainRoutes, { employeeRoutes, secondRoutes } from "./routes/routes";
import { Helmet } from "react-helmet";
import Layout from "./layout/Layout";
import { useSelector } from "react-redux";
import { routeState } from "./reducers/slices/routeSlice";
import { useEffect, useState } from "react";
import LayoutEmployee from "./layout/layout-employee/LayoutEmployee";
import { ToastContainer } from "react-toastify";

function App() {
  const isMainRoute = true;
  const isEmplopyeeRoute = true;
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code Hire</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Routes>
        {isMainRoute
          ? mainRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.isLayout ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <Page />
                    )
                  }
                ></Route>
              );
            })
          : secondRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route key={index} path={route.path} element={<Page />}></Route>
              );
            })}

        {isEmplopyeeRoute &&
          employeeRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LayoutEmployee>
                    <Page />
                  </LayoutEmployee>
                }
              ></Route>
            );
          })}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
