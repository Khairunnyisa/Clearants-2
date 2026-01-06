import { onErrorSnackbar } from "./snackbarShow";

function handlingError(error) {
  if (
    !error?.message.includes("Cannot read properties of  ") &&
    error?.response?.status === undefined
  ) {
    onErrorSnackbar(`${error?.message}`);
  } else if (
    error?.response?.status !== undefined &&
    error?.response?.status !== 401
  ) {
    if (error?.response?.status.toString().includes(5)) {
      onErrorSnackbar(
        import.meta.env.NODE_ENV === "production"
          ? `${error.response.data.error}`
          : `${error.response.data.error} - ${error.response.data.path}`
      );
    } else {
      onErrorSnackbar(
        `${
          error?.response?.data?.message ??
          error?.response?.data?.errors[0] ??
          "Failed to request data, please try again"
        }`
      );
    }
  }
}

export default handlingError;
