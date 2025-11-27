import { useMemo, useState } from "react";
import { ACTIVITIES } from "../data/ActivityData";

export default function useActivities() {
  const [filters, setFilters] = useState({
    type: "All",
    status: "All",
  });

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = [...ACTIVITIES];

    if (filters.type !== "All") {
      list = list.filter((a) => a.type === filters.type);
    }

    if (filters.status !== "All") {
      list = list.filter((a) => a.status === filters.status);
    }

    if (query) {
      list = list.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return list;
  }, [filters, query]);

  return {
    activities: filtered,
    filters,
    setFilters,
    query,
    setQuery,
  };
}
