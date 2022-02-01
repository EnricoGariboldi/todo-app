import Title from "./Components/Title/Title";
import ListIcon from "./Media/list.png";
import Subtitle from "./Components/Subtitle/Subtitle";
import "./ArticleList.css";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../src/Store/Hooks";
import ElementAdder from "./Components/ElementAdder/ElementAdder";
import { insertArt } from "./Store/Slices/StateSlice";
import Article from "./Components/Article/Article";

export type articleInfo = {
  category: number;
  article: string;
};

const ArticleList = () => {
  let location = useLocation();
  const dispatch = useAppDispatch();
  const CategoriesSelected = useAppSelector(
    (state) => state.categories.categories
  );
  const categoryNameActive = location.state;
  let catIndex = 0;
  CategoriesSelected.forEach((element) => {
    catIndex = CategoriesSelected.findIndex((element) => {
      return element.categoryName === location.state;
    });
  });
  
  const handleArticleInsert = (
    articlePassed: string ) => {
    
    const insertInfo = {
      category: catIndex,
      article: articlePassed,
    };

    dispatch(insertArt(insertInfo));
  };

  return (
    <div className="ArticleList">
      <Title text="TO DO LIST" img={ListIcon} />
      <Subtitle text={`${location.state}`} />

      {CategoriesSelected[catIndex] && CategoriesSelected[catIndex].articleList.length > 0
        && CategoriesSelected[catIndex].articleList.map(element => {
          return(
            <div> 
              <Article article={element}/>
            </div>
          )
        })
      }

      <div className="ArticleList-ArtAdder">
        <ElementAdder
          handleIns={handleArticleInsert}
          adderType="Articles"
          categoryActive={categoryNameActive}
        />
      </div>
    </div>
  );
};
export default ArticleList;
