const statusContent = (status) => {
  switch (status) {
    case "pending":
      return "Chờ xác nhận";
    case "progress":
      return "Đang trong tiến độ";
    case "done":
      return "Hoàn thành";
    case "cancel":
      return "Đã hủy";
  }
};

export default statusContent;
