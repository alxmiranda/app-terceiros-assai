import { configureStore } from "@reduxjs/toolkit"
import sliceLogin from "./features/Login/slices"
import sliceServocs from "./features/Servicos/slices"

export const store = configureStore({
  reducer: {
    getLogin: sliceLogin,
    getServicos: sliceServocs
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch