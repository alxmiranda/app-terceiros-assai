import { configureStore } from "@reduxjs/toolkit"
import getLogin from "./features/Login/slices"
import getServicos from "./features/Servicos/slices"
import getPreventiva from "./features/Preventiva/GetPreventiva/slices"
import getCorretiva from "./features/Corretiva/GetCorretiva/slices"
import putIniciarPreventiva from "./features/Preventiva/IniciarServico/slices"
import postMediaPreventiva from "./features/Preventiva/FinalizarServico/SendPhotos/slices"
import postMediaCorretiva from "./features/Corretiva/FinalizarServico/SendPhotos/slices"
import putFinalizarPreventiva from "./features/Preventiva/FinalizarServico/slices"
import putFinalizarCorretiva from "./features/Corretiva/FinalizarServico/slices"
import postIniciarCorretiva from "./features/Corretiva/IniciarServico/slices"

export const store = configureStore({
  reducer: {
    getLogin,
    getServicos,
    getPreventiva,
    getCorretiva,
    putIniciarPreventiva,
    postMediaPreventiva,
    postMediaCorretiva,
    putFinalizarPreventiva,
    postIniciarCorretiva,
    putFinalizarCorretiva
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch