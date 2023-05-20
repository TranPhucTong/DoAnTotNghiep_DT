import React, { useEffect, useRef, useState } from "react";
import Nav from "./component/nav/Nav";
import Search from "./component/search/Search";
import ListContract from "./component/list-contract/ListContract";
import ModalComponent from "../../components/modal/ModalComponent";
import Review from "./component/review/Review";
import reviewApi from "../../api/reviewApi";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeContract, setIsRatingContract } from "../../reducers/slices/contractSlice";
import ListOrder from "./component/list-order/ListOrder";

const Contract = () => {
  const [openReview, setOpenReview] = useState({
    isOpen: false,
    employee: null,
    contract: null,
  });
  const [isValidComment, setIsValidComment] = useState(false);
  const [selectRating, setSelectRating] = useState(0);
  const [isDisable, setIsDisable] = useState(true);
  const typeContract = useSelector(selectTypeContract);
  const isContract = typeContract === "freelancer";
  const dispatch = useDispatch();
  const commentRef = useRef(null);
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
        <h3 className="mb-10 text-2xl text-blue-500 font-bold">ĐƠN THUÊ {typeContract === "freelancer" ? "ỨNG VIÊN" : "ĐỘI NGŨ"}</h3>
        <Nav isContract = {isContract}/>
        <div className="w-full my-10">
          <Search isContract = {isContract}/>
        </div>
        <div className="w-full my-10">
          {isContract ?
          <ListContract onOpenReview={setOpenReview} />
          :
          <ListOrder/>
          }
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
    </div>
  );
};

export default Contract;
