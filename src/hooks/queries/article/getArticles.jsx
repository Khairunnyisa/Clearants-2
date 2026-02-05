import { useQuery } from "@tanstack/react-query";
import handlingError from "../../../utils/errorHandling";
import { apiUrl } from "../../../api/baseUrl";

const useGetArticles = ({
  condition = true,
  limit = 4,
  page = 1,
  searchValue = "",
  filters = "",
}) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["articles", page, limit, searchValue, filters],
    queryFn: async () => {
      try {
        const res = await apiUrl.get(
          `/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&filters[title][$contains]=${searchValue}&sort=createdAt:desc&${filters}`
        );

        return res.data;
      } catch (err) {
        handlingError(err);
        throw err; 
      }
    },
    enabled: condition,
    gcTime: 0, 
  });

  return { data, isLoading, error, refetch };
};

export default useGetArticles;
