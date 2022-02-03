import React, { useState } from "react";
import "./Article.css";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  article: string;
}

const Article: React.FC<Props> = ({ article }) => {

  const [checked, setChecked] = useState(false);

  const changeText = () => {
    if(checked === false) {
    document.getElementById(article)!.style.textDecoration = 'line-through'
    setChecked(true)
    }
    if(checked === true) {
      document.getElementById(article)!.style.textDecoration = 'none'
      setChecked(false)
    }
    
  }

  return (
    <div className="Article">
      <div className="Article-box">
        <div className="Article-text" id={article}>{article}</div>
        
          <Checkbox checked={checked} onChange={changeText} />
        
      </div>
    </div>
  );
};
export default Article;
