import { useQuery } from "@tanstack/react-query";
import handlingError from "../../../utils/errorHandling";
import { apiUrl } from "../../../api/baseUrl";

const useGetArticleCategories= ({
  condition = true,
}) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["articlesCategories"],
    queryFn: async () => {
      try {
        const res = await apiUrl.get(
  "/api/article-categories?populate=*"
);

        return res.data.data;
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

export default useGetArticleCategories;
