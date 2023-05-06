import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import servicos from "./services";
import { IInitialStateServicos, IRequestGetServicos } from "./types";

export const actionGetServicos: any = createAsyncThunk(
  "GET_SERVICOS",
  async ({tipoServico}: IRequestGetServicos) => {
    const data = await servicos({
      dataIni: "2023-04-01",
      dataFim: "2023-05-30",
      status: "",
      tipoServico: tipoServico ?? "preventiva"
    });
    return data;
  }
);

const servicosSlice = createSlice({
  name: "GET_SERVICOS",
  initialState: {
    servicos: [],
    status: "",
    feedbackError: "",
  } as IInitialStateServicos,
  reducers: {},
  extraReducers: {
    [actionGetServicos.pending]: (state) => {
      state.status = "loading";
    },
    [actionGetServicos.fulfilled]: (state, { payload: { data } }) => {
      state.status = "success";
      state.servicos = data;
    },
    [actionGetServicos.rejected]: (state, payload) => {
      ;
      state.status = "failed";
      state.feedbackError = payload.error.message;
    },
  },
});

export default servicosSlice.reducer;
