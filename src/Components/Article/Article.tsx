import React, { useState, useEffect } from "react";
import "./Article.css";
import { useAppSelector, useAppDispatch } from "../../Store/Hooks";
import {
  completeArt,
  deleteCompletedArt,
} from "../../Store/Slices/CompletedSlice";
import { deleteArt, insertArt } from "../../Store/Slices/StateSlice";
import type { articleInfo } from "../../ArticleList";

interface Props {
  article: string;
  categoryName: string;
  categoryIndex: number;
}

export type objToComplete = {
  articleName: string;
  categoryName: string;
  categoryIndex: number;
};

const Article: React.FC<Props> = ({ article, categoryName, categoryIndex }) => {
  const ArticleSelected = useAppSelector((state) => state.completed.items);

  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);

  const articleToComplete: objToComplete = {
    articleName: article,
    categoryName: categoryName,
    categoryIndex: categoryIndex,
  };

  const articleToHandle: articleInfo = {
    category: categoryIndex,
    article: article,
  };

  useEffect(() => {
    const exist = ArticleSelected.find(
      (element) => element.articleName === article
    );
    if (exist) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checked]);

  const deleteComplete = () => {
    dispatch(insertArt(articleToHandle));
    dispatch(deleteCompletedArt(articleToComplete));
  };

  const insertComplete = () => {
    dispatch(completeArt(articleToComplete));
    dispatch(deleteArt(articleToHandle));
  };

  return (
    <div className="Article">
      <div className="Article-box">
        <div className="Article-text" id={article}>
          {article}
        </div>

        <label className="container">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              if (e.target.checked === false) {
                deleteComplete();
                setChecked(e.target.checked);
              }
              if (e.target.checked === true) {
                insertComplete();
                setChecked(e.target.checked);
              }
            }}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};
export default Article;
