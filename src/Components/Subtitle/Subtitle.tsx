import React from "react"
import './Subtitle.css'
import BackArrow from '../../Media/backarrow.png'
import { useNavigate } from "react-router-dom";

interface Props {
    text: string;
}

const Subtitle: React.FC<Props>  = ({text}) => {

    let navigate = useNavigate();
    
return (
    <div className="Subtitle">
        <div className="Subtitle-container-spacing" >
            
            {
            text !== 'Categories' ? (
                <div className="Subtitle-onclick-div" onClick={() => {
                    navigate("/", { state: null });
                }}><img src={BackArrow} alt="tick" /></div>
            ) : (null)
        }
        
        </div>
        <div className="Subtitle-text">{text}</div>
        <div className="Subtitle-container-spacing"></div>
    </div>
)

}
export default Subtitle;