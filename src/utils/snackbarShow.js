import { toast } from "react-toastify";

const theme =
  localStorage.getItem("appTheme") === "NebulaFighterTheme" ||
  localStorage.getItem("appTheme") === "DarkSpacesTheme"
    ? "light"
    : "colored";

export function onErrorSnackbar(message) {
  const position = "bottom-right";

  return toast.error(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
}

export function onSuccessSnackbar(message) {
  const position = "bottom-right";

  return toast.success(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
}

export function onInfoSnackbar(message) {
  const position = "bottom-right";

  return toast.info(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
}
