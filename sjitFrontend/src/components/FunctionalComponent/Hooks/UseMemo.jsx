import {useState,useEffect,useMemo} from 'react';

// function doublingUpNumber(num)
// {
//     return num*2;
// }

function slowFunction(num)
{
    for(let i=0;i<=10;i++){}
    return num*2;
}

const UseMemo = ()=>
{
    var[number,setNumber]=useState(0);
    var[theme,setTheme]=useState(true);
    var styling ={
        backgroundColor:theme ? "black":"white",
        color:theme ? "white":"black"
    };
    return(
        <>
        <div style={styling}>
        <button onClick={()=> setTheme(!theme)}>Toggle Theme</button>
            <h1> hello Memo</h1>
            Number Box: <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />

            <h3>
                The Number is {number}
            </h3>
            <h3>
                the number is {slowFunction(number)}
            </h3>
        </div>
        </>
    )
}
export default UseMemo;