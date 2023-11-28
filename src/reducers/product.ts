import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {}

const initialState: ProductState = []

export const productSlide = createSlice({
    name: 'product',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<object>) => {
            return action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { update } = productSlide.actions

export default productSlide.reducer