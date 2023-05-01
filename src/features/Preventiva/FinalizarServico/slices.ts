import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import putFinalizarPreventiva from "./services";
import {
  IInitialStatePutFinalizarPreventiva,
  IRequestPutFinalizarPreventiva,
} from "../types";

export const actionPutFinalizarPreventiva = createAsyncThunk(
  "PUT_FINALIZAR_PREVENTIVA",
  async (data: IRequestPutFinalizarPreventiva) => {
    const result = await putFinalizarPreventiva(data);
    console.log(result, "<<<");
    return result;
  }
);

const putFinalizarPreventivaSlice = createSlice({
  name: "PUT_FINALIZAR_PREVENTIVA",
  initialState: {
    status: "",
    feedbackError: "",
  } as IInitialStatePutFinalizarPreventiva,
  reducers: {},
  extraReducers: {
    [`${actionPutFinalizarPreventiva.pending}`]: (state) => {
      state.status = "loading";
    },
    [`${actionPutFinalizarPreventiva.fulfilled}`]: (state, { payload }) => {
      state.status = "success";
    },
    [`${actionPutFinalizarPreventiva.rejected}`]: (state, payload) => {
      console.log(payload)
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default putFinalizarPreventivaSlice.reducer;
