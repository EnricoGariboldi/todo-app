import { configureStore } from '@reduxjs/toolkit';
import StateSliceReducer from './Slices/StateSlice'
import CompletedSliceReducer from './Slices/CompletedSlice'

export const Store = configureStore({
    reducer : {
        categories : StateSliceReducer,
        completed : CompletedSliceReducer
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch