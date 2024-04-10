import { configureStore } from '@reduxjs/toolkit'
import cartItemsReducer from './cartItems'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsReducer
    }
})