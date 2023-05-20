import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faEdit,
  faTrash,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRequireTeam,
  updateTeam,
} from "../../reducers/slices/updateTeamSlice";
import teamWorkApi from "../../api/teamWorkApi";
import EmployeeModal from "../modal/EmployeeModal";
import employeeApii from "../../api/employeeApii";

const ListTeam = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamRedux, setSelectedTeamRedux] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [employeeAdd, setEmployeeAdd] = useState("");
  const [dataAxiosEmployeeAdd, setDataAxiosEmployeeAdd] = useState([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const addTeam = () => {
    navigate("/admin/create-team");
  };
  useEffect(() => {
    if (selectedTeamRedux === undefined) {
      setIsFormComplete(false);
    } else {
      setIsFormComplete(true);
    }

    const fetchData = async () => {
      const res = await employeeApii.getIsEmployeeActive(false);
      setDataAxiosEmployeeAdd(res.data);

      fetchData();
    };
    fetchData();

    axios
      .get("https://doan-be-git-dev-danh-lofi.vercel.app/teams")
      .then((response) => {
        setTeams(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedTeamRedux, setIsFormComplete]);

  const handleSelectTeam = () => {
    dispatch(updateRequireTeam(selectedTeamRedux));
    navigate("/admin/update-team");
  };

  const clickDeleteMemberFromTeam = async (idArrMember) => {
    const infoToRemove = {
      teamId: selectedTeamRedux._id,
      members: [idArrMember],
    };
    try {
      const respon = await teamWorkApi.deleteMemberFromTeam(infoToRemove);
      alert("Xóa thành viên thành công !!!");
      const teamToUpdate = teams.find((team) => team.name === selectedTeam); // tìm đối tượng nhóm cần cập nhật
      const updatedMembers = teamToUpdate.members.filter(
        (member) => member._id !== idArrMember
      ); // loại bỏ thành viên cần xóa
      teamToUpdate.members = updatedMembers; // cập nhật lại danh sách thành viên trong đối tượng nhóm
      const updatedTeams = [...teams]; // sao chép mảng cũ
      const index = updatedTeams.findIndex(
        (team) => team._id === selectedTeamRedux._id
      ); // tìm chỉ số của đối tượng nhóm trong mảng
      updatedTeams[index] = teamToUpdate; // cập nhật lại đối tượng nhóm trong mảng
      setTeams(updatedTeams); // cập nhật lại giá trị state của mảng `teams`
    } catch (erorr) {
      alert("Xóa thành viên thất bại, hãy kiểm tra lại");
      console.log("Lỗi :" + erorr);
    }
  };
  const clickAddMemberFromTeam = async () => {
    const infoToAdd = {
      teamId: selectedTeamRedux._id,
      members: [employeeAdd],
    };
    try {
      const respon = await teamWorkApi.addMemberFromTeam(infoToAdd);
      alert("Thêm thành công !!!");
      const teamToUpdate = teams.find((team) => team.name === selectedTeam);
      const newMember = dataAxiosEmployeeAdd.find(
        (member) => member._id === employeeAdd
      );
      teamToUpdate.members.push(newMember); // thêm đối tượng nhân viên mới vào danh sách thành viên của nhóm

      const updatedTeams = [...teams]; // sao chép mảng cũ
      const index = updatedTeams.findIndex(
        (team) => team._id === selectedTeamRedux._id
      ); // tìm chỉ số của đối tượng nhóm trong mảng
      updatedTeams[index] = teamToUpdate; // cập nhật lại đối tượng nhóm trong mảng
      setTeams(updatedTeams); // cập nhật lại giá trị state của mảng `teams`
    } catch (erorr) {
      alert("Thêm thất bại, hãy kiểm tra lại");
      console.log("Lỗi :" + erorr);
    }
  };

  const clickDeleteTeam = async () => {
    const teamDel = teams.find((team) => team.name === selectedTeam);
    const name = teamDel.name;
    try {
      const res = await teamWorkApi.deleteTeam(name);
      if (res.data.active === true) {
        alert("Nhóm đang hoạt động. Không thể xóa !!!");
      } else {
        alert("Xóa thành công");
        setSelectedTeam("");
      }
    } catch (error) {
      console.log("Xóa nhóm không thành công", error);
      alert("Xóa nhóm Không thành công");
    }
    // window.location.reload(false);
  };
  return (
    <div class="py-6 px-8">
      <div class="flex justify-between">
        <h1 class="font-medium text-[1.2rem]">Nhóm : {selectedTeam}</h1>
        <p class="text-[0.9rem] text-gray-500 font-medium">
          <span class="text-black">Dashboard</span> / Team{" "}
        </p>
      </div>
      <div class="mt-16 py-6 px-4 flex items-center bg-white">
        <div class="flex w-[30%] space-x-4">
          <div class="relative w-full flex items-center">
            <select
              className="px-4 py-2 focus-within:border-blue-500 focus-within:text-blue-500 font-bold transition-all duration-200 ease-linear w-full border-solid m-0 rounded-lg outline-none border-[2px] border-gray-300"
              onChange={(event) => {
                const selectedTeamName = event.target.value;
                setSelectedTeam(selectedTeamName);
                const objTeam = teams.find(
                  (team) => team.name === selectedTeamName
                );
                setSelectedTeamRedux(objTeam);
              }}
            >
              <option value="">Select a team</option>
              {teams.map((team) => (
                <option key={team._id} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-6 border-b border-b-gray-200 items-center">
        <div class="flex space-x-9 px-4">
          <p
            class="font-bold py-3 cursor-pointer
           border-b-2 border-blue-600 text-blue-600"
          >
            Nhân viên trong nhóm
          </p>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            onClick={handleOpenModal}
            icon={faUserPlus}
            class={`text-sm w-6 text-green-700 hover:text-green-800 mr-8 cursor-pointer ${
              isFormComplete ? "" : "opacity-50 pointer-events-none"
            }`}
          />
          <FontAwesomeIcon
            onClick={handleSelectTeam}
            icon={faEdit}
            class={`text-sm w-5 text-blue-700 hover:text-blue-800 mr-8 cursor-pointer ${
              isFormComplete ? "" : "opacity-50 pointer-events-none"
            }`}
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={clickDeleteTeam}
            class={`text-xl w-5 text-red-600 hover:text-red-700 mr-8 cursor-pointer ${
              isFormComplete ? "" : "opacity-50 pointer-events-none"
            }`}
          />
          <a
            onClick={addTeam}
            class="py-4 px-6 text-white bg-blue-500 flex rounded-lg font-bold cursor-pointer hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faPlus} class="text-white w-5 mr-2" />
            Tạo team mới
          </a>
        </div>
      </div>
      {selectedTeam && (
        <table class="w-full text-sm mt-5 text-dark-purple transition-all duration-500 ease-in-out">
          <thead>
            <tr className="border-b border-solid border-gray-400">
              <th className=" px-[16px] py-[20px] text-left min-w-[80px] pl-[24px] pr-[8px]">
                <input
                  type="checkbox"
                  className="w-4 h-4 relative top-[2px] cursor-pointer"
                />
              </th>
              <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Họ tên
              </th>
              <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Giới tính
              </th>
              <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Số điện thoại
              </th>
              <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Email
              </th>
              <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Chức vụ
              </th>
              <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Xóa
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-solid border-gray-400">
              <td className=" px-[16px] py-[20px] text-left min-w-[80px] pl-[24px] pr-[8px]">
                <input
                  className="w-4 h-4 relative top-[2px] cursor-pointer"
                  type="checkbox"
                />
              </td>
              <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                {teams.find((team) => team.name === selectedTeam).leader.name}
              </td>
              <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                {teams.find((team) => team.name === selectedTeam).leader.gender}
              </td>
              <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                {teams.find((team) => team.name === selectedTeam).leader.phone}
              </td>
              <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                {teams.find((team) => team.name === selectedTeam).leader.email}
              </td>
              <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                Leader
              </td>
            </tr>
            {teams
              .find((team) => team.name === selectedTeam)
              .members.map((member) => (
                <tr
                  key={member._id}
                  className="border-b border-solid border-gray-400"
                >
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px] pl-[24px] pr-[8px]">
                    <input
                      className="w-4 h-4 relative top-[2px] cursor-pointer"
                      type="checkbox"
                    />
                  </td>
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    {member.name}
                  </td>
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    {member.gender}
                  </td>
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    {member.phone}
                  </td>
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    {member.email}
                  </td>
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    {member.isLeader ? "Leader" : "Member"}
                  </td>
                  <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    <div class="flex items-center gap-2">
                      <button
                        onClick={() => clickDeleteMemberFromTeam(member._id)}
                        class="rounded-full  hover:bg-red-500 hover:text-white cursor-pointer bg-gray-200 p-2 text-gray-500 btn icon secondary sm"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <EmployeeModal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="text-lg text-center font-bold mb-4 text-blue-600">
          Thêm nhân viên mới
        </h2>
        <div class="h-[2.875rem] w-96 relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-500 rounded-lg">
          <select
            className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
            formControlName="leader"
            value={employeeAdd}
            onChange={(e) => setEmployeeAdd(e.target.value)}
          >
            <option value="">Vui lòng chọn</option>
            {dataAxiosEmployeeAdd.map((employee, index) => (
              <option key={index} value={employee._id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={clickAddMemberFromTeam}
            className="mt-8 px-10 py-2 text-white font-bold rounded-lg hover:bg-green-500 transition-colors duration-200 ease-in-out bg-blue-500"
          >
            Thêm
          </button>
        </div>
      </EmployeeModal>
    </div>
  );
};

export default ListTeam;
