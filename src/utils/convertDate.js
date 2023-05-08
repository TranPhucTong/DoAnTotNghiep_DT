const formatBirthDate = (birthDate) => {
  const format = new Date(birthDate);
  const date = format.getDate();
  const month = format.getMonth() + 1;
  const year = format.getFullYear();
  return `${date < 10 ? "0" : ""}${date}/${
    month < 10 ? "0" : ""
  }${month}/${year}`;
};
export default formatBirthDate;
