import React, { useState } from "react";
import "./App.css";
import Title from "./Components/Title/Title";
import ListIcon from "./Media/list.png";
import Subtitle from "./Components/Subtitle/Subtitle";
import ElementAdder from "./Components/ElementAdder/ElementAdder";
import Category from "./Components/Category/Category";

function App() {
  const initialCategoryState: string[] | [] = [];

  const [categoryState, setCategoryState] = useState(initialCategoryState);

  const handleInsert = (categoryName: string) => {
    const newValue = [...categoryState, categoryName];
    setCategoryState(newValue);
  };

  return (
    <div className="App">
      <Title text="TO DO LIST" img={ListIcon} />
      <Subtitle text="Categories" />
      
        {console.log(categoryState)}

        {categoryState &&
          categoryState.map((element) => {
            return <Category key={element} category={element} />;
          })}
          
      
      <div className="App-adder">
        
        <ElementAdder handleIns={handleInsert} categoryList={categoryState} />
      </div>
    </div>
  );
}

export default App;
