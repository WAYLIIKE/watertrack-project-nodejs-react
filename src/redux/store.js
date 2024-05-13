import { configureStore } from '@reduxjs/toolkit';
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
import { waterReducer } from './water/waterSlice';
import { userReducer } from './user/userSlice';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    water: waterReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
