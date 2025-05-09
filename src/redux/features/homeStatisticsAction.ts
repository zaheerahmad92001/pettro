// store/slices/homeStatisticsSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase/initFirebase";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

interface HomeStatistics {
  [key: string]: unknown;
}

interface PetCareContent {
  [key: string]: unknown;
}

interface ContentBlock {
  type: string;
  value: string;
}
interface ContentItem {
  id: string;
  categoryId: string;
  subcategoryId: string;
  content: ContentBlock[];
  createdAt?: unknown;
  [key: string]: unknown;
}

interface CategoryWithSubcategory {
  categoryId: string;
  subcategoryId: string;
}

export const fetchHomeStatistics = createAsyncThunk<HomeStatistics, void, { rejectValue: string }>(
  "homeStatistics/fetchHomeStatistics",
  async (_, thunkAPI) => {
    try {
      const q = query(collection(db, "homeStatistics"));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        return data as HomeStatistics;
      } else {
        return thunkAPI.rejectWithValue("No data found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchPetCareContent = createAsyncThunk<PetCareContent, void, { rejectValue: string }>(
  "homeStatistics/pet-care-content",
  async (_, thunkAPI) => {
    try {
      const q = query(collection(db, "petCare"));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        return data as PetCareContent;
      } else {
        return thunkAPI.rejectWithValue("No data found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchHomeContent = createAsyncThunk<ContentItem[], void, { rejectValue: string }>(
  "homeStatistics/fetchHomeContent",
  async (_, thunkAPI) => {
    try {
      const q = query(
        collection(db, "content"),
        orderBy("createdAt", "asc")
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ContentItem[];
        return data;
      } else {
        return thunkAPI.rejectWithValue("No data found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchHomeContentByCategories = createAsyncThunk<
  ContentItem[], // Return type
  { categoriesWithSubcategories: CategoryWithSubcategory[] }, // Argument type
  { rejectValue: string } // rejectValue type for error messages
>(
  "homeStatistics/fetchHomeContentByCategories",
  async ({ categoriesWithSubcategories }, thunkAPI) => {
    try {
      const promises = categoriesWithSubcategories.map(async ({ categoryId, subcategoryId }) => {
        const q = query(
          collection(db, "content"),
          where("categoryId", "==", categoryId),
          where("subcategoryId", "==", subcategoryId),
          orderBy("createdAt", "asc"),
          limit(4)
        );

        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ContentItem[];
      });
      const results = await Promise.all(promises);

      // Flatten the array of arrays
      const flattenedResults = results.flat();
      return flattenedResults;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
