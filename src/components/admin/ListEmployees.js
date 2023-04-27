import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faAngleRight,
  faSearch,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// import employeeApi from "../../api/employeeApi";
import employeeApii from "../../api/employeeApii";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRequireEmployee } from "../../reducers/slices/updateEmployeeSlice";

const ListEmployees = () => {
  const [data, setData] = useState([]);
  const [dataFree, setDataFree] = useState([]);
  const [dataAxios, setDataAxios] = useState([]);
  const [tempDataAxios, setTempDataAxios] = useState([]);
  const [type, setType] = useState("");
  const [listFree, setListFree] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchNum, setSearchNum] = useState("");
  const [isNotFould, setIsNotFould] = useState(false);
  const [isTranPage, setIsTranPage] = useState(true);

  const handleSelectEmployee = (employee) => {
    dispatch(updateRequireEmployee(employee));
  };

  useEffect(() => {
    const fetchData = async () => {
      // axios
      const res = await employeeApii.getEmplees();
      setDataAxios(res.data);
      setTempDataAxios(res.data);

      // employee
      const result = await axios.get(
        "https://6433e7e61c5ed06c9589d5e5.mockapi.io/api/employee/Employee"
      );
      setData(result.data);

      // freelancer
      const resultFree = await axios.get(
        "https://6433e7e61c5ed06c9589d5e5.mockapi.io/api/employee/Freelancer"
      );
      setDataFree(resultFree.data);
    };
    fetchData();
    if (type === "freelancer") {
      setListFree(true);
    } else {
      setListFree(false);
    }
  }, [type]);

  const clickDeleteEmployee = async (phone) => {
    const respon = await employeeApii.deleteEmloyee(phone);
    setDataAxios(dataAxios.filter((employee) => employee.phone !== phone));
    console.log(respon);
  };
  const clickSearchEmployee = async (phone) => {
    if (!phone) {
      setDataAxios(tempDataAxios);
      setIsNotFould(false);
      setIsTranPage(true);
    } else {
      const res = await employeeApii.searchEmployee(phone);
      if (res.data === null) {
        setDataAxios(tempDataAxios);
        // alert("không tìm thây");
        setIsNotFould(true);
        setIsTranPage(false);
      } else {
        setDataAxios([res.data]);
        setIsNotFould(false);
        setIsTranPage(true);
      }
    }
  };

  const dataPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1);

  const totalPages = Math.ceil(dataAxios.length / dataPerPage);
  const totalPagesFree = Math.ceil(dataFree.length / dataPerPage);

  const firstDataIndex = (currentPage - 1) * dataPerPage;
  const lastDataIndex = firstDataIndex + dataPerPage;

  const firstDataIndex1 = (currentPage1 - 1) * dataPerPage;
  const lastDataIndex1 = firstDataIndex1 + dataPerPage;

  // const currentData = data.slice(firstDataIndex, lastDataIndex);
  const currentDataFree = dataFree.slice(firstDataIndex1, lastDataIndex1);
  const currentDataAxios = dataAxios.slice(firstDataIndex, lastDataIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePageChange1 = (pageNumber) => {
    setCurrentPage1(pageNumber);
  };
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="p-7 h-full w-full">
      {/* Content Header  */}
      <div class="flex flex-col items-start justify-between gap-4 select-none md:flex-row md:items-center md:gap-0">
        <h4 class="text-xl font-medium md:text-2xl">Employees Management</h4>
        <div class="relative w-full md:w-[18.75rem]">
          <span
            onClick={() => clickSearchEmployee(searchNum)}
            class="absolute cursor-pointer bg-blue-500 p-3 hover:bg-blue-700 rounded-md text-white top-1/2 left-0 -translate-y-1/2 text-[#11111152]"
          >
            <FontAwesomeIcon className="font-extrabold" icon={faSearch} />
          </span>

          <input
            type="text"
            value={searchNum}
            onChange={(e) => setSearchNum(e.target.value)}
            placeholder="Search by phone"
            class="w-full pl-[3.25rem] focus:border focus:border-blue-500 transition-all ease-in-out duration-300 pr-4 py-[0.688rem] outline-none border border-[#DDDDDD] border-solid rounded-md text-dark"
          />
        </div>
      </div>

      {/* Content  */}
      <div class="mt-6 rounded-lg bg-white shadow-xl">
        <div class="flex flex-col items-start justify-between gap-4 p-6 border-b border-solid md:flex-row md:items-center md:gap-0 border-secondary">
          <div class="text-sm md:text-base">
            Show
            <span class="">
              <select
                name=""
                id="num-per-page"
                class="px-2 py-1 border border-solid rounded-lg outline-none border-secondary"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </span>
            entries
          </div>

          <div class="flex items-center justify-between gap-4">
            {/* <button class="btn icon rounded-lg bg-blue-500 text-white py-2 px-3">
              <FontAwesomeIcon icon={faList} />
            </button>

            <button class="btn icon rounded-lg bg-gray-200 text-gray-600 py-2 px-3">
              <FontAwesomeIcon icon={faBorderAll} />
            </button>

            <button
              class="rounded-lg btn icon primary bg-blue-500 text-white py-2 px-3"
              routerLink="create"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
            <select
              className="border-[2px] bg-white rounded-lg  p-2 w-full"
              id="role"
              name="role"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              required
            >
              <option value="employee">Danh sách nhân viên đội ngũ</option>
              <option value="freelancer">Danh sách nhân viên tự do</option>
            </select>
          </div>
        </div>
        <div class="overflow-x-auto">
          {listFree ? (
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
                    ID
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Họ tên
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Số điện thoại
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Email
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Địa chỉ
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Mảng làm việc
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Sửa / Xóa
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDataFree.map((dt, index) => (
                  <tr
                    className="border-b border-solid border-gray-400"
                    key={index}
                  >
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px] pl-[24px] pr-[8px]">
                      <input
                        className="w-4 h-4 relative top-[2px] cursor-pointer"
                        type="checkbox"
                      />
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      {dt.id}
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      <div class="flex items-center gap-2 cursor-pointer w-max group">
                        {/* <img
                        class="w-[2.5rem] h-[2.5rem] rounded-full"
                        src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dGFHlbHly-YAX97zuJY&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBxVFE5RBIWR0o5M2DM6dpzxwxYybTsRZI1r2vzOsr6YQ&oe=64385EFD"
                        alt=""
                      /> */}
                        <span class="group-hover:text-active">{dt.name}</span>
                      </div>
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      {dt.phone}
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      {dt.email}
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      <span class="w-max inline-block">{dt.address}</span>
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      <span class="w-max inline-block">{dt.field}</span>
                    </td>
                    <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      <div class="flex items-center gap-2">
                        <a
                          class="btn icon hover:bg-blue-500 hover:text-white cursor-pointer bg-gray-200 p-2 text-gray-500 sm rounded-full"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </a>
                        <button class="rounded-full  hover:bg-red-500 hover:text-white cursor-pointer bg-gray-200 p-2 text-gray-500 btn icon secondary sm">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table class="w-full text-sm mt-5 text-dark-purple transition-all duration-500 ease-in-out">
              <thead>
                <tr className="border-b border-solid border-gray-400">
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px] pl-[24px] pr-[8px]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 relative top-[2px] cursor-pointer"
                    />
                  </th>
                  {/* <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    ID
                  </th> */}
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Họ tên
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Giới tính
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Ngày sinh
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Nhóm làm việc
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Số điện thoại
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Email
                  </th>
                  <th className=" px-[16px] py-[20px] text-left min-w-[80px]">
                    Sửa / Xóa
                  </th>
                </tr>
              </thead>
              {isNotFould ? (
                <div className="font-bold text-red-500 text-center text-xl left-5 ">
                  Không tìm thấy !!!
                </div>
              ) : (
                <tbody>
                  {currentDataAxios.map((dt, index) => (
                    <tr
                      className="border-b border-solid border-gray-400"
                      key={dt.phone}
                    >
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px] pl-[24px] pr-[8px]">
                        <input
                          className="w-4 h-4 relative top-[2px] cursor-pointer"
                          type="checkbox"
                        />
                      </td>
                      {/* <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                      {dt._id}
                    </td> */}
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                        <div class="flex items-center gap-2 cursor-pointer w-max group">
                          {/* <img
                        class="w-[2.5rem] h-[2.5rem] rounded-full"
                        src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dGFHlbHly-YAX97zuJY&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBxVFE5RBIWR0o5M2DM6dpzxwxYybTsRZI1r2vzOsr6YQ&oe=64385EFD"
                        alt=""
                      /> */}
                          <span class="group-hover:text-active">{dt.name}</span>
                        </div>
                      </td>
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                        {dt.gender}
                      </td>
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                        {new Date(dt.birthDate).toLocaleDateString("en-US")}
                      </td>
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px] uppercase">
                        {dt.type}
                      </td>
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                        <span class="w-max inline-block">{dt.phone}</span>
                      </td>
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                        <span class="w-max inline-block">{dt.email}</span>
                      </td>
                      <td className=" px-[16px] py-[20px] text-left min-w-[80px]">
                        <div class="flex items-center gap-2">
                          <button
                            class="btn icon hover:bg-blue-500 hover:text-white cursor-pointer bg-gray-200 p-2 text-gray-500 sm rounded-full"
                            type="button"
                            onClick={() => {
                              handleSelectEmployee(dt);
                              navigate("/admin/update-employees");
                            }}
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                          <button
                            onClick={() => clickDeleteEmployee(dt.phone)}
                            class="rounded-full  hover:bg-red-500 hover:text-white cursor-pointer bg-gray-200 p-2 text-gray-500 btn icon secondary sm"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          )}
        </div>
      </div>

      {listFree ? (
        // chuyển trang cho thằng freelancer
        <div className="flex mt-4 h-24 items-center justify-center">
          {/* Hiển thị các button trang ở giữa */}
          {[...Array(totalPagesFree)].map((_, index) => {
            const pageIndex = index + 1;
            const isNearCurrentPage = Math.abs(currentPage1 - pageIndex) <= 2;
            const isBeginning = pageIndex === 1;
            const isEnd = pageIndex === totalPagesFree;

            if (
              isBeginning ||
              isEnd ||
              isNearCurrentPage ||
              (currentPage1 <= 3 && pageIndex <= 5) ||
              (currentPage1 >= totalPagesFree - 2 &&
                pageIndex >= totalPagesFree - 4)
            ) {
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange1(pageIndex)}
                  className={` p-2 bg-blue-500 rounded-xl mr-4 text-white font-semibold text-sm transition-all duration-200 ease-in-out ${
                    index + 1 === currentPage1
                      ? "p-3 bg-green-600 text-xl "
                      : ""
                  }`}
                >
                  {pageIndex}
                </button>
              );
            } else {
              return null;
            }
          })}

          {/* Hiển thị button trang cuối cùng */}
          {currentPage1 < totalPagesFree && (
            <>
              {currentPage1 < totalPagesFree && (
                <span className="ellipsis">...</span>
              )}
              <button
                className="p-2 ml-3 bg-blue-500 rounded-xl mr-4 text-white font-semibold text-sm transition-all duration-100 ease-in-out"
                onClick={() => handlePageChange1(totalPagesFree)}
              >
                {totalPagesFree}
              </button>
            </>
          )}

          {/* Hiển thị button biểu tượng next */}
          {currentPage1 < totalPagesFree && (
            <button onClick={() => handlePageChange1(currentPage1 + 1)}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          )}
        </div>
      ) : (
        // chuyển trang cho thằng employee
        <div>
          {isTranPage ? (
            <div className="flex mt-4 h-24 items-center justify-center">
              {/* Hiển thị các button trang ở giữa */}

              {[...Array(totalPages)].map((_, index) => {
                const pageIndex = index + 1;
                const isNearCurrentPage =
                  Math.abs(currentPage - pageIndex) <= 2;
                const isBeginning = pageIndex === 1;
                const isEnd = pageIndex === totalPages;

                if (
                  isBeginning ||
                  isEnd ||
                  isNearCurrentPage ||
                  (currentPage <= 3 && pageIndex <= 5) ||
                  (currentPage >= totalPages - 2 && pageIndex >= totalPages - 4)
                ) {
                  return (
                    <button
                      key={index}
                      onClick={() => handlePageChange(pageIndex)}
                      className={` p-2 bg-blue-500 rounded-xl mr-4 text-white font-semibold text-sm transition-all duration-200 ease-in-out ${
                        index + 1 === currentPage
                          ? "p-3 bg-green-600 text-xl "
                          : ""
                      }`}
                    >
                      {pageIndex}
                    </button>
                  );
                } else {
                  return null;
                }
              })}

              {/* Hiển thị button trang cuối cùng */}
              {currentPage < totalPages && (
                <>
                  {currentPage < totalPages && (
                    <span className="ellipsis">...</span>
                  )}
                  <button
                    className="p-2 ml-3 bg-blue-500 rounded-xl mr-4 text-white font-semibold text-sm transition-all duration-100 ease-in-out"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {/* Hiển thị button biểu tượng next */}
              {currentPage < totalPages && (
                <button onClick={() => handlePageChange(currentPage + 1)}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default ListEmployees;
