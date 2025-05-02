import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchHomeStatistics, fetchPetCareContent, fetchHomeContentByCategories } from "./homeStatisticsAction";

interface HomeStatisticsState {
  data: unknown | null; 
  petCareData: unknown | null; 
  homeContent: unknown[]; 
  loading: boolean;
  error: string | null;
}

const initialState: HomeStatisticsState = {
  data: null,
  petCareData: null,
  homeContent: [],
  loading: false,
  error: null,
};

const homeStatisticsSlice = createSlice({
  name: "homeStatistics",
  initialState,
  reducers: {
    homeStatistics(state, action: PayloadAction<unknown>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // for home statistics
      .addCase(fetchHomeStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeStatistics.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeStatistics.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // for pet care content
      .addCase(fetchPetCareContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPetCareContent.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.petCareData = action.payload;
      })
      .addCase(fetchPetCareContent.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // for home content by categories
      .addCase(fetchHomeContentByCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeContentByCategories.fulfilled, (state, action: PayloadAction<unknown[]>) => {
        state.loading = false;
        state.homeContent = action.payload;
      })
      .addCase(fetchHomeContentByCategories.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { homeStatistics } = homeStatisticsSlice.actions;
export default homeStatisticsSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import { fetchHomeStatistics , fetchPetCareContent, fetchHomeContentByCategories } from "./homeStatisticsAction";

// const initialState = {
//     data: null,
//     petCareData: null,
//     homeContent:[],
//     loading: false,
//     error: null,
//   };
  
//   const homeStatisticsSlice = createSlice({
//     name: "homeStatistics",
//     initialState,
//     reducers: {
//       homeStatistics(state, action) {
//         state.data = action.payload;
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchHomeStatistics.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(fetchHomeStatistics.fulfilled, (state, action) => {
//           state.loading = false;
//           state.data = action.payload;
//         })
//         .addCase(fetchHomeStatistics.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         })
//         // for pet care content
//         .addCase(fetchPetCareContent.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//           })
//           .addCase(fetchPetCareContent.fulfilled, (state, action) => {
//             state.loading = false;
//             state.petCareData = action.payload;
//           })
//           .addCase(fetchPetCareContent.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//           })
        
//           // for Home content
//         .addCase(fetchHomeContentByCategories.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(fetchHomeContentByCategories.fulfilled, (state, action) => {
//           state.loading = false;
//           state.homeContent = action.payload;
//         })
//         .addCase(fetchHomeContentByCategories.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         })
        
//     },
//   });
//   export const { homeStatistics } = homeStatisticsSlice.actions;
//   export default homeStatisticsSlice.reducer;
