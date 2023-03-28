import configRoutes from "../config/configRouter";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterInfo from "../pages/register-info/RegisterInfo";
import Register from "../pages/register/Register";
const mainRoutes = [
  {
    path: configRoutes.home,
    component: Home,
  },
  {
    path: configRoutes.login,
    component: Login,
  },
  {
    path: configRoutes.register,
    component: Register,
  },
  {
    path: configRoutes.registerInfo,
    component: RegisterInfo,
  },
];

export default mainRoutes;
