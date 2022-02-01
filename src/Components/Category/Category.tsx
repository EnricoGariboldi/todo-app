import React from "react";
import "./Category.css";
import Bin from "../../Media/bin.png"
import { ArtArray } from "../../Store/Slices/StateSlice";

interface Props {
  category: ArtArray;
 clickHandler : (category : ArtArray ) => void
 navigateHandler : (element: string) => void
}

const Category: React.FC<Props> = ({ category, clickHandler, navigateHandler }) => {

  
  return (
      <div className="Category">
    <div className="Category-box" onClick={ () => {
      navigateHandler(category.categoryName)
    }}>
      <div className="Category-text">
          { category.categoryName}
          </div>
    </div>

    <div className="Category-bin" onClick={ () => {
      clickHandler(category)
    }} >
    <img src={Bin} alt='bin'  />
    </div>
    </div>
  );
};
export default Category;
