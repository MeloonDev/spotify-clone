import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IsPlayingState {
  value: boolean;
}

const initialState: IsPlayingState = {
  value: false,
};

export const isPlayingSlice = createSlice({
  name: "isPlaying",
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsPlaying } = isPlayingSlice.actions;

export default isPlayingSlice.reducer;
