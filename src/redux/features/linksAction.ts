// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "@/firebase/initFirebase";
// import { collection, getDocs, orderBy, query, where } from "firebase/firestore";


// export interface FetchParams {
//   categoryId: string;
//   subcategoryId: string;
// }

// export interface Category {
//   id: string;
//   name: string;
//   [key: string]: unknown;
// }

// export interface ContentBlock {
//   type: string;
//   value: string;
// }
// export interface ContentItem {
//   id: string;
//   categoryId: string;
//   subcategoryId: string;
//   content: ContentBlock[];
//   createdAt?: unknown;
//   [key: string]: unknown;
// }

// function getErrorMessage(error: unknown): string {
//   if (error instanceof Error) return error.message;
//   return String(error);
// }


// export const fetchcategories = createAsyncThunk(
//   "home/fetchHomeStatistics",
//   async (_, { rejectWithValue }) => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "categories"));
//       const items = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       return items;
//     } catch (error) {
//       console.error("Error fetching home statistics:", error);
//       return rejectWithValue(getErrorMessage(error));
//     }
//   }
// );


// export const fetchAllDataByCategory = createAsyncThunk(
//   "homeStatistics/fetch-data-by-category",
//   async ({ categoryId, subcategoryId }: FetchParams, thunkAPI) => {
//     console.log('categoryId',subcategoryId)
//     console.log('subcategoryId',subcategoryId,)
//     try {
//       const q = query(
//         collection(db, "content"),
//         where("categoryId", "==", categoryId),
//         where("subcategoryId", "==", subcategoryId),
//         orderBy("createdAt", "asc"),
//       );

//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
// console.log('here is data', data)
//       return data;
//     } catch (error: unknown) {

//       return thunkAPI.rejectWithValue(getErrorMessage(error));
//     }
//   }
// );


// export const fetchSearchData = createAsyncThunk(
// "homeStatistics/fetch-search-data",
// async (searchTerm: string, thunkAPI) => {
//   try {
//     const q = query(collection(db, "content"));
//     const snapshot = await getDocs(q);

//     if (snapshot.empty) {
//       return thunkAPI.rejectWithValue("No data found");
//     }

//     const data = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     const filteredData = data.filter((item):ContentItem => {
//       const category = item.categoryId?.toLowerCase() || "";
//       const subcategory = item.subcategoryId?.toLowerCase() || "";
//       const query = searchTerm.toLowerCase();

//       // Find all heading types in the content array
//       const allHeadings = item.content
//         ?.filter((c: ContentItem) => c.type === "heading")
//         .map((c: any) => c.value?.toLowerCase()) || [];

//       const shortDescription =
//         item.content?.find((c: any) => c.type === "text")?.value?.toLowerCase() || "";

//       if (query === "") {
//         return category === "dogs";
//       }

//       return (
//         category.includes(query) ||
//         subcategory.includes(query) ||
//         shortDescription.includes(query) ||
//         allHeadings.some((heading: string) => heading.includes(query))
//       );
//     });

//     return filteredData;
//   } catch (error: unknown) {
//     return thunkAPI.rejectWithValue(getErrorMessage(error));
//   }
// }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase/initFirebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

export interface FetchParams {
  categoryId: string;
  subcategoryId: string;
}

export interface Category {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface ContentBlock {
  type: string;
  value: string;
  src:string;
}

export interface ContentItem {
  id: string;
  categoryId: string;
  subcategoryId: string;
  content: ContentBlock[];
  createdAt?: unknown;
  [key: string]: unknown;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

// Fetch categories
export const fetchcategories = createAsyncThunk<Category[]>(
  "home/fetchHomeStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const items: Category[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Category),
      }));
      return items;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// Fetch content by category + subcategory
export const fetchAllDataByCategory = createAsyncThunk<ContentItem[], FetchParams>(
  "homeStatistics/fetch-data-by-category",
  async ({ categoryId, subcategoryId }, thunkAPI) => {
    try {
      const q = query(
        collection(db, "content"),
        where("categoryId", "==", categoryId),
        where("subcategoryId", "==", subcategoryId),
        orderBy("createdAt", "asc")
      );

      const snapshot = await getDocs(q);
      const data: ContentItem[] = snapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...(doc.data() as ContentItem),
        })
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

// Fetch search filtered data
export const fetchSearchData = createAsyncThunk<ContentItem[], string>(
  "homeStatistics/fetch-search-data",
  async (searchTerm: string, thunkAPI) => {
    try {
      const q = query(collection(db, "content"));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        return thunkAPI.rejectWithValue("No data found");
      }

      const data: ContentItem[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as ContentItem),
      }));

      const filteredData = data.filter((item) => {
        const category = item.categoryId?.toLowerCase() || "";
        const subcategory = item.subcategoryId?.toLowerCase() || "";
        const queryLower = searchTerm.toLowerCase();

        const allHeadings =
          item.content
            ?.filter((c) => c.type === "heading")
            .map((c) => c.value?.toLowerCase()) || [];

        const shortDescription =
          item.content?.find((c) => c.type === "text")?.value?.toLowerCase() || "";

        if (queryLower === "") {
          return category === "dogs";
        }

        return (
          category.includes(queryLower) ||
          subcategory.includes(queryLower) ||
          shortDescription.includes(queryLower) ||
          allHeadings.some((heading: string) => heading.includes(queryLower))
        );
      });

      return filteredData;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
