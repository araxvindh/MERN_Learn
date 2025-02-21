import { memo,useState} from "react";

const NumberFile =()=>
{
    var[number,setNum]=useState(0);
    return(
        <div>
            <h2>
                this is the number
            </h2>

            <input type="number" value={number} onChange={(e)=> setNum(e.target.value)}/>

            <h3>
                The Number is {number}
            </h3>
        </div>
    )
}
export default memo(NumberFile)