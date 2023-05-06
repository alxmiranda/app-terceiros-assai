import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postMediaCorretiva from "./services";
import {
  IInitialStatePutMediasCorretiva,
  IRequestPostMediaCorretiva,
} from "../../types";

export const actionPostMediaCorretiva = createAsyncThunk(
  "POST_MEDIA_CORRETIVA",
  async (data: IRequestPostMediaCorretiva) => {
    const result = await postMediaCorretiva(data);
    return result;
  }
);

const postMediaCorretivaSlice = createSlice({
  name: "POST_MEDIA_CORRETIVA",
  initialState: {
    status: "",
    feedbackError: "",
  } as IInitialStatePutMediasCorretiva,
  reducers: {},
  extraReducers: {
    [`${actionPostMediaCorretiva.pending}`]: (state) => {
      state.status = "loading";
    },
    [`${actionPostMediaCorretiva.fulfilled}`]: (state, { payload }) => {
      state.status = "success";
    },
    [`${actionPostMediaCorretiva.rejected}`]: (state, payload) => {
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default postMediaCorretivaSlice.reducer;
