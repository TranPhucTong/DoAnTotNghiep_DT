import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import mainRoutes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {mainRoutes.map((route, index) => {
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
