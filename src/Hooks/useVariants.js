import { useQuery } from "@tanstack/react-query"
import { fetchVariants } from "../Api/fetchVariants"

export const useVariants = () => {
    return useQuery({
        queryKey: ["variants"],
        queryFn: fetchVariants,
        staleTime: 1000*60*5
    })
}