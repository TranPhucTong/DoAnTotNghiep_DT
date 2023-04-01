import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import mainRoutes from "./routes/routes";
import { Helmet } from "react-helmet";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code Hire</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Routes>
        {mainRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
