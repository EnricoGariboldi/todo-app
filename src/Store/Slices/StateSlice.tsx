import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";
import type { articleInfo } from "../../ArticleList";

export type ArtArray = {
      categoryName: string;
      articleList: string[] | [];
    };

interface InitialState {
  categories: ArtArray[] | [];
}

const initialState: InitialState = {
  categories: [],
};

export const StateSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    insertCat: (state, action: PayloadAction<ArtArray>) => {
      state.categories = [...state.categories, {...action.payload}];
    },
    deleteCat: (state, action: PayloadAction<ArtArray>) => {
      const stateUpdated = state.categories.filter(element => element.categoryName !== action.payload.categoryName)
      if(stateUpdated.length < state.categories.length ) {
        state.categories = stateUpdated
      }
    },
    insertArt: (state, action: PayloadAction<articleInfo>) => {  
      const spread = state.categories[action.payload.category].articleList
      state.categories[action.payload.category].articleList = [...spread, action.payload.article]
    }
  },
});
export const { insertCat, deleteCat, insertArt } = StateSlice.actions;
export const categorySelected = (state: RootState) =>
  state.categories.categories;
export default StateSlice.reducer;
