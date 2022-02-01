import "./App.css";
import Title from "./Components/Title/Title";
import ListIcon from "./Media/list.png";
import Subtitle from "./Components/Subtitle/Subtitle";
import ElementAdder from "./Components/ElementAdder/ElementAdder";
import Category from "./Components/Category/Category";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../src/Store/Hooks";
import { insertCat, deleteCat } from "./Store/Slices/StateSlice";
import {ArtArray} from './Store/Slices/StateSlice'

function App() {
  const navigate = useNavigate();
  

  const CategoriesSelected = useAppSelector(
    (state) => state.categories.categories
  );
  const dispatch = useAppDispatch();

  console.log(CategoriesSelected);

  const handleInsert = (categoryPassed: string) => {
    const categoryToInsert = {
      categoryName: categoryPassed,
      articleList: [],
    };
    dispatch(insertCat(categoryToInsert));
  };

  const deleteHandler = (category: ArtArray) => {
   dispatch(deleteCat(category))
  };

  const navigateToArticle = (element: string ) => {
    navigate("/article-list", { state: element });
  };

  return (
    <div className="App">
      <Title text="TO DO LIST" img={ListIcon} />
      <Subtitle text="Categories" />

      {CategoriesSelected && CategoriesSelected.length>0 &&
        CategoriesSelected.map((element) => {
          
          
          return (
            <div
            >
              {
                element &&
                <Category category={element} navigateHandler={navigateToArticle} clickHandler={deleteHandler} />
                
                }
                
            </div>

                

          );
        })}

      <div className="App-adder">
        <ElementAdder handleIns={handleInsert} />
        <div className="App-container-spacing"></div>
      </div>
    </div>
  );
}

export default App;
