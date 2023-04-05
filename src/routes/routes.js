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
  {
    path: configRoutes.infoFreelancers,
    component: InfoFreelancer,
  },
  {
    path: configRoutes.homeAdmin,
    component: HomeAdmin,
  },
  {
    path: configRoutes.hireTeam,
    isLayout: false,
    component: HireTeam,
  },
  {
    path: configRoutes.hiretemaSize,
    isLayout: false,
    component: HireTeamSize,
  },
  {
    path: configRoutes.hireteamWorkLength,
    isLayout: false,
    component: HireTeamLength,
  },
  {
    path: configRoutes.hireteamWorkSkill,
    isLayout: false,
    component: HireTeamSkill,
  },
  {
    path: configRoutes.hireteamWorkWage,
    isLayout: false,
    component: HireTeamWage,
  },
  {
    path: configRoutes.hireteamWorkForm,
    isLayout: false,
    component: HireTeamWorkForm,
  },
  {
    path: configRoutes.hireteamWorkStart,
    isLayout: false,
    component: HireTeamWorkStart,
  },
  {
    path: configRoutes.hireteamWorkWeek,
    isLayout: false,
    component: HireTeamWorkWeek,
  },
  {
    path: configRoutes.hireteamCustomInfo,
    isLayout: false,
    component: HireTeamInfo,
  },
  {
    path: configRoutes.adminLogin,
    isLayout: false,
    component: AdminLogin,
  },
];

export const secondRoutes = [
  // {
  //   path: configRoutes.home,
  //   component: Home,
  // },
];

export default mainRoutes;
