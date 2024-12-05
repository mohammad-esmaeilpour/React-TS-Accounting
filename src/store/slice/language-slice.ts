import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TLanguage {
  value: "fa" | "tr" | "en";
}

const initialState: TLanguage = { value: "fa" };

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    updateLanguage: (_state, action: PayloadAction<TLanguage>) => {
      return action.payload;
    },
  },
});

export const { updateLanguage } = language.actions;
export default language.reducer;
