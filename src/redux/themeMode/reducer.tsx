import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "light";

const themeModeReducer = createSlice({
  name: "themeModeReducer",
  initialState,
  reducers: {
    setThemeMode: (_, { payload }: PayloadAction<string>) => {
      return payload;
    },
  },
});

export default themeModeReducer.reducer;
export const { setThemeMode } = themeModeReducer.actions;
export const useThemeMode = (state: any) => {
  return state.themeModeReducer as string;
};
