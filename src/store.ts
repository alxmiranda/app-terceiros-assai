import { configureStore } from "@reduxjs/toolkit"
import getLogin from "./features/Login/slices"
import getServicos from "./features/Servicos/slices"
import getPreventiva from "./features/Preventiva/GetPreventiva/slices"

export const store = configureStore({
  reducer: {
    getLogin,
    getServicos,
    getPreventiva
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch