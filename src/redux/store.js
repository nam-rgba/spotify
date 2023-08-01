import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamAPI } from "./service/shazamAPI";

export const store = configureStore({
  reducer: {
    [shazamAPI.reducerPath]: shazamAPI.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamAPI.middleware),
});
