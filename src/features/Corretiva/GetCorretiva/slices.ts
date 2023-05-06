import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getCorretivaById from "./services";
import { IInitialStateGetCorretiva } from "../types";

export const actionGetCorretiva: any = createAsyncThunk(
  "GET_CORRETIVA",
  async (idCorretiva: string) => {
    const data = await getCorretivaById(idCorretiva);
    return data;
  }
);

const getCorretivaSlice = createSlice({
  name: "GET_CORRETIVA",
  initialState: {
    preventiva: {},
    status: "",
    feedbackError: "",
  } as IInitialStateGetCorretiva,
  reducers: {},
  extraReducers: {
    [actionGetCorretiva.pending]: (state) => {
      state.status = "loading";
    },
    [actionGetCorretiva.fulfilled]: (state, { payload: { data } }) => {
      state.status = "success";
      state.preventiva = data;
    },
    [actionGetCorretiva.rejected]: (state, payload) => {
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default getCorretivaSlice.reducer;
