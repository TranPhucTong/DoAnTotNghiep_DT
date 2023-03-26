import configRoutes from "../config/configRouter";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
const mainRoutes = [
  {
    path: configRoutes.home,
    component: Home,
  },
  {
    path: configRoutes.login,
    component: Login,
  },
];

export default mainRoutes;
