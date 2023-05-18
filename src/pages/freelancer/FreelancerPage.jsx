import React, { useEffect, useState } from "react";
import ListCategory from "../../components/categories/categories-freelancer/ListCategory";
import ListFreelancer from "../../components/Freelancer/list-freelancer/ListFreelancer";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listEmployee } from "../../reducers/slices/employeeSlice";
import { getFreelancerByPage } from "../../reducers/actions/employeeAction";
const FreelancerPage = () => {
  const [category, setCategory] = useState();
  const listFreelancer = useSelector(listEmployee);
  const dispatch = useDispatch();
  const changeCategoryHandle = (category) => {
    setCategory(category);
    dispatch(getFreelancerByPage({ page: 1, field: category.value }));

  };

  const defaultCategory = category ? category.name : "Tất cả";
  useEffect(() => {
    
    !listFreelancer.length && dispatch(getFreelancerByPage({page: 1}));
    console.log("🚀 ~ file: FreelancerPage.jsx:22 ~ useEffect ~ listFreelancer:", listFreelancer)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container my-5 mx-auto px-20">
      <ListCategory onChangeCategory={changeCategoryHandle} />
      <div className="my-10">
        <div className="mb-16">
          <h3 className="text-5xl text-primary mb-4">{defaultCategory}</h3>
          <p className="text-xl font-thin tracking-wide text-gray-500 mb-8">
            Danh sách Freelancer của mảng {defaultCategory}
          </p>
        </div>
        <ListFreelancer listFreelancer={listFreelancer} />
      </div>
      <Pagination field={category ? category.value : ""} />
      <div></div>
    </div>
  );
};

export default FreelancerPage;
