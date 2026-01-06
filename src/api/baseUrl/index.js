import axios from "axios";

const baseConfig = {
  baseURL: "https://cms.i3gis.id/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_CMS}`,
  },
};

export const apiUrl = axios.create({
  ...baseConfig,
  timeout: 60000,
  timeoutErrorMessage: "Network error, please try again",
});

export const apiWithoutTimeout = axios.create({
  ...baseConfig,
  timeoutErrorMessage: "Network error, please try again",
});
