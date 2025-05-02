
// import { createSlice } from '@reduxjs/toolkit';
// import { fetchDocumentById } from './detailAction';


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

// const initialState = {
//  productData:ContentItem[] : {} , // This will store products by their ID
//  loading:false,
//  error:null,
// };

// const detailSlice = createSlice({
//   name: 'detail',
//   initialState,
//   reducers: {
//     setDetail: (state, action) => {
//       state.productData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//       builder
//         .addCase(fetchDocumentById.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(fetchDocumentById.fulfilled, (state, action) => {
//           state.loading = false;
//           state.productData = action.payload;
//         })
//         .addCase(fetchDocumentById.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         });
//     },
// });

// export const { setDetail } = detailSlice.actions;

// export default detailSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDocumentById } from './detailAction';
import { ContentItem } from './linksAction';

interface DetailState {
  productData: ContentItem | null;
  loading: boolean;
  error: string | null;
}

const initialState: DetailState = {
  productData: null,
  loading: false,
  error: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail: (state, action: PayloadAction<ContentItem>) => {
      state.productData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocumentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDocumentById.fulfilled, (state, action: PayloadAction<ContentItem>) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(fetchDocumentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setDetail } = detailSlice.actions;

export default detailSlice.reducer;
