import React, { useEffect, useRef, useState } from "react";
import Nav from "./component/nav/Nav";
import Search from "./component/search/Search";
import ListContract from "./component/list-contract/ListContract";
import ModalComponent from "../../components/modal/ModalComponent";
import Review from "./component/review/Review";
import reviewApi from "../../api/reviewApi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTypeContract,
  setIsRatingContract,
} from "../../reducers/slices/contractSlice";
import ListOrder from "./component/list-order/ListOrder";
import Maintain from "./component/maintain/Maintain";
import { toast } from "react-toastify";
import days from "../../utils/totalDay";
import formatBirthDate from "../../utils/convertDate";
import { createMaintain } from "../../reducers/actions/maintainAction";

const Contract = () => {
  const [openReview, setOpenReview] = useState({
    isOpen: false,
    employee: null,
    contract: null,
  });
  const [openMaintain, setOpenMaintain] = useState({
    isOpen: false,
    contract: null,
  });
  const [isValidComment, setIsValidComment] = useState(false);
  const [selectRating, setSelectRating] = useState(0);
  const [isDisable, setIsDisable] = useState(true);
  // Maintain contract
  const [budget, setBudget] = useState(0);
  const [endDate, setEndDate] = useState();
  const typeContract = useSelector(selectTypeContract);
  const isContract = typeContract === "freelancer";
  const dispatch = useDispatch();
  const commentRef = useRef(null);

  const changeBudgetHandle = (value) => {
    if (value > 0 && endDate) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
    setBudget(value);
  };
  const changeEndDateHandle = (value) => {
    if (budget > 0 && value) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
    setEndDate(value);
  };
  const ratingEmployeeHandle = async () => {
    const comment = commentRef.current.value;
    const review = {
      employee: openReview.employee,
      rating: selectRating,
      comment,
    };
    const contractId = openReview.contract._id;
    try {
      const res = await reviewApi.createReview(review, contractId);
      if (res) {
        setOpenReview({ isOpen: false, employee: null, contract: null });
        setSelectRating(0);
        setIsValidComment(false);
        setIsDisable(true);
        dispatch(setIsRatingContract(contractId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const maintainContractHandle = async () => {
    const { contract } = openMaintain;
    if (budget <= 0 || budget > 100) {
      toast.warning("Giá thuê > 0 và < 100");
      return;
    }

    if (days(new Date(endDate), new Date(contract.endDate)) <= 0) {
      toast.warning(
        `Ngày gia hạn hợp đồng phải lớn hơn ${formatBirthDate(
          contract.endDate
        )}`
      );
      return;
    }
    const maintain = {
      contract: contract._id,
      budget,
      endDate,
    };
    try {
      dispatch(createMaintain(maintain));
      setOpenMaintain({ isOpen: false, contract: null });
      setBudget(0);
      setEndDate(null);
      setIsDisable(true);
    } catch (error) {}
  };
  useEffect(() => {
    if (selectRating > 0 && isValidComment) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [selectRating, isValidComment]);
  return (
    <div className="w-full h-full p-20">
      <div className="w-4/5 mx-auto">
        <h3 className="mb-10 text-2xl text-blue-500 font-bold">
          ĐƠN THUÊ {typeContract === "freelancer" ? "ỨNG VIÊN" : "ĐỘI NGŨ"}
        </h3>
        <Nav isContract={isContract} />
        <div className="w-full my-10">
          <Search isContract={isContract} />
        </div>
        <div className="w-full my-10">
          {isContract ? (
            <ListContract
              onOpenReview={setOpenReview}
              onOpenMaintain={setOpenMaintain}
            />
          ) : (
            <ListOrder />
          )}
        </div>
      </div>
      {openReview && (
        <ModalComponent
          open={openReview.isOpen}
          onOpen={setOpenReview}
          onClick={ratingEmployeeHandle}
          title="Đánh giá"
          isSubmit={true}
          contentBtnRight="Đánh giá"
          isDisable={isDisable}
        >
          <Review
            isValidComment={isValidComment}
            onChangeValidComment={setIsValidComment}
            selectRating={selectRating}
            onRating={setSelectRating}
            commentRef={commentRef}
          />
        </ModalComponent>
      )}
      {openMaintain && (
        <ModalComponent
          open={openMaintain.isOpen}
          onOpen={setOpenMaintain}
          onClick={maintainContractHandle}
          title="Gia hạn hợp đồng"
          isSubmit={true}
          contentBtnRight="Gia hạn"
          isDisable={isDisable}
        >
          <Maintain
            onChangeBudget={changeBudgetHandle}
            onChangeEndDate={changeEndDateHandle}
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default Contract;
