import handlingError from "../../utils/errorHandling";
import { apiUrl } from "../../api/baseUrl";
import { useQuery } from "@tanstack/react-query";

const useGetModules = ({ condition = false }) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["modules"],
    async () => {
      try {
        const res = await apiUrl.get(`/api/modules?populate=*`);

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

export default useGetModules;
