import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchcategories, fetchAllDataByCategory, fetchSearchData } from "./linksAction";

// Define the types for the state
interface LinksState {
  items: unknown[]; // Adjust this type based on the structure of fetched categories
  searchData: unknown[]; // Adjust this type based on the structure of search data
  categoryData: unknown[]; // Adjust this type based on the structure of category data
  loading: boolean;
  error: string | null;
}

const initialState: LinksState = {
  items: [],
  searchData: [],
  categoryData: [],
  loading: false,
  error: null,
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchcategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcategories.fulfilled, (state, action: PayloadAction<unknown[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchcategories.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Search data
      .addCase(fetchSearchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchData.fulfilled, (state, action: PayloadAction<unknown[]>) => {
        state.loading = false;
        state.searchData = action.payload;
      })
      .addCase(fetchSearchData.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // View all data by category
      .addCase(fetchAllDataByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDataByCategory.fulfilled, (state, action: PayloadAction<unknown[]>) => {
        state.loading = false;
        state.categoryData = action.payload;
      })
      .addCase(fetchAllDataByCategory.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default linksSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { fetchcategories , fetchAllDataByCategory ,fetchSearchData } from "./linksAction";


// const initialState: any = {
//   items: [],
//   searchData:[],
//   categoryData:[],
//   loading: false,
//   error: null,
// };

// export const linksSlice = createSlice({
//   name: 'links',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchcategories.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchcategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchcategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })

//       // search data
//       .addCase(fetchSearchData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSearchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.searchData = action.payload;
//       })
//       .addCase(fetchSearchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // view all data
//       .addCase(fetchAllDataByCategory.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllDataByCategory.fulfilled, (state, action) => {
//         state.loading = false;
//         state.categoryData = action.payload;
//       })
//       .addCase(fetchAllDataByCategory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//   },
// });

// export default linksSlice.reducer;
