import configRoutes from "../config/configRouter";
import HireTeam from "../pages/hire-team/HireTeam";
import HireTeamInfo from "../pages/hire-team/HireTeam-Info";
import HireTeamLength from "../pages/hire-team/HireTeam-Length";
import HireTeamSize from "../pages/hire-team/HireTeam-Size";
import HireTeamSkill from "../pages/hire-team/HireTeam-Skill";
import HireTeamWage from "../pages/hire-team/HireTeam-Wage";
import HireTeamWorkForm from "../pages/hire-team/HireTeam-WorkForm";
import HireTeamWorkStart from "../pages/hire-team/HireTeam-WorkStart";
import HireTeamWorkWeek from "../pages/hire-team/HireTeam-WorkWeek";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PersonalRental from "../pages/freelancer/FreelancerPage";
import RegisterInfo from "../pages/register-info/RegisterInfo";
import Register from "../pages/register/Register";
import FreelancerPage from "../pages/freelancer/FreelancerPage";
import InfoFreelancer from "../pages/info-freelancer/InfoFreelancer";
import HomeAdmin from "../pages/home-admin/HomeAdmin";
import AdminLogin from "../pages/admin-login/AdminLogin";
const mainRoutes = [
  {
    path: configRoutes.home,
    component: Home,
    isLayout: true,
    layout: "customer",
  },
  {
    path: configRoutes.login,
    component: Login,
    isLayout: true,
    layout: "customer",
  },
  {
    path: configRoutes.register,
    component: Register,
    isLayout: true,
    layout: "customer",
  },
  {
    path: configRoutes.registerInfo,
    component: RegisterInfo,
    isLayout: true,
    layout: "customer",
  },
  {
    path: configRoutes.freelancers,
    component: FreelancerPage,
    isLayout: false,
    layout: "customer",
  },
  {
    path: configRoutes.infoFreelancers,
    component: InfoFreelancer,
    isLayout: false,
    layout: "customer",
  },
  {
    path: configRoutes.homeAdmin,
    component: HomeAdmin,
    layout: "customer",
  },
  {
    path: configRoutes.hireTeam,
    isLayout: false,
    component: HireTeam,
    layout: "customer",
  },
  {
    path: configRoutes.hiretemaSize,
    isLayout: false,
    component: HireTeamSize,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamWorkLength,
    isLayout: false,
    component: HireTeamLength,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamWorkSkill,
    isLayout: false,
    component: HireTeamSkill,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamWorkWage,
    isLayout: false,
    component: HireTeamWage,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamWorkForm,
    isLayout: false,
    component: HireTeamWorkForm,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamWorkStart,
    isLayout: false,
    component: HireTeamWorkStart,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamWorkWeek,
    isLayout: false,
    component: HireTeamWorkWeek,
    layout: "customer",
  },
  {
    path: configRoutes.hireteamCustomInfo,
    isLayout: false,
    component: HireTeamInfo,
    layout: "customer",
  },
  {
    path: configRoutes.adminLogin,
    isLayout: false,
    component: AdminLogin,
    layout: "admin",
  },
  {
    path: configRoutes.adminLogin,
    isLayout: false,
    component: HomeAdmin,
    layout: "admin",
  },
];

export const secondRoutes = [
  // {
  //   path: configRoutes.home,
  //   component: Home,
  // },
];

export default mainRoutes;
