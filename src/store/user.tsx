import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import User from "./userType"

export interface UserState {
    value: User[]
}

const initialState: UserState = {
    value: []
}

const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers: {
            addUser(state, action: PayloadAction<User>) {
                state.value.push(action.payload)
            },
            removeUser(state, action: PayloadAction<{id: number}>) {
                state.value = state.value.filter(user => user.id !== action.payload.id)
            }, 
            redactUser(state: UserState, action: PayloadAction<{user: User}>) {
                state.value = state.value.map(user => user.id === action.payload.user.id ? action.payload.user : user)
            }
        }
    }
)

export const { addUser, removeUser, redactUser } = userSlice.actions
export default userSlice.reducer