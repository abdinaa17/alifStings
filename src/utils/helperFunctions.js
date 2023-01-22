// Firebase error code returns every error with "auth/error-message" format. We only want the error message so we'll split it and get the error message.

export const cleanUpError = (err) => {
  const str = err.split("/")[1];
  const result = str.split("-").join(" ");
  return result;
};

export const secondsToDate = (sec) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = new Date(sec * 1000).toLocaleDateString("en-US", options);
  return fullDate;
};
export const excerpt = (str, len) => {
  if (str.length < len) return;

  return str.substring(0, len);
};
