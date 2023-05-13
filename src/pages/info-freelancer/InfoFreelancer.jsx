import { useEffect, useState } from "react";

import ListProjectPhoto from "./list-project-photo/ListProjectPhoto";
import ProductInfo from "./product-info/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployee } from "../../reducers/slices/employeeSlice";
import { useParams } from "react-router";
import { getListEmployeeByPhone } from "../../reducers/actions/employeeAction";
import HireModel from "../../components/modals/hire-model/HireModel";
import ModalComponent from "../../components/modal/ModalComponent";
import ListReview from "./review/ListReview";

export default function InfoFreelancer() {
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  const sEmployee = useSelector(selectEmployee);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sEmployee.phone) {
      dispatch(getListEmployeeByPhone(id));
    }
  }, []);
  return sEmployee.phone ? (
    <div className="bg-white">
      <div className="pt-6">
        <ListProjectPhoto images={sEmployee.spotlight} />
        {/* Product info */}
        <ProductInfo employee={sEmployee} onOpen={setOpen} onOpenReview = {setOpenReview}/>
      </div>
      <HireModel open={open} onOpen={setOpen} employee={sEmployee} />
      <ModalComponent
        open={openReview}
        onOpen={setOpenReview}
        title={"Review"}
        isSubmit={false}
        contentBtnLeft={"Đóng"}
      >
        <ListReview reviews={sEmployee.reviews} />
      </ModalComponent>
    </div>
  ) : (
    <></>
  );
}
