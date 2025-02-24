import { createContext } from "react";
import StudentResults from "../FunctionalComponent/ContextApi/StudentResult";

export const  ResultPub = createContext();

const CoE =() =>
    {
        return(
            <div>
                 <ResultPub.Provider value={{sgpa:"10 SGPA" ,cgpa:"10 CGPA"}}>
                    <h1> Result Published</h1>
                    <StudentResults></StudentResults>
                 </ResultPub.Provider>
            </div> 
        )
    }
    
    export default CoE;