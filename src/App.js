import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import mainRoutes, { secondRoutes } from "./routes/routes";
import { Helmet } from "react-helmet";
import Layout from "./layout/Layout";
import { useSelector } from "react-redux";
import { routeState } from "./reducers/slices/routeSlice";

function App() {
  const isMainRoute = true;
  console.log(isMainRoute);
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
            })
          : secondRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route key={index} path={route.path} element={<Page />}></Route>
              );
            })}
      </Routes>
    </div>
  );
}

export default App;
