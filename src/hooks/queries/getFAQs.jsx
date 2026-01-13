import handlingError from "../../utils/errorHandling";
import { apiUrl } from "../../api/baseUrl";
import { useQuery } from "@tanstack/react-query";

const useGetFAQs = ({
  condition = false,
  limit = 9,
  page = 1,
  searchValue = "",
}) => {
  return useQuery({
    queryKey: ["faqs", page, limit, searchValue],
    enabled: condition,
    gcTime: 0, // pengganti cacheTime
    queryFn: async () => {
      const res = await apiUrl.get(
        `/api/faqs?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&filters[question][$contains]=${searchValue}`
      );
      return res.data;
    },
    onError: handlingError,
  });
};

export default useGetFAQs;
