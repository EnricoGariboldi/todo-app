import React, { useState } from "react";
import "./ElementAdder.css";
import Tick from "../../Media/tick.png";
import { useAppSelector } from "../../Store/Hooks";

interface Props {
  handleIns: (value: string) => void;
}

const ElementAdder: React.FC<Props> = ({ handleIns }) => {
  const CategoriesSelected = useAppSelector(
    (state) => state.categories.categories
  );

  const [ControlVariables, setControlVariables] = useState({
    isWrote: false,
  });
  const [insValue, setInsValue] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  const verifyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== null && e.target.value !== "") {
      setControlVariables({ isWrote: true });
      setInsValue(e.target.value);
    } else {
      setControlVariables({ isWrote: false });
      setInsValue("");
    }
  };

  return (
    <div className="ElementAdder">
      <input
        type="text"
        id="inputtext"
        className="ElementAdder-input"
        placeholder="Type here..."
        onChange={(e) => {
          verifyValue(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && insValue !== "") {
            
            for (let index = 0; index < CategoriesSelected.length; index++) {
              if ( insValue === CategoriesSelected[index].categoryName) {
                setIsPresent(true)
              } 
            }
            if(isPresent === true) {
            window.alert("Elemento già inserito");
            } else {
              handleIns(insValue);
              (document.getElementById("inputtext") as HTMLInputElement).value =
                "";
              setInsValue("");
              setControlVariables({ isWrote: false });
            }
          }
        }}
      />

      {ControlVariables.isWrote ? (
        <div className="ElementAdder-img" id="adder-img">
          <img src={Tick} alt="tick" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ElementAdder;
