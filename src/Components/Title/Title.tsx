import React from "react"
import './Title.css'

interface Props {
    text: string;
    img : string;
}


const Title: React.FC<Props>  = ({text, img}) => {
    
return (
    <div className="Title">
        <div className="Title-text">{text}</div>
        <div className="Title-icon"><img src={img} alt="to do list icon"/>  </div>
    </div>
)

}
export default Title;