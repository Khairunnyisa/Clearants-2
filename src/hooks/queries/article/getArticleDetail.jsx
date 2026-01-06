import handlingError from "../../../utils/errorHandling";
import { apiUrl } from "../../../api/baseUrl";
import { useQuery } from "@tanstack/react-query";

const useGetDetailArticle = ({ condition = false, articleId }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["detailArticle", articleId],
    queryFn: async () => {
      try {
        const res = await apiUrl.get(`/api/articles/${articleId}?populate=*`);

        return res.data;
      } catch (error) {
        handlingError(error);
        return error;
      }
    },
    gcTime: 0,
    enabled: condition,
  });

  return { data, isLoading, error, refetch };
};

export default useGetDetailArticle;
