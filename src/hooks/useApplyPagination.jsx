const useApplyPagination = (results, page, limit) => {
  return results?.slice(page * limit, page * limit + limit);
};

export default useApplyPagination;
