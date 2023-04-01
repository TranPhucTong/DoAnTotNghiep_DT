import configRoutes from "../config/configRouter";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PersonalRental from "../pages/freelancer/FreelancerPage";
import RegisterInfo from "../pages/register-info/RegisterInfo";
import Register from "../pages/register/Register";
import FreelancerPage from "../pages/freelancer/FreelancerPage";
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
  {
    path: configRoutes.freelancers,
    component: FreelancerPage,
  },
];

export default mainRoutes;
