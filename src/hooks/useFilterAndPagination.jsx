/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from "react";
import useApplyPagination from "./useApplyPagination";

function useFilterAndPagination({
  dataArray,
  fieldsToSearch,
  defaultLimit = 10,
  initialPage = 0,
}) {
  const applyFilters = (arr, fields, state) => {
    if (!state) {
      return arr;
    }

    return arr.filter((dataArr) => {
      const containsQuery = fields.map((field) => {
        const nestedFields = field.split(".");
        let nestedValue = dataArr;

        // Traverse the nested structure to access the nested property
        for (const nestedField of nestedFields) {
          nestedValue = nestedValue[nestedField];
          if (!nestedValue) break; // Break if any level is undefined
        }

        if (nestedValue) {
          return nestedValue.toLowerCase().includes(state.toLowerCase());
        }

        return false;
      });

      // If at least one field contains the query, return true
      return containsQuery.some(Boolean);
    });
  };

  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(defaultLimit);
  const [searchValue, setSearchValue] = useState("");

  const filteredResults = applyFilters(
    dataArray ?? [],
    fieldsToSearch,
    searchValue
  );

  const paginatedResults = useApplyPagination(
    filteredResults ?? [],
    page,
    limit
  );

  const handleSearchChange = async (event) => {
    event.preventDefault();
    if (event.target.value) {
      setSearchValue(event.target.value);
    } else {
      setSearchValue("");
    }
  };

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    if (paginatedResults?.length === 0) {
      setPage(0);
    }
  }, [paginatedResults]);

  return {
    handlePageChange,
    handleLimitChange,
    handleSearchChange,
    filteredResults,
    searchValue,
    page,
    limit,
    paginatedResults,
  };
}

export default useFilterAndPagination;
