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
  {
    path: configRoutes.hireTeam,
    component: HireTeam,
  },
  {
    path: configRoutes.hiretemaSize,
    component: HireTeamSize,
  },
  {
    path: configRoutes.hireteamWorkLength,
    component: HireTeamLength,
  },
  {
    path: configRoutes.hireteamWorkSkill,
    component: HireTeamSkill,
  },
  {
    path: configRoutes.hireteamWorkWage,
    component: HireTeamWage,
  },
  {
    path: configRoutes.hireteamWorkForm,
    component: HireTeamWorkForm,
  },
  {
    path: configRoutes.hireteamWorkStart,
    component: HireTeamWorkStart,
  },
  {
    path: configRoutes.hireteamWorkWeek,
    component: HireTeamWorkWeek,
  },
  {
    path: configRoutes.hireteamCustomInfo,
    component: HireTeamInfo,
  },
];

export default mainRoutes;
