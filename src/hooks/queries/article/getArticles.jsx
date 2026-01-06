import { useQuery } from "@tanstack/react-query";
import handlingError from "../../../utils/errorHandling";
import { apiUrl } from "../../../api/baseUrl";

const useGetArticles = ({
  condition = false,
  limit = 9,
  page = 1,
  searchValue = "",
}) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["articles", page, limit, searchValue],
    queryFn: async () => {
      try {
        const res = await apiUrl.get(
          `/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&filters[title][$contains]=${searchValue}&sort=createdAt:desc`
        );

        return res.data;
      } catch (err) {
        handlingError(err);
        throw err; // IMPORTANT: must throw for React Query to handle error state
      }
    },
    enabled: condition,
    gcTime: 0, // replacement for cacheTime
  });

  return { data, isLoading, error, refetch };
};

export default useGetArticles;
