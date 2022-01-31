import { configureStore } from '@reduxjs/toolkit';
import StateSliceReducer from './Slices/StateSlice'

export const Store = configureStore({
    reducer : {
        categories : StateSliceReducer
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch