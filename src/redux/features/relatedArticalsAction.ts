// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "@/firebase/initFirebase";

// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   limit,
// } from "firebase/firestore";

// export const fetchRelatedContent = createAsyncThunk(
//   "fetchRelatedContent",
//   async ({ categoryId, subcategoryId }, thunkAPI) => {
//     try {
//       const fetchQuery = query(
//         collection(db, "content"),
//         where("categoryId", "==", categoryId),
//         where("subcategoryId", "==", subcategoryId),
//         orderBy("createdAt"),
//         // startAfter(lastVisible),
//         limit(7) // Or whatever number you want after skipping 2
//       );

//       const fetchSnapshot = await getDocs(fetchQuery);

//       if (fetchSnapshot.empty) {
//         return thunkAPI.rejectWithValue("No more data found");
//       }

//       const data = fetchSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       return data;
//     } catch (error) {
//       console.error("Error fetching related content:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase/initFirebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

interface FetchRelatedParams {
  categoryId: string;
  subcategoryId: string;
}

export interface ContentBlock {
  type: string;
  value: string;
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

export const fetchRelatedContent = createAsyncThunk<ContentItem[], FetchRelatedParams>(
  "fetchRelatedContent",
  async ({ categoryId, subcategoryId }, thunkAPI) => {
    try {
      const fetchQuery = query(
        collection(db, "content"),
        where("categoryId", "==", categoryId),
        where("subcategoryId", "==", subcategoryId),
        orderBy("createdAt"),
        limit(7)
      );

      const fetchSnapshot = await getDocs(fetchQuery);

      if (fetchSnapshot.empty) {
        return thunkAPI.rejectWithValue("No more data found");
      }

      const data: ContentItem[] = fetchSnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...(doc.data() as ContentItem),
        })
      );

      return data;
    } catch (error: unknown) {
      console.error("Error fetching related content:", error);
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

