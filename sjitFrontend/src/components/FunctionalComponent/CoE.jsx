import { createContext } from "react";
import Faculty from "../FunctionalComponent/ContextApi/Faculty"

export const  ResultPub = createContext();

const CoE =() =>
    {
        return(
            <div>
                 <ResultPub.Provider value={{sgpa:"10 SGPA" ,cgpa:"10 CGPA"}}>
                    <h1> Result Published</h1>
                    <Faculty></Faculty>
                 </ResultPub.Provider>
            </div> 
        )
    }
    
    export default CoE;