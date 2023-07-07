import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrentSongState {
  value: null | number;
}

const initialState: CurrentSongState = {
  value: null,
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;
