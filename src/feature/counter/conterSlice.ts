import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const fetchIncrement = createAsyncThunk(
  'counter/fetchIncrement',
  async (value: number) => {
    const response = await axios.put('/counter/increment', { value: value })
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
      state.value = action.payload.value
    }
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer

