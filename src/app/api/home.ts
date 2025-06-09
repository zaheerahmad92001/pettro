import { collection, getDocs, query , where, orderBy, limit } from "firebase/firestore";
import { db } from "@/firebase/initFirebase";
import { CategoryWithSubcategory, ContentItem, PetCareData, Statistics } from "../../../types";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchHomeStatistics = async (): Promise<Statistics> => {
  const q = query(collection(db, "homeStatistics"));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const data = snapshot.docs[0].data();
    return data as Statistics;
  } else {
    throw new Error("No data found");
  }
};


export const fetchPetCareContent = async (): Promise<PetCareData> => {
  const q = query(collection(db, "petCare"));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const data = snapshot.docs[0].data();
    return data as PetCareData;
  } else {
    throw new Error("No data found");
  }
};

 

// export const fetchHomeContentByCategories = async (
//   categoriesWithSubcategories: CategoryWithSubcategory[]
// ): Promise<ContentItem[]> => {
//   try {
//     const promises = categoriesWithSubcategories.map(async ({ categoryId, subcategoryId }) => {
//       const q = query(
//         collection(db, "content"),
//         where("categoryId", "==", categoryId),
//         where("subcategoryId", "==", subcategoryId),
//         orderBy("createdAt", "asc"),
//         limit(4)
//       );

//       const snapshot = await getDocs(q);
//       return snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as ContentItem[];
//     });

//     const results = await Promise.all(promises);
//     return results.flat();
//   } catch (error) {
//     throw new Error(getErrorMessage(error));
//   }
// };


export const fetchHomeContentByCategories = async (): Promise<ContentItem[]> => {
  try {
    
      const q = query(
        collection(db, "content"),
        orderBy("createdAt", "asc"),
        limit(40)
      );

      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ContentItem[];
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

