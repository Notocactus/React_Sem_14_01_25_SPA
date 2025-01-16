import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: { value: 0 },
        reducers: {
            increment(state) {
                state.value++
            },
            decrement(state) {
                state.value--
            },
            incrementByAmount(state, action: PayloadAction<{amount: number}>) {
                state.value += action.payload.amount
                
            }
        }
    }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer