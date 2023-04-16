export const formatBirthDate = (birthDate) => {
  const format = new Date(birthDate);
  const date = format.getDate();
  const month = format.getMonth();
  const year = format.getFullYear();
  return `${date}/${month}/${year}`;
};
