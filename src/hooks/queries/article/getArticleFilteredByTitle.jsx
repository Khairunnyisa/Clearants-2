import handlingError from "../../../utils/errorHandling";
import { apiUrl } from "../../../api/baseUrl";
import { useQuery } from "@tanstack/react-query";

const useGetArticleFilteredByTitle = ({ condition = false, title }) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["filteredArticles", title],
    async () => {
      try {
        const res = await apiUrl.get(
          `/api/articles?filters[title][$containsi]=${encodeURIComponent(
            title
          )}&populate=*`
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

export default useGetArticleFilteredByTitle;
