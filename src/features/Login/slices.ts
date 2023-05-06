import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import login from './services';

interface IRequestGetLogin {
  user: string,
  pass: string
}

interface IStateLogin {
  user: object,
  status: "" | "success" | "failed" | "loading",
  feedbackError?: any
}

export const actionGetLogin: any = createAsyncThunk(
  "GET_LOGIN",
  async (params: IRequestGetLogin) => {
    const { data } = await login(params)
    return data
  }
)

const loginSlice = createSlice({
  name: 'GET_LOGIN',
  initialState: <IStateLogin>{
    user: {},
    status: '',
    feedbackError: ''
  },
  reducers: {},
  extraReducers: {
    [actionGetLogin.pending]: (state) => {
      state.status = 'loading'
    },
    [actionGetLogin.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.user = payload
    },
    [actionGetLogin.rejected]: (state, payload) => {
      
      state.status = 'failed'
      state.feedbackError = payload.error.message
    }
  },
})

export default loginSlice.reducer

