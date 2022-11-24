// Firebase error code returns every error with "auth/error-message" format. We only want the error message so we'll split it and get the error message.

export const cleanUpError = (err) => {
  const str = err.split("/")[1];
  const result = str.split("-").join(" ");
  return result;
};
