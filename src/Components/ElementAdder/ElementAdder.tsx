import React, { useState } from "react";
import "./ElementAdder.css";
import Tick from "../../Media/tick.png";
import { useAppSelector } from "../../Store/Hooks";
// import { ArtArray } from "../../Store/Slices/StateSlice";

interface Props {
  handleIns: (whatToInsert: string) => void;
  adderType: string;
  categoryActive: string | unknown;
}

const ElementAdder: React.FC<Props> = ({
  handleIns,
  adderType,
  categoryActive,
}) => {
  const CategoriesSelected = useAppSelector(
    (state) => state.categories.categories
  );
  const ArticleSelected = useAppSelector((state) => state.completed.items);

  const [ControlVariables, setControlVariables] = useState({
    isWrote: false,
  });
  const [insValue, setInsValue] = useState("");
  let isArtPresent = false;
  // let catObjectActive: ArtArray | undefined;
  let isCatPresent = false;

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
            if (adderType === "Categories") {
              CategoriesSelected.forEach((element) => {
                if (insValue === element.categoryName) {
                  isCatPresent = true;
                }
              });

              if (isCatPresent === true) {
                window.alert("Elemento già inserito");
              } else {
                handleIns(insValue);
                (
                  document.getElementById("inputtext") as HTMLInputElement
                ).value = "";
                setInsValue("");
                setControlVariables({ isWrote: false });
              }
            }

            if (adderType === "Articles") {
              CategoriesSelected.forEach((element) => {

                  element.articleList.forEach(element2 => {
                    if (insValue === element2) {
                      isArtPresent = true;
                    }
                  }) 

                  /*
                if (element.categoryName === categoryActive) {
                  catObjectActive = element;
                }
                */
              });
              /*
              catObjectActive?.articleList.forEach((element) => {
                if (insValue === element) {
                  isArtPresent = true;
                }
              });
                */
              ArticleSelected.forEach((element) => {
                if (
                  insValue === element.articleName 
                ) {
                  isArtPresent = true;
                }
              });

              if (isArtPresent === true) {
                window.alert("Articolo già inserito");
              } else {
                handleIns(insValue);
                (
                  document.getElementById("inputtext") as HTMLInputElement
                ).value = "";
                setInsValue("");
                setControlVariables({ isWrote: false });
              }
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
