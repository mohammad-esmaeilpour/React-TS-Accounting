/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { DecodeJwt } from "../../functions/DecodeJwt";

export type TUser = {
  role: string | null;
};

const decodedToken =
  localStorage.getItem("accessToken") &&
  DecodeJwt(localStorage.getItem("accessToken"));

const initialState: TUser = {
  role: decodedToken?.role || "user",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { updateUser } = user.actions;
export default user.reducer;
