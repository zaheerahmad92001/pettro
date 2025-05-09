import { useQuery } from "@tanstack/react-query";
import { fetchHomeStatistics, fetchPetCareContent ,fetchHomeContentByCategories } from "./home"; 
import { CategoryWithSubcategory } from "../../../types";


export const useHomeStatistics = () => {
    return useQuery({
      queryKey: ["homeStatistics"],
      queryFn: fetchHomeStatistics,
      staleTime: 1000 * 60 * 30, // optional: 30 minutes
      retry: 1,
    });
  };
export const usePetCareContent = () => {
  return useQuery({
    queryKey: ["petCareContent"],
    queryFn: fetchPetCareContent,
    staleTime: 1000 * 60 * 30, 
    retry: 1,
  });
};


export const useHomeContentByCategories = (categoriesWithSubcategories: CategoryWithSubcategory[]) => {
  return useQuery({
    queryKey: ["homeContent", categoriesWithSubcategories],
    queryFn: () => fetchHomeContentByCategories(categoriesWithSubcategories),
    enabled: categoriesWithSubcategories.length > 0,
    staleTime: 1000 * 60 * 30,
  });
};
