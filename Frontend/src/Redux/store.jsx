import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './AuthSlice';
import sidebarReducer from './SidebarSlice';
import scoreReducer from './ScoreSlice';

// Combine all reducers
const rootReducer = combineReducers({
  userData: userReducer,
  sidebar: sidebarReducer,
  score: scoreReducer // Ensure this matches the whitelist
});

// Configure persistence
const persistConfig = {
  key: 'Tseep',
  version: 1,
  storage,
  whitelist: ['userData', 'score'], // Persist userData and score
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
