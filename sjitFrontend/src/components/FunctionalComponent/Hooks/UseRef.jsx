import { useState,useRef,useEffect} from "react";



const UseRef =() => {
        var[text,setText]=useState("");
        var previousRender=useRef();
        useEffect(()=>{
            previousRender.current=text
            console.log(previousRender.current);
        },[text])
         return(

            <div>
                <h1>
                   This is UseRef Example
                </h1>
                type your Text : <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                
                
                <h2>The Current Render is {text} </h2>

                <h3>the previous Render text is {previousRender.current}</h3>
            </div>
         )

}

export default UseRef;