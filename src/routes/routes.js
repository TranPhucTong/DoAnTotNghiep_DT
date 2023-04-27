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
import ListEmployees from "../components/admin/ListEmployees";
import CreatEmployee from "../components/admin/CreatEmployee";
import CreateTeam from "../components/admin/CreateTeam";
import ListTeam from "../components/admin/ListTeam";
import UpdateEmployees from "../components/admin/UpdateEmployees";
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
  // {
  //   path: configRoutes.homeAdmin,
  //   isLayout: true,
  //   component: HomeAdmin,
  // },
  {
    path: configRoutes.hireTeam,
    isLayout: true,
    component: HireTeam,
  },
  {
    path: configRoutes.hiretemaSize,
    isLayout: true,
    component: HireTeamSize,
  },
  {
    path: configRoutes.hireteamWorkLength,
    isLayout: true,
    component: HireTeamLength,
  },
  {
    path: configRoutes.hireteamWorkSkill,
    isLayout: true,
    component: HireTeamSkill,
  },
  {
    path: configRoutes.hireteamWorkWage,
    isLayout: true,
    component: HireTeamWage,
  },
  {
    path: configRoutes.hireteamWorkForm,
    isLayout: true,
    component: HireTeamWorkForm,
  },
  {
    path: configRoutes.hireteamWorkStart,
    isLayout: true,
    component: HireTeamWorkStart,
  },
  {
    path: configRoutes.hireteamWorkWeek,
    isLayout: true,
    component: HireTeamWorkWeek,
  },
  {
    path: configRoutes.hireteamCustomInfo,
    isLayout: true,
    component: HireTeamInfo,
  },
  // {
  //   path: configRoutes.homeAdmin,
  //   isLayout: true,
  //   component: HomeAdmin,
  // },
];

export const adminRoutes = [
  {
    path: configRoutes.adminListEmployees,
    component: ListEmployees,
  },
  {
    path: configRoutes.adminCreateEmployees,
    component: CreatEmployee,
  },
  {
    path: configRoutes.adminCreateTeam,
    component: CreateTeam,
  },
  {
    path: configRoutes.adminListTeam,
    component: ListTeam,
  },
  {
    path: configRoutes.homeAdmin,
    component: HomeAdmin,
  },
  {
    path: configRoutes.adminUpdateEmployees,
    component: UpdateEmployees,
  },
];

export const threeRoutes = [
  
];

export default mainRoutes;
