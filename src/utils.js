const dateToString = (date) => {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
};

const currentDate = () => {
  let date = new Date().setHours(0, 0, 0, 0);
  return new Date(date);
};

export { dateToString, currentDate };
