import React from "react";
import "./Category.css";
import Bin from "../../Media/bin.png"

interface Props {
  category: string;
}

const Category: React.FC<Props> = ({ category }) => {
  return (
      <div className="Category">
    <div className="Category-box">
      <div className="Category-text">
          {category}
          </div>
    </div>

    <div className="Category-bin">
    <img src={Bin} alt='bin' />
    </div>

    </div>
  );
};
export default Category;
