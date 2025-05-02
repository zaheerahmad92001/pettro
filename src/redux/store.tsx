// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import linksReducer from '../redux/features/linksSlice';
import homeStatisticsReducer from '../redux/features/homeStatisticsSlice';
import relatedArticalsSlice from '../redux/features/relatedArticalsSlice';
import detailSlice from '../redux/features/detailSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['homeStatistics'], // only persist auth slice
};


const rootReducer = combineReducers({
    links: linksReducer,
    homeStatistics:homeStatisticsReducer,
    relatedArticals:relatedArticalsSlice,
    detail:detailSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
