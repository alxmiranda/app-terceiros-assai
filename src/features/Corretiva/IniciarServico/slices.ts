import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IInitialStatePostIniciarCorretiva,
  IRequestPostIniciarCorretiva,
} from "../types";
import postIniciarCorretiva from "./services";

export const actionPostInciarCorretiva = createAsyncThunk(
  "POST_INICIAR_CORRETIVA",
  async (props: IRequestPostIniciarCorretiva) => {
    console.log("here")
    const data = await postIniciarCorretiva(props);
    return data;
  }
);

const postIniciarCorretivaSlice = createSlice({
  name: "POST_INICIAR_CORRETIVA",
  initialState: {
    status: "",
    feedbackError: "",
  } as IInitialStatePostIniciarCorretiva,
  reducers: {
    actionResetPostInciarCorretiva: (state) => {
      state.status = "";
      state.feedbackError = "";
    },
  },
  extraReducers: {
    [`${actionPostInciarCorretiva.pending}`]: (state) => {
      state.status = "loading";
    },
    [`${actionPostInciarCorretiva.fulfilled}`]: (state) => {
      state.status = "success";
    },
    [`${actionPostInciarCorretiva.rejected}`]: (state, payload) => {
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default postIniciarCorretivaSlice.reducer;
export const { actionResetPostInciarCorretiva } =
  postIniciarCorretivaSlice.actions;
