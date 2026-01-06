import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../../api/baseUrl";
import handlingError from "../../utils/errorHandling";

const useGetCategories = ({ condition = false }) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["categories"],
    async () => {
      try {
        const res = await apiUrl.get(`/api/categories?populate=*`);

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

export default useGetCategories;
