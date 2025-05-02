// import { createSlice } from "@reduxjs/toolkit";
// import { fetchRelatedContent } from "./relatedArticalsAction";

// const initialState = {
//   relatedArticals: [],
//   loading: false,
//   error: null,
// };

// const relatedArticalsSlice = createSlice({
//   name: "relatedArticals",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRelatedContent.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchRelatedContent.fulfilled, (state, action) => {
//         state.loading = false;
//         state.relatedArticals = action.payload;
//       })
//       .addCase(fetchRelatedContent.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default relatedArticalsSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRelatedContent } from "./relatedArticalsAction";

export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  categoryId?: string;
  subcategoryId?: string;
  createdAt?: unknown;
  [key: string]: unknown;
}

// Define the state type
interface RelatedArticlesState {
  relatedArticals: ContentItem[];
  loading: boolean;
  error: string | null;
}

const initialState: RelatedArticlesState = {
  relatedArticals: [],
  loading: false,
  error: null,
};

const relatedArticalsSlice = createSlice({
  name: "relatedArticals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRelatedContent.fulfilled, (state, action: PayloadAction<ContentItem[]>) => {
        state.loading = false;
        state.relatedArticals = action.payload;
      })
      .addCase(fetchRelatedContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default relatedArticalsSlice.reducer;
