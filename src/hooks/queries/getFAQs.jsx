import handlingError from "../../utils/errorHandling";
import { apiUrl } from "../../api/baseUrl";
import { useQuery } from "@tanstack/react-query";

const useGetFAQs = ({
  condition = false,
  limit = 9,
  page = 1,
  searchValue = "",
}) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["faqs", page, limit, searchValue],
    async () => {
      try {
        const res = await apiUrl.get(
          `/api/faqs?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&filters[question][$contains]=${searchValue}`
        );

        return res.data;
      } catch (error) {
        handlingError(error);
        return error;
      }
    },
    {
      cacheTime: 0,
      enabled: condition,
    }
  );

  return { data, isLoading, error, refetch };
};

export default useGetFAQs;
