import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/conterSlice'

export const counterStore = configureStore({
  reducer: {
    counter: counterReducer, 
  },
})

export type RootState = ReturnType<typeof counterStore.getState>
export type AppDispatch = typeof counterStore.dispatch
