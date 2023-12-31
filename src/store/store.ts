import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./activePageSlice";
import currenSongSlice from "./currenSongSlice";
import isPlayingSlice from "./isPlayingSlice";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    currenSong: currenSongSlice,
    isPlaying: isPlayingSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
