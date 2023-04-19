import { mainAxios } from "./axiosConfig";

const url = "employees";
const employeeApii = {
    createEmployee: (employee)=>{
        return mainAxios.post(`${url}/register`,{employee});
    },
    getEmplees: ()=>{
        return mainAxios.get(`${url}`);
    }
}
export default employeeApii;