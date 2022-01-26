import React from "react"
import './Subtitle.css'

interface Props {
    text: string;
}

const Subtitle: React.FC<Props>  = ({text}) => {
    
return (
    <div className="Subtitle">
        <div className="Subtitle-text">{text}</div>
    </div>
)

}
export default Subtitle;