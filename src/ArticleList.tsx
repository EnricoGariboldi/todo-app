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

  const ArticleSelected = useAppSelector(
    (state) => state.completed.items
  );


    catIndex = CategoriesSelected.findIndex((element) => {
      return element.categoryName === location.state;
    });
    const CompleteArticlesCat = ArticleSelected.filter(element => element.categoryName === categoryNameActive)
  
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

      <div className="ArticleList-todo-box">
      <div className="ArticleList-todo">To do</div>
      </div>

      {CategoriesSelected[catIndex] && CategoriesSelected[catIndex].articleList.length > 0
        && CategoriesSelected[catIndex].articleList.map(element => {

            const categoryName =  CategoriesSelected[catIndex].categoryName

          const articleInfoObj = {
            categoryIndex : catIndex,
            category: categoryName,
            article : element
          }
          

          return(
            <div> 
              <Article article={articleInfoObj.article} categoryName={articleInfoObj.category} categoryIndex={articleInfoObj.categoryIndex}/>
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

      {  CompleteArticlesCat && CompleteArticlesCat.length > 0 ? (
                <div className="ArticleList-todo-box">
                <div className="ArticleList-todo">Completed</div>
                </div>
      ) : ('')
      }
      {  CompleteArticlesCat && CompleteArticlesCat.length > 0 ? (
        CompleteArticlesCat.map(element => {
          return(
            <div className="ArticleList-crossedArt"> 
              <Article article={element.articleName} categoryName={element.categoryName} categoryIndex={element.categoryIndex} />
            </div>
          )
        })
  ) : ('')
      }

    </div>
  );
};
export default ArticleList;
