export const secondsToDate = (sec) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = new Date(sec * 1000).toLocaleDateString("en-US", options);
  return fullDate;
};
