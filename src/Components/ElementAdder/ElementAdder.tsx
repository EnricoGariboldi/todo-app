import React, { useState } from "react"
import './ElementAdder.css'
import Tick from '../../Media/tick.png'

interface Props {
handleIns : (value: string) => void
categoryList : string[]
}


const ElementAdder: React.FC<Props>  = ( { handleIns, categoryList }) => {

    

    const [ControlVariables, setControlVariables] = useState({
        isWrote : false
    })
    const [insValue, setInsValue] = useState('') 

    const verifyValue = (e:  React.ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.value !== null && e.target.value !== ''){
            setControlVariables({ isWrote : true})
            setInsValue(e.target.value)
        } else {
            setControlVariables({ isWrote : false})
            setInsValue('')
        }
    }

return (
    <div className="ElementAdder">
        
        <input type="text" id="inputtext" className="ElementAdder-input" placeholder="Type here..."  onChange={(e) => {verifyValue(e)}} 
        onKeyDown={(e ) => {
            if (e.key === 'Enter' && insValue !== '') {
                if(categoryList.includes(insValue)){
                    console.log("categoria già scritta")
                } else {
                    handleIns(insValue);
                    (document.getElementById("inputtext") as HTMLInputElement).value = '';
                    setInsValue('')
                }  
              }
        }}
        />
        
        
        {ControlVariables.isWrote ? (       
            <div className="ElementAdder-img" id="adder-img">
            <img src={Tick} alt='tick' />
            </div>
            ) : ('')}
    </div>
)

}
export default ElementAdder;