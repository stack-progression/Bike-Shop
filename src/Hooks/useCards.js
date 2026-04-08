import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../Api/fetchCards";

export const useCards = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
    staleTime: 1000 * 60 * 5,
  });
};
