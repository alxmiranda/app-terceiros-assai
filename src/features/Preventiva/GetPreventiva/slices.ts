import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getPreventivaByEtiqueta from "./services";
import { IInitialStateGetPreventiva } from "../types";

export const actionGetPreventiva: any = createAsyncThunk(
  "GET_PREVENTIVA",
  async (etiqueta: string) => {
    const data = await getPreventivaByEtiqueta(etiqueta);
    return data;
  }
);

const getPreventivaSlice = createSlice({
  name: "GET_PREVENTIVA",
  initialState: {
    preventiva: {},
    status: "",
    feedbackError: "",
  } as IInitialStateGetPreventiva,
  reducers: {},
  extraReducers: {
    [actionGetPreventiva.pending]: (state) => {
      state.status = "loading";
    },
    [actionGetPreventiva.fulfilled]: (state, { payload: { data } }) => {
      state.status = "success";
      state.preventiva = data;
    },
    [actionGetPreventiva.rejected]: (state, payload) => {
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default getPreventivaSlice.reducer;
