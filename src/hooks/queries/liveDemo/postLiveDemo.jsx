import { useMutation } from "@tanstack/react-query";
import handlingError from "../../../utils/errorHandling";
import { onSuccessSnackbar } from "../../../utils/snackbarShow";
import { apiUrl } from "../../../api/baseUrl";

const useCreateLiveDemo = () => {
  const { isLoading, isSuccess, mutate } = useMutation({
    mutationFn: async (data) => {
      try {
        const res = await apiUrl.post(`/api/request-live-demos`, {
          data: data,
        });

        return res.data;
      } catch (error) {
        handlingError(error);
        return error;
      }
    },
    onSuccess: () => {
      onSuccessSnackbar("You successfully create live demo");
    },
  });

  return { isLoading, isSuccess, mutate };
};

export default useCreateLiveDemo;
