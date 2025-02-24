import { useContext } from "react";
import { ResultPub } from "../CoE";

const StudentResults =() =>
{
    const result=useContext(ResultPub)
    console.log(result);
    return(
        <div>
            <h1>Results :</h1>
            <h2>SGPA : {result.sgpa}</h2>
            <h3>CGPA :{result.cgpa}</h3>
        </div>
    )
}

export default StudentResults;