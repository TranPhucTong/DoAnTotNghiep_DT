import React, { useEffect, useState } from "react";
import ListCategory from "../../components/categories/categories-freelancer/ListCategory";
import ListFreelancer from "../../components/Freelancer/list-freelancer/ListFreelancer";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listEmployee } from "../../reducers/slices/employeeSlice";
import { getFreelancerByPage } from "../../reducers/actions/employeeAction";
import Rent from "../../components/rent/Rent";
import Skill from "../../components/skill/Skill";
const FreelancerPage = () => {
  const [category, setCategory] = useState();
  const [rentFrom, setRentFrom] = useState(0);
  const [rentTo, setRentTo] = useState(100);
  const [skill, setSkill] = useState();
  const [skills, setSkills] = useState([]);

  const listFreelancer = useSelector(listEmployee);
  const dispatch = useDispatch();
  const changeCategoryHandle = (category) => {
    setCategory(category);
    dispatch(getFreelancerByPage({ page: 1, field: category.value }));
  };

  const changeRentFromHandle = (value) => {
    setRentFrom(value);
  };

  const changeRentToHandle = (value) => {
    setRentTo(value);
  };
  const changeSkillHandle = (value) => {
    setSkill(value);
  };
  const keyDownSkillHandle = (value) => {
    if (value === "Enter") {
      setSkills([...skills, skill]);
      setSkill("");
      return;
    }
  };
  const removeSkillHandle = (skill) => {
    const newSkills = skills.filter((item) => item !== skill);
    setSkills(newSkills);
  };
  const filterEmployeeHandle = () => {
    const field = category ? category.value : "";
    const page = 1;
    const filter = {
      field,
      page,
      rentFrom,
      rentTo,
      skills,
    };
    dispatch(getFreelancerByPage(filter));
  };
  const defaultCategory = category ? category.name : "Tất cả";
  useEffect(() => {
    !listFreelancer.length && dispatch(getFreelancerByPage({ page: 1 }));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container my-5 mx-auto px-20 w-full flex ">
      <div className="w-3/12 my-20 mr-20">
        <div>
          <h3 className="text-left font-bold text-3xl text-primary mb-1">
            Danh mục
          </h3>
          <ListCategory onChangeCategory={changeCategoryHandle} categoryActive = {category}/>
        </div>
        <div className="mt-10">
          <h3 className="text-left font-bold text-3xl text-primary mb-1">
            Tìm kiếm
          </h3>
          {/* Rent */}
          <Rent
            rentFrom={rentFrom}
            rentTo={rentTo}
            onChangeFrom={changeRentFromHandle}
            onChangeTo={changeRentToHandle}
          />
          {/* Skill */}
          <Skill
            onChange={changeSkillHandle}
            onKeyDown={keyDownSkillHandle}
            skill={skill}
            skills={skills}
            onRemoveSkill={removeSkillHandle}
          />
          <button
            onClick={filterEmployeeHandle}
            className="bg-gradient-to-r mt-10 from-[#00BDD6] via-blue-500 to-indigo-500 transition-all duration-1000 ease-in-out   hover:motion-safe:scale-110 text-white font-bold py-2 px-4 rounded-xl inline-flex items-center w-full text-center justify-center hover:scale-95
            "
          >
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="w-9/12">
        <div className="my-20 ">
          <div className="mb-16">
            <h3 className="text-5xl text-primary mb-4">{defaultCategory}</h3>
            <p className="text-xl font-thin tracking-wide text-gray-500 mb-8">
              Danh sách Freelancer của mảng {defaultCategory}
            </p>
          </div>
          <ListFreelancer listFreelancer={listFreelancer} />
        </div>
        <Pagination field={category ? category.value : ""} />
      </div>
    </div>
  );
};

export default FreelancerPage;
