import Title from "./Components/Title/Title";
import ListIcon from "./Media/list.png";
import Subtitle from "./Components/Subtitle/Subtitle";
import "./ArticleList.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../src/Store/Hooks";
import BackArrow from "./Media/backarrow.png"




const ArticleList = () => {
    let navigate = useNavigate();
    let location = useLocation();
      const CategoriesSelected = useAppSelector(
    (state) => state.categories.categories
  );

    return(
        <div className="ArticleList">
        <Title text="TO DO LIST" img={ListIcon} />
        <Subtitle text={`${location.state}`} />
       
        </div>
    )

}
export default ArticleList;