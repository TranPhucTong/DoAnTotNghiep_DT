import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import mainRoutes, { adminRoutes, secondRoutes } from "./routes/routes";
import { Helmet } from "react-helmet";
import Layout from "./layout/Layout";
import { useSelector } from "react-redux";
import { routeState } from "./reducers/slices/routeSlice";
import { useEffect, useState } from "react";
import LayoutAdmin from "./layout/layout-admin/LayoutAdmin";
import FakePage from "./pages/fake-page/FakePage";
// import { ClipLoader, RingLoader } from "react-spinners";

function App() {
  const isMainRoute = true;
  const isAdminRoute = true;

  // const [loading, setLoading] = useState(false); // Hiệu ứng Loading
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000)
  // }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code Hire</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      {/* Hiệu ứng Loading */}
      {/* {loading ? (
        <RingLoader
          className="h-full top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          color={"#3b82f6"}
          loading={loading}
          size={100}
        />
      ) : ( */}
      <FakePage />

      <Routes>
        {isMainRoute &&
          mainRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  !route.isLayout ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Page />
                  )
                }
              ></Route>
            );
          })}
        {isAdminRoute &&
          adminRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LayoutAdmin>
                    <Page />
                  </LayoutAdmin>
                }
              ></Route>
            );
          })}
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
