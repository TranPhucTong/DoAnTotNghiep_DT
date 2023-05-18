import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalPage } from "../../reducers/slices/employeeSlice";
import { getFreelancerByPage } from "../../reducers/actions/employeeAction";
const classNotActive = "cursor-not-allowed opacity-50";

const Pagination = ({ field }) => {
  const [selectPage, setSelectPage] = useState(1);
  const dispatch = useDispatch();
  const total = useSelector(totalPage);
  const arr = Array.from({ length: total }, (_, i) => i + 1);
  const changePageHandle = (page) => {
    if (page === 0 || page === total + 1) return;
    dispatch(getFreelancerByPage({ page, field }));
    setSelectPage(page);
  };

  const Page = arr.map((item, index) => {
    if (selectPage === item)
      return (
        <a
          key={index}
          aria-current="page"
          class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {item}
        </a>
      );
    return (
      <a
        onClick={() => changePageHandle(item)}
        class="cursor-pointer relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
      >
        {item}
      </a>
    );
  });
  return (
    <nav
      class="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <a
        onClick={() => changePageHandle(selectPage - 1)}
        class={`${
          selectPage === 1 ? classNotActive : ""
        } relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      {Page}
      <a
        onClick={() => changePageHandle(selectPage + 1)}
        class={`${
          selectPage === total ? classNotActive : ""
        } relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Pagination;
