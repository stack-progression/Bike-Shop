import { fetchBrands } from "../Api/fetchBrands";
import { useQuery } from "@tanstack/react-query";
export const useBrands = () => {
    return useQuery({
        queryKey: ["brands"],
        queryFn: fetchBrands,
        staleTime: 1000*60*5
    })
}