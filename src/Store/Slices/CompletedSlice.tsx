import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { objToComplete } from "../../Components/Article/Article";



interface InitialCompletedState {
  items: objToComplete[] | [];
}

const initialState: InitialCompletedState = {
  items: [],
};

export const CompletedSlice = createSlice({
  name: "completed",
  initialState,
  reducers: {
    completeArt: (state, action: PayloadAction<objToComplete>) => {
     const spread = state.items
      state.items = [...spread, {...action.payload}];
    },
    deleteCompletedArt: (state, action: PayloadAction<objToComplete>) => {

      const indexToRemove = state.items.findIndex(element => element.articleName === action.payload.articleName)
      state.items.splice(indexToRemove, 1)
    },
  },
});




export const { completeArt, deleteCompletedArt } = CompletedSlice.actions;
export default CompletedSlice.reducer;
