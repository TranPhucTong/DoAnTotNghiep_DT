import React, { useEffect, useRef, useState } from "react";
import Nav from "./component/nav/Nav";
import Search from "./component/search/Search";
import ListContract from "./component/list-contract/ListContract";
import ModalComponent from "../../components/modal/ModalComponent";
import Review from "./component/review/Review";
import { selectEmployee } from "../../reducers/slices/employeeSlice";
import reviewApi from "../../api/reviewApi";
import { useDispatch } from "react-redux";
import { setIsRatingContract } from "../../reducers/slices/contractSlice";

const Contract = () => {
  const [openReview, setOpenReview] = useState({
    isOpen: false,
    employee: null,
    contract: null,
  });
  const [isValidComment, setIsValidComment] = useState(false);
  const [selectRating, setSelectRating] = useState(0);
  const [isDisable, setIsDisable] = useState(true);
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
        <Nav />
        <div className="w-full my-10">
          <Search />
        </div>
        <div className="w-full my-10">
          <ListContract onOpenReview={setOpenReview} />
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
