import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/initFirebase";
import { ContentItem } from "./linksAction";

interface FetchDocumentParams {
  collectionName: string;
  documentId: string;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchDocumentById = createAsyncThunk<
  ContentItem, 
  FetchDocumentParams, 
  {
    rejectValue: string;
  }
>(
  "detail/fetchDocumentById",
  async ({ collectionName, documentId }, thunkAPI) => {
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as ContentItem;
      } else {
        return thunkAPI.rejectWithValue("No such document!");
      }
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);


// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/firebase/initFirebase";

// export const fetchDocumentById = createAsyncThunk(
//   "detail/fetchDocumentById",
//   async ({ collectionName, documentId }, thunkAPI) => {
//     try {
//       const docRef = doc(db, collectionName, documentId);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         return docSnap.data();
//       } else {
//         return thunkAPI.rejectWithValue("No such document!");
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
