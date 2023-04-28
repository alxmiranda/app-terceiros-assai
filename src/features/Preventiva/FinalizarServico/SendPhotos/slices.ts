import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postMediaPreventiva from "./services";
import {
  IInitialStatePutMediasPreventiva,
  IRequestPostMediaPreventiva,
} from "../../types";

export const actionPostMediaPreventiva = createAsyncThunk(
  "POST_MEDIA_PREVENTIVA",
  async (data: IRequestPostMediaPreventiva) => {
    const result = await postMediaPreventiva(data);
    console.log(result, "<<<");
    return result;
  }
);

const postMediaPreventivaSlice = createSlice({
  name: "POST_MEDIA_PREVENTIVA",
  initialState: {
    status: "",
    feedbackError: "",
  } as IInitialStatePutMediasPreventiva,
  reducers: {},
  extraReducers: {
    [`${actionPostMediaPreventiva.pending}`]: (state) => {
      state.status = "loading";
    },
    [`${actionPostMediaPreventiva.fulfilled}`]: (state, { payload }) => {
      state.status = "success";
      console.log(Promise.all(payload), "success");
    },
    [`${actionPostMediaPreventiva.rejected}`]: (state, payload) => {
      console.log(payload)
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default postMediaPreventivaSlice.reducer;
