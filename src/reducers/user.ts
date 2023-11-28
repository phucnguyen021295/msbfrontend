import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {}

const initialState: UserState = {}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<object>) => {
            return {...state, ...action.payload}
        },
        logout: (state) => {
            return {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { update, logout } = userSlide.actions

export default userSlide.reducer