import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import putFinalizarPreventiva from "./services";
import {
  IInitialStatePutFinalizarCorretiva,
  IRequestPutFinalizarCorretiva,
} from "../types";

export const actionPutFinalizarCorretiva = createAsyncThunk(
  "PUT_FINALIZAR_PREVENTIVA",
  async (data: IRequestPutFinalizarCorretiva) => {
    const result = await putFinalizarPreventiva(data);
    
    return result;
  }
);

const putFinalizarCorretivaSlice = createSlice({
  name: "PUT_FINALIZAR_PREVENTIVA",
  initialState: {
    status: "",
    feedbackError: "",
  } as IInitialStatePutFinalizarCorretiva,
  reducers: {},
  extraReducers: {
    [`${actionPutFinalizarCorretiva.pending}`]: (state) => {
      state.status = "loading";
    },
    [`${actionPutFinalizarCorretiva.fulfilled}`]: (state) => {
      state.status = "success";
    },
    [`${actionPutFinalizarCorretiva.rejected}`]: (state, payload) => {
      
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default putFinalizarCorretivaSlice.reducer;
