import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IInitialStatePutIniciarPreventiva,
  IRequestPutIniciarPreventiva,
} from "../types";
import putIniciarPreventiva from "./services";

export const actionPutInciarPreventiva = createAsyncThunk(
  "PUT_INICIAR_PREVENTIVA",
  async (props: IRequestPutIniciarPreventiva) => {
    const data = await putIniciarPreventiva(props);
    return data;
  }
);

const putIniciarPreventivaSlice = createSlice({
  name: "PUT_INICIAR_PREVENTIVA",
  initialState: {
    status: "",
    feedbackError: "",
  } as IInitialStatePutIniciarPreventiva,
  reducers: {
    actionResetPutInciarPreventiva: (state) => {
      state.status = "";
      state.feedbackError = "";
    },
  },
  extraReducers: {
    [`${actionPutInciarPreventiva.pending}`]: (state) => {
      state.status = "loading";
    },
    [`${actionPutInciarPreventiva.fulfilled}`]: (state) => {
      state.status = "success";
    },
    [`${actionPutInciarPreventiva.rejected}`]: (state, payload) => {
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default putIniciarPreventivaSlice.reducer;
export const { actionResetPutInciarPreventiva } =
  putIniciarPreventivaSlice.actions;
